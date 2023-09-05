import { defineConfig } from 'unocss'
import { presetUseful } from './dist'

// Just for Vscode Extension

export default defineConfig({
  presets: [
    presetUseful(),
  ],
})
