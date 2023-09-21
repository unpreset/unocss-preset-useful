import { defineConfig } from 'unocss'
import { presetUseful } from 'unocss-preset-useful'

// Just for Vscode Extension

export default defineConfig({
  presets: [
    presetUseful({
      typography: true,
    }),
  ],
})
