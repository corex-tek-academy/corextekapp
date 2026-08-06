/**
 * Image optimization script for Corex Tek-Academy
 * 
 * Compresses PNG/JPG originals and generates WebP + AVIF versions
 * 
 * Usage: node scripts/optimize-images.mjs
 */

import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const IMAGE_DIR = path.resolve(__dirname, '../src/assets/image')
const QUALITY_PNG = 80   // PNG compression quality
const QUALITY_WEBP = 80  // WebP quality (0-100)
const QUALITY_AVIF = 65  // AVIF quality (good compromise for size)
const PARALLEL_LIMIT = 4 // Process this many images at once

const SUPPORTED = ['.png', '.jpg', '.jpeg']

async function main() {
  const files = fs.readdirSync(IMAGE_DIR).filter(f => {
    const ext = path.extname(f).toLowerCase()
    return SUPPORTED.includes(ext)
  })

  console.log(`Found ${files.length} images to optimize in ${IMAGE_DIR}\n`)

  const results = { compressed: [], webp: [], avif: [], errors: [], skipped: [] }

  // Process in batches to avoid overwhelming memory
  for (let i = 0; i < files.length; i += PARALLEL_LIMIT) {
    const batch = files.slice(i, i + PARALLEL_LIMIT)
    await Promise.all(batch.map(f => processImage(f, results)))
  }

  // Summary
  console.log('\n═══════════════════════════════════════')
  console.log('          OPTIMIZATION SUMMARY          ')
  console.log('═══════════════════════════════════════')
  console.log(`  Original files:     ${files.length}`)
  console.log(`  Compressed PNG/JPG: ${results.compressed.length}`)
  console.log(`  WebP generated:     ${results.webp.length}`)
  console.log(`  AVIF generated:     ${results.avif.length}`)
  console.log(`  Errors:             ${results.errors.length}`)
  console.log(`  Skipped (small):    ${results.skipped.length}`)
  
  if (results.errors.length > 0) {
    console.log('\n  Errors:')
    results.errors.forEach(e => console.log(`    - ${e}`))
  }
  console.log('═══════════════════════════════════════\n')

  // Calculate total savings
  let totalOriginal = 0
  let totalWebp = 0
  let totalAvif = 0
  
  files.forEach(f => {
    const original = path.join(IMAGE_DIR, f)
    const webp = path.join(IMAGE_DIR, path.basename(f, path.extname(f)) + '.webp')
    const avif = path.join(IMAGE_DIR, path.basename(f, path.extname(f)) + '.avif')
    
    if (fs.existsSync(original)) totalOriginal += fs.statSync(original).size
    if (fs.existsSync(webp)) totalWebp += fs.statSync(webp).size
    if (fs.existsSync(avif)) totalAvif += fs.statSync(avif).size
  })

  console.log(`Total original size:  ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`)
  console.log(`Total WebP size:      ${(totalWebp / 1024 / 1024).toFixed(2)} MB`)
  console.log(`WebP savings:         ${((1 - totalWebp / totalOriginal) * 100).toFixed(1)}%`)
  if (totalAvif > 0) {
    console.log(`Total AVIF size:      ${(totalAvif / 1024 / 1024).toFixed(2)} MB`)
    console.log(`AVIF savings:         ${((1 - totalAvif / totalOriginal) * 100).toFixed(1)}%`)
  }
}

async function processImage(filename, results) {
  const inputPath = path.join(IMAGE_DIR, filename)
  const ext = path.extname(filename).toLowerCase()
  const basename = path.basename(filename, ext)
  const stats = fs.statSync(inputPath)
  const originalSizeKB = stats.size / 1024

  // Skip small files (under 20KB) — not worth converting
  if (stats.size < 20 * 1024) {
    results.skipped.push(filename)
    return
  }

  try {
    // 1. Compress original PNG/JPG in-place if it's over 100KB
    //    (re-compressing already small files isn't worth it)
    if (stats.size > 100 * 1024) {
      const tempPath = inputPath + '.tmp'
      let pipeline = sharp(inputPath)

      if (ext === '.png') {
        // PNG compression (lossy pngquant-style via sharp's png options)
        pipeline = pipeline.png({ 
          compressionLevel: 9,      // Max compression
          palette: true,            // Reduce colors when possible
          quality: QUALITY_PNG
        })
      } else if (ext === '.jpg' || ext === '.jpeg') {
        pipeline = pipeline.jpeg({ quality: QUALITY_WEBP, mozjpeg: true })
      }

      await pipeline.toFile(tempPath)
      const newSize = fs.statSync(tempPath).size

      // Only replace if actually smaller (with a 5% threshold to avoid churn)
      if (newSize < stats.size * 0.95) {
        fs.copyFileSync(tempPath, inputPath)
        const savedKB = (stats.size - newSize) / 1024
        results.compressed.push(`${filename} (${(originalSizeKB).toFixed(0)}K → ${(newSize / 1024).toFixed(0)}K, saved ${savedKB.toFixed(0)}K)`)
        console.log(`  ✓ Compressed: ${filename}`)
      } else {
        console.log(`  — Skipped (no gain): ${filename}`)
      }
      fs.unlinkSync(tempPath)
    }

    // 2. Generate WebP version
    const webpPath = path.join(IMAGE_DIR, basename + '.webp')
    if (!fs.existsSync(webpPath) || fs.statSync(webpPath).size > stats.size * 0.8) {
      await sharp(inputPath)
        .webp({ quality: QUALITY_WEBP, effort: 6 })
        .toFile(webpPath)
      
      const webpSize = fs.statSync(webpPath).size
      results.webp.push(`${basename}.webp (${(webpSize / 1024).toFixed(0)}K)`)

      const pct = ((1 - webpSize / stats.size) * 100).toFixed(0)
      console.log(`  ✓ WebP: ${basename}.webp (${pct}% smaller)`)
    } else {
      console.log(`  — WebP exists: ${basename}.webp`)
    }

    // 3. Generate AVIF version (for modern browsers that support it)
    const avifPath = path.join(IMAGE_DIR, basename + '.avif')
    if (!fs.existsSync(avifPath) || fs.statSync(avifPath).size > stats.size * 0.7) {
      await sharp(inputPath)
        .avif({ quality: QUALITY_AVIF, effort: 4 })
        .toFile(avifPath)
      
      const avifSize = fs.statSync(avifPath).size
      results.avif.push(`${basename}.avif (${(avifSize / 1024).toFixed(0)}K)`)

      const pct = ((1 - avifSize / stats.size) * 100).toFixed(0)
      console.log(`  ✓ AVIF: ${basename}.avif (${pct}% smaller)`)
    } else {
      console.log(`  — AVIF exists: ${basename}.avif`)
    }
  } catch (err) {
    console.error(`  ✗ Error processing ${filename}:`, err.message)
    results.errors.push(`${filename}: ${err.message}`)
  }
}

main().catch(err => {
  console.error('Fatal error:', err)
  process.exit(1)
})
