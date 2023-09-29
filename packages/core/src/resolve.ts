import { presetAttributify } from '@unocss/preset-attributify'
import { presetIcons } from '@unocss/preset-icons'
import { presetUno } from '@unocss/preset-uno'
import presetTagify from '@unocss/preset-tagify'
import { presetTypography } from '@unocss/preset-typography'
import presetWebFonts from '@unocss/preset-web-fonts'
import remToPxPreset from '@unocss/preset-rem-to-px'
import { presetScrollbar } from 'unocss-preset-scrollbar'
import { nomarlizeTheme } from './core'
import type { ResolvedOptions, UsefulOptions, UsefulTheme } from './types'
import { deepMerge } from './utils'

export function resolveOptions(options: UsefulOptions) {
  const defaultOptions: UsefulOptions = {
    uno: true,
    attributify: true,
    icons: true,
    webFonts: false,
    typography: false,
    tagify: false,
    remToPx: false,
    scrollbar: false,
    theme: {},
  }
  const optionsWithDefault = Object.assign({}, defaultOptions, options)
  optionsWithDefault.unColor = typeof optionsWithDefault.unColor === 'string'
    ? optionsWithDefault.unColor
    : optionsWithDefault.unColor ? '--un-color' : false

  const presets = []
  const presetMap = {
    uno: presetUno,
    attributify: presetAttributify,
    icons: presetIcons,
    webFonts: presetWebFonts,
    typography: presetTypography,
    tagify: presetTagify,
    remToPx: remToPxPreset,
    scrollbar: presetScrollbar,
  }
  for (const [key, preset] of Object.entries(presetMap)) {
    const option = optionsWithDefault[key as keyof typeof presetMap]
    if (option)
      presets.push(preset(typeof option === 'boolean' ? {} as any : option))
  }

  return {
    ...optionsWithDefault,
    theme: nomarlizeTheme(optionsWithDefault.theme!),
    presets,
  } as ResolvedOptions
}

export function resolveTheme(theme: UsefulTheme) {
  const t_extends = theme.extend ?? {}
  const resolveTheme = deepMerge(theme, t_extends)



  return resolveTheme
  // const theme = deepMerge(defaultTheme, targetTheme)
}
