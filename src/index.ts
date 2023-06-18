import { definePreset } from 'unocss'
import { rules } from './rules'
import { shortcuts } from './shortcuts'
import { PRESET_NAME } from './constants'
import { extractors } from './extractors'

export function presetUseful(): ReturnType<typeof definePreset> {
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
