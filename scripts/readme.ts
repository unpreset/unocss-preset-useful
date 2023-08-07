import path from 'node:path'
import fs from 'node:fs/promises'

const IN_README_START = 'IN-README-START'
const IN_README_END = 'IN-README-END'
const README_RE = new RegExp(`(?:\/\/\\s*?${IN_README_START}\\s*?|\\/\\*\\s*?${IN_README_START}\\s*?\\*\\/|<!--\\s*?${IN_README_START}\\s*?-->)([\\s\\S]*?)(?:\/\/\\s*?${IN_README_END}\\s*?|\\/\\*\\s*?${IN_README_END}\\s*?\\*\\/|<!--\\s*?${IN_README_END}\\s*?-->)`, 'g')
const __dirname = path.dirname(new URL(import.meta.url).pathname)
const workspace = path.resolve(__dirname, '../src/core')

run()

async function generateContent() {
  let template = ''

  // 循环 workspace 下的所有文件
  for (const file of await fs.readdir(workspace)) {
    const filePath = path.resolve(workspace, file)
    const fileInfo = path.parse(filePath)
    const content = await fs.readFile(filePath, 'utf-8')
    for (const item of Array.from(content.matchAll(README_RE))) {
      if (item != null) {
        template += `
## ${fileInfo.name}
  
\`\`\`ts
${item[1].trim()}
\`\`\`
`
      }
    }
  }

  return template
}

async function generateReadme(content: string) {
  const readmeTemplate = await fs.readFile(path.resolve(__dirname, '../READMETEMPLATE.md'), 'utf-8')
  const readme = readmeTemplate.replace('<slot/>', content)

  await fs.writeFile(path.resolve(__dirname, '../README.md'), readme)
}

async function run() {
  await generateReadme(await generateContent())
}
