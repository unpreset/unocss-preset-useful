import { generateRule } from './rules'
import { generateShortcuts } from './shortcuts'
import { ruleMeta } from './meta'
import { PRESET_NAME } from './constants'
import type { Preset } from 'unocss'

export function presetUseful(): Preset {
  return {
    name: `unocss-preset-${PRESET_NAME}`,
    enforce: 'post',
    layers: {
      [PRESET_NAME]: 2,
    },
    rules: generateRule(ruleMeta),
    shortcuts: generateShortcuts(ruleMeta),
    theme: {
      colors: {
        bg: {
          default: '#fefefe',
          dark: '#1c1f24',
        },
        text: {
          default: '#3D4248',
          dark: '#C8CCD0',
        },
        primary: '#00bcd4',
      },
    },
  }
}

export default presetUseful
