import { defineConfig } from 'unocss'
import { presetUseful } from 'unocss-preset-useful'

export default defineConfig({
  presets: [
    presetUseful({
      typography: true,
      enableMagicAnimations: true,
      webFonts: {
        fonts: {
          dm: 'DM Sans',
          mono: 'Fira Code',
          roboto: 'Roboto Condensed',
        },
      },
    }),
  ],
})
