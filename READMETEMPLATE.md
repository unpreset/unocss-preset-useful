# unocss-preset-useful [![npm](https://img.shields.io/npm/v/unocss-preset-useful)](https://npmjs.com/package/unocss-preset-useful)

Integrate and useful preset.

## Features
- 🔥 All-in-One popular presets.
- 🚀 Collection of features not integrated into UnoCSS.
  - 🍥 Support extract base64 image.
  - 🎨 Support extract rgba color in css variable.
  - 💜 Support expand theme animation name usage.
  - 🍬 etc.
- 📦 Build-In [Magic Animate](https://github.com/miniMAC/magic).
- 🌬️ Align with TW theme configuration.

## Usage
```shell
pnpm i -D unocss-preset-useful unocss
```

```ts
// unocss.config.ts
import { defineUsefulConfig } from 'unocss-preset-useful'

export default defineUsefulConfig()

// Custom options
export default defineUsefulConfig(
  {
    // Useful options
  },
  {
    // Uno options
  }
)
```

<details>
<summary>Options</summary><br>

```ts
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
   * @default true
   */
  enableMagicAnimations?: boolean

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
```

<br></details>

## Details

<details>
<summary>Expand it see more details</summary><br>

<slot/>

<br></details>

## License

[MIT](./LICENSE) License © 2022 [zyyv](https://github.com/zyyv)
