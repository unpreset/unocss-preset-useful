# unocss-preset-useful [![npm](https://img.shields.io/npm/v/unocss-preset-useful)](https://npmjs.com/package/unocss-preset-useful)

My useful preset about unocss usage.

## Usage
```shell
pnpm i -D unocss-preset-useful
```

```ts
// unocss.config.ts
import { defineConfig, presetUno } from 'unocss'
import { presetUseful } from 'unocss-preset-useful'

export default defineConfig({
  presets: [
    presetUno(),
    presetUseful(),
  ],
})
```


## extractors
  
```ts
// https://github.com/unocss/unocss/pull/2485
// Support extract base64 image.
export const extractors: Extractor[] = [
  {
    name: 'unocss-preset-useful-extractor-includes-base64',
    order: 0,
    extract({ code }) {
      return [...new Set(code.split(/[\\:]?[\s'"`{}]|;(?!base64)+/g))]
    },
  },
]
```

## postprocess
  
```ts
// https://github.com/unocss/unocss/discussions/2816
// Extract rgba color in css variable.
export function postprocessWithUnColor(unColor: string): Postprocessor {
  return (util) => {
    util.entries.forEach((i) => {
      const value = i[1]
      if (typeof value === 'string') {
        const match = value.match(rgbaRE)
        if (match != null) {
          i[1] = value.replace(rgbaRE, `rgba(var(${unColor}),$2)`)
          util.entries.unshift([unColor, match[1]])
        }
      }
    })
  }
}
```

## rules
  
```ts
// Use any css variable easily.
export const rules: Rule[] = [
  [/^(.+)::(.+)$/, ([, n, v], { theme }) => {
    const color = parseColor(v, theme)
    if (color?.cssColor?.type === 'rgb' && color.cssColor.components) {
      return {
        [`--${n}`]: `${color.cssColor.components.join(',')}`,
      }
    }
    return {
      [`--${n}`]: v,
    }
  }],
]
```

## shortcuts
  
```ts
// FYI. My own shortcuts.
const _shortcuts: CustomStaticShortcuts = [
  // position
  ['pr', 'relative'],
  ['pa', 'absolute'],
  ['pf', 'fixed'],
  ['ps', 'sticky'],

  // position layout
  [['pxc', 'p-x-c'], 'pa left-1/2 -translate-x-1/2'],
  [['pyc', 'p-y-c'], 'pa top-1/2 -translate-y-1/2'],
  [['pcc', 'pc', 'p-c', 'p-c-c'], 'pxc pyc'],

  // flex layout
  [['f-c', 'fcc'], 'flex justify-center items-center'],
  [['f-c-c', 'fccc'], 'f-c flex-col'],
  [['fc', 'fxc', 'f-x-c'], 'flex justify-center'],
  [['fi', 'fyc', 'f-y-c'], 'flex items-center'],
  ['fs', 'flex justify-start'],
  ['fsc', 'flex justify-start items-center'],
  ['fse', 'flex justify-start items-end'],
  ['fe', 'flex justify-end'],
  ['fec', 'flex justify-end items-center'],
  ['fb', 'flex justify-between'],
  ['fbc', 'flex justify-between items-center'],
  ['fa', 'flex justify-around'],
  ['fac', 'flex justify-around items-center'],
  ['fw', 'flex justify-wrap'],
  ['fwr', 'flex justify-wrap-reverse'],

  // transition
  ['trans', 'transition-all-350 ease-linear'],
]
```


## License

[MIT](./LICENSE) License © 2022 [zyyv](https://github.com/zyyv)
