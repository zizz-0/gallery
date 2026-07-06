const { readJson, writeJson } = require("fs-extra");
const path = require("path");

const photosFile = path.join(__dirname, "data", "photos.json");

function parseDate(value) {
  if (typeof value !== "string" || !value.trim()) return null;

  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed.getTime();
}

async function main() {
  const photos = await readJson(photosFile);

  const sortedPhotos = [...photos].sort((a, b) => {
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

  await writeJson(photosFile, renumberedPhotos, { spaces: 2 });
  console.log(`Sorted ${renumberedPhotos.length} photos by date (oldest first) and renumbered their IDs.`);
}

main().catch((error) => {
  console.error("Failed to reorder photos.json", error);
  process.exit(1);
});
