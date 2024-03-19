import path from 'node:path'
import { fileURLToPath } from 'node:url'
import fs from 'fs-extra'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const input = path.resolve(__dirname, '../node_modules/magic.css/dist/magic.min.css')
const output = path.resolve(__dirname, '../data/magicCSS.ts')

async function run() {
  const css = await fs.readFile(input, 'utf-8')
  const dirPath = path.dirname(output)
  if (!await fs.exists(dirPath))
    await fs.mkdir(dirPath, { recursive: true })

  await fs.writeFile(output, `export default \`${css}\``, { encoding: 'utf-8' })
}

run()
