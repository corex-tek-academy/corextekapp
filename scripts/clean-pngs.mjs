/**
 * Post-build script to remove PNG files when WebP/AVIF versions exist
 * This reduces build size by serving only modern image formats
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DIST_DIR = path.resolve(__dirname, '../dist')
const ASSETS_DIR = path.join(DIST_DIR, 'assets')

function cleanPngFiles() {
  let removedCount = 0
  let totalSizeSaved = 0

  const pngDir = path.join(ASSETS_DIR, 'png')
  const webpDir = path.join(ASSETS_DIR, 'webp')
  const avifDir = path.join(ASSETS_DIR, 'avif')

  if (!fs.existsSync(pngDir)) {
    console.log('No PNG directory found, skipping cleanup.')
    return
  }

  const pngFiles = fs.readdirSync(pngDir).filter(f => f.endsWith('.png'))

  pngFiles.forEach(pngFile => {
    // Extract image name by removing extension and hash pattern
    // Examples: img1-D9-4A2E-.png -> img1, logo-DXVtbltI.png -> logo
    const baseName = pngFile.replace(/-[a-zA-Z0-9_-]+\.png$/, '')
    
    // Check if WebP or AVIF version exists (matching pattern)
    const webpFiles = fs.existsSync(webpDir) ? fs.readdirSync(webpDir) : []
    const avifFiles = fs.existsSync(avifDir) ? fs.readdirSync(avifDir) : []
    
    const webpExists = webpFiles.some(f => f.startsWith(baseName) && f.endsWith('.webp'))
    const avifExists = avifFiles.some(f => f.startsWith(baseName) && f.endsWith('.avif'))

    if (webpExists || avifExists) {
      const pngPath = path.join(pngDir, pngFile)
      const pngSize = fs.statSync(pngPath).size
      
      fs.unlinkSync(pngPath)
      removedCount++
      totalSizeSaved += pngSize
      
      console.log(`🗑️  Removed: ${pngFile} (${(pngSize / 1024).toFixed(1)} KB)`)
    }
  })

  if (removedCount > 0) {
    console.log(`\n✅ Cleanup complete: Removed ${removedCount} PNG files`)
    console.log(`💾 Size saved: ${(totalSizeSaved / 1024 / 1024).toFixed(2)} MB`)
    
    // Remove empty png directory
    if (fs.readdirSync(pngDir).length === 0) {
      fs.rmdirSync(pngDir)
      console.log(`📁 Removed empty PNG directory`)
    }
  } else {
    console.log('No PNG files to remove (all needed as fallbacks)')
  }
}

cleanPngFiles()