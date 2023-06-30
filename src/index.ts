import { definePreset } from 'unocss'
import type { Postprocessor, Preset } from 'unocss'
import { rules } from './rules'
import { shortcuts } from './shortcuts'
import { PRESET_NAME } from './constants'
import { extractors } from './extractors'
import { postprocessWithUnColor } from './postprocess'

export interface UsefulOptions {
  /**
   * Extract rgba color in css variable
   *
   * @default false
   */
  unColor?: boolean | string
}

export function presetUseful(options: UsefulOptions = {}): Preset {
  options.unColor = typeof options.unColor === 'string'
    ? options.unColor
    : options.unColor ? '--un-color' : false

  return definePreset({
    name: `unocss-preset-${PRESET_NAME}`,
    layers: {
      [PRESET_NAME]: 2,
    },
    rules,
    shortcuts,
    extractors,
    postprocess: [
      options.unColor ? postprocessWithUnColor(options.unColor as string) : undefined,
    ].filter(Boolean) as Postprocessor[],
  })
}

export default presetUseful
