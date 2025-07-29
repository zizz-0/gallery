const { ExifTool } = require("exiftool-vendored");
const { readdir, readJson, writeJson, pathExists } = require("fs-extra");
const path = require("path");

const exiftool = new ExifTool();

const imagesDir = path.join(__dirname, "..", "public", "images");
const outputFile = path.join(__dirname, "data", "photos.json");

function formatExifDate(dateStr) {
  if (!dateStr || typeof dateStr !== "string") return "";

  const dateParts = dateStr.split(" ")[0].split(":");
  if (dateParts.length !== 3) return "";

  const year = parseInt(dateParts[0], 10);
  const month = parseInt(dateParts[1], 10);
  const day = parseInt(dateParts[2], 10);

  if (!year || !month || !day) return "";

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
                      "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const monthName = monthNames[month - 1];
  return `${monthName} ${day}, ${year}`;
}


(async () => {
  const files = await readdir(imagesDir);
  const photoData = [];

  let existingPhotos = [];
  try {
    existingPhotos = await readJson(outputFile);
  } catch (err) {
    console.log("No existing photos.json found. Creating a new one.");
  }

  let nextId = existingPhotos.length > 0
    ? Math.max(...existingPhotos.map((p) => p.id)) + 1
    : 1;

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (![".jpg", ".jpeg", ".png"].includes(ext)) continue;

    const filePath = path.join(imagesDir, file);
    const metadata = await exiftool.read(filePath);

    const width = metadata.ImageWidth || metadata.ExifImageWidth;
    const height = metadata.ImageHeight || metadata.ExifImageHeight;
    const orientation = width > height ? "landscape" : "portrait";

    const existing = existingPhotos.find(
      (p) => p.fullSizeUrl === `/images/${file}`
    );

    const updated = {
      id: existing?.id || nextId++,
      fullSizeUrl: `/images/${file}`,
      thumbnailUrl: `/images/thumbnails/${file}`,
      location: existing?.location || (metadata.GPSLatitude && metadata.GPSLongitude
        ? `${metadata.GPSLatitude}, ${metadata.GPSLongitude}`
        : ""),
      date: existing?.date || formatExifDate(metadata.CreateDate || metadata.DateTimeOriginal),
      camera: existing?.camera || metadata.Model || "",
      lens: existing?.lens || metadata.Lens || metadata.LensModel || "",
      fstop: existing?.fstop || (metadata.FNumber ? `ƒ/${metadata.FNumber}` : ""),
      shutter: existing?.shutter || metadata.ShutterSpeed || metadata.ExposureTime || "",
      iso: existing?.iso || metadata.ISO || "",
      flash: existing?.flash || (metadata.Flash?.includes("Fired") ? "On" : "Off") || "",
      width,
      height,
      orientation
    };
    photoData.push(updated);
  }

  await writeJson(outputFile, photoData, { spaces: 2 });
  await exiftool.end();
  console.log("EXIF data updated");
})();