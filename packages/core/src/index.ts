import type { Postprocessor, PresetFactory } from 'unocss'
import { definePreset } from '@unocss/core'
import { PRESET_NAME } from './meta'
import { autocomplete, extractors, rules, shortcuts, variants } from './core'
import { importantProcess, postprocessWithUnColor } from './core/postprocess'
import type { UsefulOptions, UsefulTheme } from './types'
import { resolveOptions } from './resolve'

export * from './utils'

export type { UsefulOptions, UsefulTheme }

export const presetUseful = definePreset((options: UsefulOptions = {}) => {
  const { enableDefaultShortcuts, unColor, theme, meta, important } = resolveOptions(options)

  return {
    name: `unocss-preset-${PRESET_NAME}`,
    layers: {
      [PRESET_NAME]: 2,
    },
    rules,
    theme,
    variants: variants(options),
    shortcuts: [...enableDefaultShortcuts ? shortcuts : [], ...meta.shortcuts],
    extractors,
    postprocess: [
      unColor ? postprocessWithUnColor(unColor as string) : undefined,
      important ? importantProcess() : undefined,
    ].filter(Boolean) as Postprocessor[],
    presets: meta.presets,
    autocomplete,
  }
}) as PresetFactory<UsefulTheme, UsefulOptions>

export default presetUseful
