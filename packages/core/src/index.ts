import type { Postprocessor, PresetFactory } from 'unocss'
import { definePreset } from 'unocss'
import { PRESET_NAME } from './meta'
import { autocomplete, extractors, preflights, rules, shortcuts, variants } from './core'
import { importantProcess, postprocessWithUnColor } from './core/postprocess'
import type { UsefulOptions, UsefulTheme } from './types'
import { resolveOptions } from './resolve'

export * from './utils'

export type { UsefulOptions, UsefulTheme }

export const presetUseful = definePreset(async (options: UsefulOptions = {}) => {
  const resolvedOptions = resolveOptions(options)
  const { enableDefaultShortcuts, unColor, theme, meta, important } = resolvedOptions

  return {
    name: `unocss-preset-${PRESET_NAME}`,
    layers: {
      [PRESET_NAME]: 2,
    },
    rules,
    theme,
    variants: variants(resolvedOptions),
    shortcuts: [...enableDefaultShortcuts ? shortcuts : [], ...meta.shortcuts],
    extractors,
    postprocess: [
      unColor ? postprocessWithUnColor(unColor as string) : undefined,
      important ? importantProcess() : undefined,
    ].filter(Boolean) as Postprocessor[],
    presets: meta.presets,
    autocomplete,
    preflights: preflights(resolvedOptions),
  }
}) as PresetFactory<UsefulTheme, UsefulOptions>

export default presetUseful
