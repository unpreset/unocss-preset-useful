import { defineConfig } from 'unocss'
import { presetUseful } from './src'

// Just for Vscode Extension

export default defineConfig({
  presets: [
    presetUseful(),
  ],
})
