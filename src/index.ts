import { definePreset } from 'unocss'
import { normalizeRuleMeta, rules } from './rules'
import { normalizeShortcutMeta, shortcuts } from './shortcuts'
import { layerMeta } from './meta'
import { PRESET_NAME } from './constants'
import { extractors } from './extractors'

normalizeRuleMeta(layerMeta)
normalizeShortcutMeta(layerMeta)

export function presetUseful() {
  return definePreset({
    name: `unocss-preset-${PRESET_NAME}`,
    layers: {
      [PRESET_NAME]: 2,
    },
    rules,
    shortcuts,
    extractors,
  })
}

export default presetUseful
