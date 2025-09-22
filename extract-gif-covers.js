import fs from "fs";
import path from "path";
import gifFrames from "gif-frames";

const PROJECTS_DIR = path.join(process.cwd(), "src/assets/projects");

// make sure output dir exists
if (!fs.existsSync(PROJECTS_DIR)) {
  console.error("❌ Directory not found:", PROJECTS_DIR);
  process.exit(1);
}

async function extractCover(gifPath, pngPath) {
  try {
    const frames = await gifFrames({
      url: gifPath,
      frames: 0,
      outputType: "png",
    });
    await new Promise((resolve, reject) => {
      const writeStream = fs.createWriteStream(pngPath);
      frames[0].getImage().pipe(writeStream);
      writeStream.on("finish", resolve);
      writeStream.on("error", reject);
    });
    console.log("✅ Cover generated:", pngPath);
  } catch (err) {
    console.error("❌ Failed to process", gifPath, err.message);
  }
}

async function run() {
  const files = fs.readdirSync(PROJECTS_DIR).filter(f => f.endsWith(".gif"));

  if (files.length === 0) {
    console.log("No GIFs found in", PROJECTS_DIR);
    return;
  }

  for (const file of files) {
    const gifPath = path.join(PROJECTS_DIR, file);
    const pngPath = path.join(PROJECTS_DIR, file.replace(/\.gif$/, ".png"));

    // skip if already exists
    if (fs.existsSync(pngPath)) {
      console.log("⏭️ Skipping (already exists):", pngPath);
      continue;
    }

    await extractCover(gifPath, pngPath);
  }

  console.log("🎉 All done!");
}

run();
