import type { Theme } from '@unocss/preset-mini'
import type { WebFontsOptions } from '@unocss/preset-web-fonts'
import type { CustomStaticShortcuts, ResolvedOptions, UsefulOptions, UsefulTheme } from './types'
import presetAttributify from '@unocss/preset-attributify'
import presetIcons from '@unocss/preset-icons'
import presetRemToPx from '@unocss/preset-rem-to-px'
import presetTagify from '@unocss/preset-tagify'
import presetTypography from '@unocss/preset-typography'
import presetUno from '@unocss/preset-uno'
import presetWebFonts from '@unocss/preset-web-fonts'
import transformerCompileClass from '@unocss/transformer-compile-class'
import transformerDirectives from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import { presetMagicss } from 'unocss-preset-magicss'
import { presetScrollbar } from 'unocss-preset-scrollbar'
import { nomarlizeTheme } from './core'
import { cssObj2StrSync, deepMerge, resolveAnimation } from './utils'

const defaultOptions: UsefulOptions = {
  theme: {},
  important: false,
  enableDefaultShortcuts: true,
  /**
   * @deprecated Use `magicss` option instead
   */
  enableMagicAnimations: false,
  /**
   * @deprecated Use `preflights.reset` instead
   */
  enableResetStyles: true,
  preflights: {
    reset: true,
  },
  // presets
  uno: true,
  attributify: true,
  icons: true,
  webFonts: false,
  typography: false,
  tagify: false,
  remToPx: false,
  scrollbar: false,
  magicss: false,

  // transformers
  directives: true,
  variantGroup: true,
  compileClass: false,
}

const defaultPresetOptions: Record<string, any> = {
  webFonts: {
    provider: 'fontsource',
  } as WebFontsOptions,
}

export function resolveOptions(options: UsefulOptions) {
  const optionsWithDefault = Object.assign({}, defaultOptions, options) as Required<UsefulOptions>
  optionsWithDefault.unColor = typeof optionsWithDefault.unColor === 'string'
    ? optionsWithDefault.unColor
    : optionsWithDefault.unColor ? '--un-color' : false

  const presets = []
  const transformers = []
  const presetMap = {
    uno: presetUno,
    attributify: presetAttributify,
    icons: presetIcons,
    webFonts: presetWebFonts,
    typography: presetTypography,
    tagify: presetTagify,
    remToPx: presetRemToPx,
    scrollbar: presetScrollbar,
    magicss: presetMagicss,
  }
  const transformerMap = {
    directives: transformerDirectives,
    variantGroup: transformerVariantGroup,
    compileClass: transformerCompileClass,
  }

  for (const [key, preset] of Object.entries(presetMap)) {
    const option = optionsWithDefault[key as keyof typeof presetMap]
    if (option) {
      const p = preset as any
      const presetOptions = defaultPresetOptions[key as keyof typeof defaultPresetOptions]
      if (typeof option === 'object')
        presets.push(p({ ...presetOptions, ...option }))
      else
        presets.push(p(presetOptions ?? {}))
    }
  }
  for (const [key, transformer] of Object.entries(transformerMap)) {
    const option = optionsWithDefault[key as keyof typeof transformerMap]
    if (option) {
      const t = transformer as any
      transformers.push(t(typeof option === 'boolean' ? {} as any : option))
    }
  }

  const { theme: t_theme, shortcuts } = resolveExtend(optionsWithDefault.theme.extend ?? {})
  const _theme = deepMerge(optionsWithDefault.theme, t_theme)

  return {
    ...optionsWithDefault,
    theme: nomarlizeTheme(_theme),
    meta: {
      presets,
      shortcuts,
      transformers,
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
