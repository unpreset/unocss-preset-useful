# unocss-preset-useful

My useful preset about unocss usage

<p>
  <a href="https://npmjs.com/package/unocss-preset-useful" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/npm/v/unocss-preset-useful" alt="npm version">
  </a>
</p>


# Usage
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
