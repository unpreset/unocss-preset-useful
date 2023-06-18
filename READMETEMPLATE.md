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

<slot/>

## License

[MIT](./LICENSE) License © 2022 [zyyv](https://github.com/zyyv)
