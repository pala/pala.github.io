import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const TARGET_WIDTH = 2500; // Professional high-res web standard
const QUALITY = 90;

async function optimize() {
  // Find all JPEG/JPG/PNG files in public/assets
  const files = await glob('public/assets/**/*.{jpg,jpeg,png,JPG,JPEG,PNG}');
  
  if (files.length === 0) {
    console.log('No new images to optimize.');
    return;
  }

  console.log(`🚀 Found ${files.length} images. Starting optimization...`);

  for (const file of files) {
    const ext = path.extname(file);
    const outputPath = file.replace(ext, '.webp');

    try {
      await sharp(file)
        .resize({
          width: TARGET_WIDTH,
          withoutEnlargement: true, // Don't upscale small images
          fit: 'inside'
        })
        .webp({ quality: QUALITY })
        .toFile(outputPath);

      fs.unlinkSync(file); // Delete the bulky original
      console.log(`✅ Optimized: ${path.basename(file)} -> .webp`);
    } catch (err) {
      console.error(`❌ Error processing ${file}:`, err);
    }
  }

  console.log('\n✨ All images optimized and converted to WebP.');
}

optimize();
