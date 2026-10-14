import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const bannerPath = path.join(
  __dirname,
  "../public/images/banner/Kaveri Palace Wedding Venue Banner.png",
);

const { width, height } = await sharp(bannerPath).metadata();
if (!width || !height) throw new Error("Could not read banner dimensions");

// Bottom-right: old wall/gate below logo — extend cream logo background downward
const patchLeft = Math.round(width * 0.52);
const patchTop = Math.round(height * 0.58);
const patchWidth = width - patchLeft;
const patchHeight = height - patchTop;

// Sample cream/pattern strip from logo background (just above the wall)
const sampleTop = Math.round(height * 0.42);
const sampleHeight = Math.round(height * 0.12);
const sampleLeft = Math.round(width * 0.58);
const sampleWidth = Math.round(width * 0.38);

const sample = await sharp(bannerPath)
  .extract({
    left: sampleLeft,
    top: sampleTop,
    width: sampleWidth,
    height: sampleHeight,
  })
  .resize(patchWidth, patchHeight, { fit: "fill" })
  .blur(0.6)
  .toBuffer();

const patched = await sharp(bannerPath)
  .composite([{ input: sample, left: patchLeft, top: patchTop }])
  .png()
  .toBuffer();

await sharp(patched).toFile(bannerPath);
console.log(`Patched ${patchWidth}x${patchHeight} at (${patchLeft}, ${patchTop})`);
