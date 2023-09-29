import type { Postprocessor } from 'unocss'
import { definePreset } from '@unocss/core'
import { PRESET_NAME } from './meta'
import { extractors, postprocessWithUnColor, rules, shortcuts, variants } from './core'
import type { UsefulOptions } from './types'
import { resolveOptions } from './resolve'

export * from './utils'

export type { UsefulOptions }

export const presetUseful = definePreset((options: UsefulOptions = {}) => {
  const { unColor, theme, presets } = resolveOptions(options)

  return {
    name: `unocss-preset-${PRESET_NAME}`,
    layers: {
      [PRESET_NAME]: 2,
    },
    rules,
    theme,
    variants: variants(options),
    shortcuts,
    extractors,
    postprocess: [
      unColor ? postprocessWithUnColor(unColor as string) : undefined,
    ].filter(Boolean) as Postprocessor[],
    presets,
  }
})

export default presetUseful
