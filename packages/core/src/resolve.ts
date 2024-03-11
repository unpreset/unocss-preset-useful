import type { Theme } from '@unocss/preset-mini'
import { nomarlizeTheme } from './core'
import type { CustomStaticShortcuts, ResolvedOptions, UsefulOptions, UsefulTheme } from './types'
import { cssObj2StrSync, deepMerge, resolveAnimation } from './utils'

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
  enableDefaultShortcuts: true,
  enableMagicAnimations: false,
  important: false,
  enableResetStyles: true,
}

export async function resolveOptions(options: UsefulOptions) {
  const optionsWithDefault = Object.assign({}, defaultOptions, options) as Required<UsefulOptions>
  optionsWithDefault.unColor = typeof optionsWithDefault.unColor === 'string'
    ? optionsWithDefault.unColor
    : optionsWithDefault.unColor ? '--un-color' : false

  const presets = []
  const presetMap = {
    uno: import('@unocss/preset-uno').then(({ presetUno }) => presetUno),
    attributify: import('@unocss/preset-attributify').then(({ presetAttributify }) => presetAttributify),
    icons: import('@unocss/preset-icons').then(({ presetIcons }) => presetIcons),
    webFonts: import('@unocss/preset-web-fonts'),
    typography: import('@unocss/preset-typography').then(({ presetTypography }) => presetTypography),
    tagify: import('@unocss/preset-tagify').then(({ presetTagify }) => presetTagify),
    remToPx: import('@unocss/preset-rem-to-px').then(({ presetRemToPx }) => presetRemToPx),
    scrollbar: import('unocss-preset-scrollbar').then(({ presetScrollbar }) => presetScrollbar),
  }

  for (const [key, preset] of Object.entries(presetMap)) {
    const option = optionsWithDefault[key as keyof typeof presetMap]
    if (option) {
      const p = await preset as any
      presets.push(p(typeof option === 'boolean' ? {} as any : option))
    }
  }

  const { theme: t_theme, shortcuts } = resolveExtend(optionsWithDefault.theme.extend ?? {})
  const _theme = deepMerge(optionsWithDefault.theme, t_theme)

  return {
    ...optionsWithDefault,
    theme: nomarlizeTheme(_theme, optionsWithDefault.enableMagicAnimations),
    meta: {
      presets,
      shortcuts,
    },
  } as ResolvedOptions
}

export function resolveExtend(extend: UsefulTheme['extend']) {
  const _shortcuts: CustomStaticShortcuts = []
  const { animation, keyframes } = extend!

  // animation
  const { animation: resolvedAnimation, shortcuts } = resolveAnimation(animation ?? {})
  _shortcuts.push(...shortcuts)

  // keyframes
  resolvedAnimation.keyframes = {}
  for (const key in keyframes)
    resolvedAnimation.keyframes[key] = `{${cssObj2StrSync(keyframes[key])}}`

  return {
    theme: { animation: resolvedAnimation } as Theme,
    shortcuts: _shortcuts,
  }
}
