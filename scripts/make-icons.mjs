import sharp from "sharp";
for (const size of [192, 512]) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 100 100"><rect width="100" height="100" fill="#0b3d2e"/><text x="50" y="68" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="60" text-anchor="middle" fill="#ffc20e">S</text></svg>`;
  await sharp(Buffer.from(svg)).png().toFile(`public/icon-${size}.png`);
}
console.log("icons written");
