import { definePreset } from 'unocss'
import type { Postprocessor, Preset } from 'unocss'
import { PRESET_NAME } from './meta'
import { extractors, nomarlizeTheme, postprocessWithUnColor, rules, shortcuts } from './core'
import type { ResolvedOptions, UsefulOptions } from './type'

export * from './type'

export function presetUseful(options: UsefulOptions = {}): Preset {
  const { unColor, themeAnimate } = resolveOptions(options)

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

function resolveOptions(options: UsefulOptions): ResolvedOptions {
  let { unColor, themeAnimate } = options
  unColor = typeof unColor === 'string'
    ? unColor
    : unColor ? '--un-color' : false

  return {
    unColor,
    themeAnimate: themeAnimate ?? [],
  }
}
