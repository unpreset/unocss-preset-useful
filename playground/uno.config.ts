import { defineUsefulConfig } from 'unocss-preset-useful'

export default defineUsefulConfig({
  typography: true,
  enableMagicAnimations: true,
  webFonts: {
    fonts: {
      dm: 'DM Sans',
      mono: 'Fira Code',
      roboto: 'Roboto Condensed',
    },
  },
})
