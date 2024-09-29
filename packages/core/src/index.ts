import type { Postprocessor, PresetFactory } from '@unocss/core'
import type { UsefulOptions, UsefulTheme } from './types'
import { definePreset } from '@unocss/core'
import { autocomplete, extractors, preflights, rules, shortcuts, variants } from './core'
import { importantProcess, postprocessWithUnColor } from './core/postprocess'
import { PRESET_NAME } from './meta'
import { resolveOptions } from './resolve'

export * from './utils'

export type { UsefulOptions, UsefulTheme }

export const presetUseful = definePreset((options: UsefulOptions = {}) => {
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
    transformers: meta.transformers,
    autocomplete,
    preflights: preflights(resolvedOptions),
    options: resolvedOptions,
  }
}) as PresetFactory<UsefulTheme, UsefulOptions>

export default presetUseful
