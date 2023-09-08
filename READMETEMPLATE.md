# unocss-preset-useful [![npm](https://img.shields.io/npm/v/unocss-preset-useful)](https://npmjs.com/package/unocss-preset-useful)

Integrate and useful preset.

## Features
- 🔥 Integrate popular presets, Use One Get All.
- 🚀 Collection of features not integrated into UnoCSS
  - 🍥 Support extract base64 image
  - 🎨 Support extract rgba color in css variable
  - 💜 Support expand theme animation name usage
  - 🍬 etc.


## Usage
```shell
pnpm i -D unocss-preset-useful unocss
```

```ts
// unocss.config.ts
import { defineConfig } from 'unocss'
import { presetUseful } from 'unocss-preset-useful'

export default defineConfig({
  presets: [
    presetUseful(),
  ],
})
```

<details>
<summary>Options</summary><br>

```ts
export interface UsefulOptions {
  /**
   * Extract rgba color in css variable
   *
   * @default false
   */
  unColor?: boolean | string

  /**
   * Improve theme to be more useful
   *
   * - Add `animation` to theme, Expand theme animation name usage
   *
   * [ name, duration, timing-function, iteration-count ]
   *
   * @example
   *
   * ```ts
    themeAnimate: ['spin 1s linear infinite'],
   * ```
   *
   * See: https://github.com/unpreset/unocss-preset-useful/blob/2750ad7ef72696c094e86c02ed21dfddd9c4a63d/test/utils.test.ts#L21-L36
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
