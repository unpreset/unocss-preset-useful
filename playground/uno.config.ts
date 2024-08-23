import { defineConfig } from 'unocss'
import { presetUseful } from 'unocss-preset-useful'

export default defineConfig({
  presets: [
    presetUseful({
      typography: true,
      enableMagicAnimations: true,
    }),
  ],
})
