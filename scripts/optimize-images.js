// Convertit les captures de assets-sources/ en WebP pour public/images/projects/.
// Usage : npm run images

import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const SOURCE_DIR = 'assets-sources'
const OUTPUT_DIR = 'public/images/projects'
const WIDTHS = [800, 1600]
const QUALITY = 80

// Fichier source → nom de sortie. Ajouter une ligne par nouvelle capture.
const IMAGES = [
  { source: 'carte iita.png', name: 'iita' },
  { source: 'carte saccorder.png', name: 'saccorder' },
  { source: 'carte n360.png', name: 'n360' },
  { source: 'carte unisante.png', name: 'unisante' },
]

await mkdir(OUTPUT_DIR, { recursive: true })

for (const image of IMAGES) {
  const input = path.join(SOURCE_DIR, image.source)

  for (const width of WIDTHS) {
    const output = path.join(OUTPUT_DIR, `${image.name}-${width}.webp`)
    const info = await sharp(input)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(output)

    const sizeKb = Math.round(info.size / 1024)
    console.log(`${output}  ${info.width} × ${info.height}  ${sizeKb} Ko`)
  }
}
