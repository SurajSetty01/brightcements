import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "public", "assets");

const assets = [
  "logo-CxaRFLIf.png",
  "logoFooter-BKWoAfao.png",
  "homeImage1-DHqonrdY.png",
  "image1Phone-B4Ohl1I0.webp",
  "homePageImage2-CzRizqFY.webp",
  "homePageImage3-pYEn_p1B.webp",
  "Artboard-C0nmiT73.png",
  "phone-D6L41qIX.webp",
  "globe-CPCcBVS6.svg",
  "aboutUsImage-DLUnp59u.jpg",
  "founder-CrkyJ8cg.webp",
  "BG-D0zZy7Li.png",
];

const baseUrl = "https://www.brightcements.com/assets/";

await mkdir(outDir, { recursive: true });

for (const file of assets) {
  const url = `${baseUrl}${file}`;
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`Failed to download ${file}: ${res.status} ${res.statusText}`);
    process.exitCode = 1;
    continue;
  }
  const buffer = Buffer.from(await res.arrayBuffer());
  await writeFile(join(outDir, file), buffer);
  console.log(`Downloaded ${file}`);
}

// favicon at site root
const faviconRes = await fetch("https://www.brightcements.com/favicon.ico");
if (faviconRes.ok) {
  await writeFile(
    join(__dirname, "..", "public", "favicon.ico"),
    Buffer.from(await faviconRes.arrayBuffer())
  );
  console.log("Downloaded favicon.ico");
} else {
  console.warn("favicon.ico not found, using logo as fallback");
}
