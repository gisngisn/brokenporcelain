const fs = require("fs");
const path = require("path");

const galleryDir = path.join(
  process.cwd(),
  "public",
  "gallery"
);

const outputFile = path.join(
  process.cwd(),
  "public",
  "gallery.json"
);

const supportedExtensions = [
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
];

function formatTitle(filename) {
  return filename
    .replace(/\.[^/.]+$/, "")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) =>
      char.toUpperCase()
    );
}

function generateGallery() {
  if (!fs.existsSync(galleryDir)) {
    console.error(
      "Gallery folder not found:",
      galleryDir
    );

    process.exit(1);
  }

  const files = fs
    .readdirSync(galleryDir)
    .filter((file) =>
      supportedExtensions.includes(
        path.extname(file).toLowerCase()
      )
    )
    .sort();

  const gallery = files.map(
    (file, index) => ({
      id: index + 1,

      image: `/gallery/${file}`,

      title: formatTitle(file),

      description:
        "A fragile porcelain memory preserved in silence.",

      year: "2026",

      series:
        "Broken Porcelain Collection",

      medium:
        "Digital Porcelain Artwork",
    })
  );

  fs.writeFileSync(
    outputFile,
    JSON.stringify(
      gallery,
      null,
      2
    ),
    "utf-8"
  );

  console.log(
    `Gallery generated: ${gallery.length} artworks`
  );
}

generateGallery();