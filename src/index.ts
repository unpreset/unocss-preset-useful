import type { Preset } from 'unocss'
import { normalizeRuleMeta, rules } from './rules'
import { normalizeShortcutMeta, shortcuts } from './shortcuts'
import { layerMeta } from './meta'
import { PRESET_NAME } from './constants'

normalizeRuleMeta(layerMeta)
normalizeShortcutMeta(layerMeta)

export function presetUseful(): Preset {
  return {
    name: `unocss-preset-${PRESET_NAME}`,
    layers: {
      [PRESET_NAME]: 2,
    },
    rules,
    shortcuts,
  }
}
