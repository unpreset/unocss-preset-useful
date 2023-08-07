import { definePreset } from 'unocss'
import type { Postprocessor, Preset } from 'unocss'
import { rules } from './rules'
import { shortcuts } from './shortcuts'
import { PRESET_NAME } from './constants'
import { extractors } from './extractors'
import { postprocessWithUnColor } from './postprocess'
import { nomarlizeTheme } from './theme'

export interface UsefulOptions {
  /**
   * Extract rgba color in css variable
   *
   * @default false
   */
  unColor?: boolean | string

  /**
   * Expand theme animation name usage
   *
   * [ name, duration, timing-function, iteration-count ]
   *
   * @example
   * ```ts
    themeAnimate: ['spin 1s linear infinite'],
   * ```
   */
  themeAnimate?: string[]
}

export function presetUseful(options: UsefulOptions = {}): Preset {
  let { unColor, themeAnimate } = options
  unColor = typeof unColor === 'string'
    ? unColor
    : unColor ? '--un-color' : false

  return definePreset({
    name: `unocss-preset-${PRESET_NAME}`,
    layers: {
      [PRESET_NAME]: 2,
    },
    rules,
    theme: {
      animation: nomarlizeTheme(themeAnimate),
    },
    shortcuts,
    extractors,
    postprocess: [
      unColor ? postprocessWithUnColor(unColor as string) : undefined,
    ].filter(Boolean) as Postprocessor[],
  })
}

export default presetUseful
