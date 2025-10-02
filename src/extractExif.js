const { ExifTool } = require("exiftool-vendored");
const { readdir, readJson, writeJson } = require("fs-extra");
const path = require("path");
const { stat } = require("fs/promises");
const readline = require("readline");

const exiftool = new ExifTool();

const imagesDir = path.join(__dirname, "..", "public", "images");
const outputFile = path.join(__dirname, "data", "photos.json");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function userInput(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

function formatExifDate(dateInput) {
  if (!dateInput) return "";

  const date = typeof dateInput === "string" ? new Date(dateInput.replace(/:/g, "-")) : new Date(dateInput);
  if (isNaN(date)) return "";

  const year = date.getFullYear();
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${monthNames[monthIndex]} ${day}, ${year}`;
}

(async () => {
  const files = await readdir(imagesDir);

  let existingPhotos = [];
  try {
    existingPhotos = await readJson(outputFile);
  } catch (err) {
    console.log("No existing photos.json found. Creating a new one.");
  }

  const photoData = [...existingPhotos];

  let nextId = existingPhotos.length > 0
    ? Math.max(...existingPhotos.map((p) => p.id)) + 1
    : 1;

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (![".jpg", ".jpeg", ".png"].includes(ext)) continue;

    const filePath = path.join(imagesDir, file);
    const metadata = await exiftool.read(filePath);

    const fileStats = await stat(filePath);
    const fallbackDate = fileStats.birthtime || fileStats.ctime;

    const rawDate = metadata.CreateDate || metadata.DateTimeOriginal || fallbackDate.toISOString();
    const formattedDate = formatExifDate(rawDate);

    const width = metadata.ImageWidth || metadata.ExifImageWidth;
    const height = metadata.ImageHeight || metadata.ExifImageHeight;
    const orientation = width > height ? "landscape" : "portrait";

    const fullSizeUrl = `images/${file}`;

    if (fullSizeUrl == `images/me.jpg`) continue;

    const existing = existingPhotos.find((p) => p.fullSizeUrl === fullSizeUrl);
    if (existing) continue;

    let location = await userInput(`Enter location for ${file}: `);
    let caption = "";
    let highlight = await userInput(`Highlight ${file}? (y/n): `);

    const newPhoto = {
      id: nextId++,
      fullSizeUrl,
      thumbnailUrl: `/images/thumbnails/${file}`,
      location: location,
      date: formattedDate,
      caption: caption,
      camera: metadata.Model || "",
      lens: metadata.Lens || metadata.LensModel || "",
      fstop: metadata.FNumber ? `ƒ/${metadata.FNumber}` : "",
      shutter: metadata.ShutterSpeed || metadata.ExposureTime || "",
      iso: metadata.ISO || "",
      flash: (metadata.Flash?.includes("Fired") ? "On" : "Off") || "",
      width,
      height,
      orientation,
      highlight: highlight
    };

    photoData.push(newPhoto);
  }

  await writeJson(outputFile, photoData, { spaces: 2 });
  await exiftool.end();
  rl.close();
  console.log("EXIF data updated");
})();
