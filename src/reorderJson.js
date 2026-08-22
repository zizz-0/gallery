const fs = require("fs-extra");
const path = require("path");

const photosFile = path.join(__dirname, "data", "photos.json");
const publicImagesDir = path.join(__dirname, "..", "public", "images");

function parseDate(value) {
  if (typeof value !== "string" || !value.trim()) return null;

  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed.getTime();
}

function photoExists(photo) {
  const relativePath = photo.fullSizeUrl || photo.fullSizedUrl;

  if (typeof relativePath !== "string" || !relativePath.trim()) {
    return false;
  }

  const normalizedPath = relativePath.replace(/^\/+/, "");
  const fullPath = path.join(publicImagesDir, path.basename(normalizedPath));

  return fs.existsSync(fullPath);
}

async function main() {
  const photos = await fs.readJson(photosFile);
  const validPhotos = photos.filter((photo) => photoExists(photo));
  const removedCount = photos.length - validPhotos.length;

  const sortedPhotos = [...validPhotos].sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);

    if (dateA === null && dateB === null) return 0;
    if (dateA === null) return 1;
    if (dateB === null) return -1;

    return dateA - dateB;
  });

  const renumberedPhotos = sortedPhotos.map((photo, index) => ({
    ...photo,
    id: index + 1,
  }));

  await fs.writeJson(photosFile, renumberedPhotos, { spaces: 2 });
  console.log(`Removed ${removedCount} stale photo entries, sorted ${renumberedPhotos.length} photos by date (oldest first), and renumbered their IDs.`);
}

main().catch((error) => {
  console.error("Failed to reorder photos.json", error);
  process.exit(1);
});
