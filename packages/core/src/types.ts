import type { AttributifyOptions } from '@unocss/preset-attributify'
import type { PresetUnoOptions } from '@unocss/preset-uno'
import type { IconsOptions } from '@unocss/preset-icons'
import type { WebFontsOptions } from '@unocss/preset-web-fonts'
import type { TypographyOptions } from '@unocss/preset-typography'
import type { TagifyOptions } from '@unocss/preset-tagify'
import type { RemToPxOptions } from '@unocss/preset-rem-to-px'
import type { PresetScrollbarDefaultOption } from 'unocss-preset-scrollbar'
import type { Theme } from '@unocss/preset-mini'
import type { CSSObject, Preset, StaticShortcut } from 'unocss'

type CustomStaticShortcut = [string | string[], StaticShortcut[1]] | [string | string[], StaticShortcut[1], StaticShortcut[2]]
export type CustomStaticShortcuts = CustomStaticShortcut[]

export type Objectiable<T> = Record<string, T>

export type CSSKeyframesRule = Objectiable<CSSObject>

export interface UsefulExtends extends Exclude<UsefulTheme, 'extend'> {
  keyframes?: Record<string, CSSKeyframesRule>
  /**
   * Different from the original, you can use the following formats:
   *
   * ```ts
   * { name : 'name duration timing-function iteration-count' }
   * ```
   */
  animation?: Objectiable<string>
}

export interface UsefulTheme extends Theme {
  extend?: UsefulExtends
}

export interface UsefulOptions {
  /**
   * Make all unitilities important.
   *
   * @default false
   */
  important?: boolean

  /**
   * Enable default shortcuts
   *
   * @default true
   */
  enableDefaultShortcuts?: boolean

  /**
   * Enable magic animations
   *
   * @default false
   */
  enableMagicAnimations?: boolean

  /**
   * Enable reset styles
   *
   * @default true
   */
  enableResetStyles?: boolean

  /**
   * Extract rgba color in css variable
   *
   * @default false
   */
  unColor?: boolean | string

  /**
   * Improve theme to be more useful, and align with Tailwind theme configuration
   *
   * - Add `animation` to theme, Expand theme animation name usage
   *
   * [ name, duration, timing-function, iteration-count ]
   *
   * @example
   *
   * ```ts
   * theme: {
   *   extend: {
   *     animation: {
   *      shape: 'shape 5s linear infinite'
   *     },
   *     // ...
   *   }
   * }
   * ```
   * You can choose to use special symbols as placeholders, to indicate whether to inject this property into the uno theme
   *
   * - `*` Abandon injection
   * - `+` Injection, but the value is empty
   *
   * @example
   *
   * ```ts
   * theme: {
   *   extend: {
   *     animation: {
   *      foo: 'foo 1s * 3',
   *      bar: 'bar 1s +',
   *     },
   *     // ...
   *   }
   * }
   * ```
   *
   */
  theme?: UsefulTheme

  /**
   * Enable the default preset
   * Only works when `presets` is not specified
   * @default true
   */
  uno?: boolean | PresetUnoOptions

  /**
   * Enable attributify mode and the options of it
   * Only works when `presets` is not specified
   * @default false
   */
  attributify?: boolean | AttributifyOptions

  /**
   * Enable icons preset and the options of it
   * Only works when `presets` is not specified
   * @default false
   */
  icons?: boolean | IconsOptions

  /**
   * Enable webFonts preset and the options of it
   * Only works when `presets` is not specified
   * @default false
   */
  webFonts?: boolean | WebFontsOptions

  /**
   * Enable typography preset and the options of it
   * Only works when `presets` is not specified
   * @default false
   */
  typography?: boolean | TypographyOptions

  /**
   * Enable tagify preset and the options of it
   * Only works when `presets` is not specified
   * @default false
   */
  tagify?: boolean | TagifyOptions

  /**
   * Enable remToPx preset and the options of it
   * Only works when `presets` is not specified
   * @default false
   */
  remToPx?: boolean | RemToPxOptions

  /**
   * Enable scrollbar preset and the options of it
   * Only works when `presets` is not specified
   *
   * See: https://github.com/action-hong/unocss-preset-scrollbar
   *
   * @default false
   */
  scrollbar?: boolean | PresetScrollbarDefaultOption
}

export type ResolvedOptions = Required<UsefulOptions> & {
  meta: {
    presets: Preset[]
    shortcuts: CustomStaticShortcuts
  }
}

export type DeepPartial<T> = { [P in keyof T]?: DeepPartial<T[P]> }
