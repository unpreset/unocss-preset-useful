import { generateRule } from './rules'
import { generateShortcuts } from './shortcuts'
import { ruleMeta } from './meta'
import type { Preset } from 'unocss'

export function presetUseful(): Preset {
  return {
    name: 'unocss-preset-useful',
    enforce: 'post',
    layers: {
      useful: 2,
    },
    rules: generateRule(ruleMeta),
    shortcuts: generateShortcuts(ruleMeta),
  }
}

export default presetUseful
