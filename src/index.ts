import { type Preset, definePreset } from 'unocss'
import { rules } from './rules'
import { shortcuts } from './shortcuts'
import { PRESET_NAME } from './constants'
import { extractors } from './extractors'

export function presetUseful(): Preset {
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
