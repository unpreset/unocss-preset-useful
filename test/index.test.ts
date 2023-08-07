import { createGenerator, escapeSelector, presetUno } from 'unocss'
import { describe, expect, test } from 'vitest'
import type { Theme } from '@unocss/preset-mini'
import { presetUseful } from '../src'
import { usefulTargets } from './fixtures/index.targets'

const uno = createGenerator({
  presets: [
    presetUno(),
    presetUseful(),
  ],
})

describe('preset-useful', () => {
  test('targets', async () => {
    const code = usefulTargets.join(' ')
    const { css } = await uno.generate(code, { preflights: false })
    const { css: css2 } = await uno.generate(code, { preflights: false })

    const unmatched: string[] = []
    for (const i of usefulTargets) {
      if (!css.includes(escapeSelector(i)))
        unmatched.push(i)
    }
    expect(unmatched).toEqual([])
    expect(css).toMatchSnapshot()
    expect(css).toEqual(css2)
  })

  test('extractor includes base64', async () => {
    const code = '<div class="bg-[url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIwAAAABJRU5ErkJggg==)]"></div>'
    const { css, matched } = await uno.generate(code, { preflights: false })
    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .bg-\\\\[url\\\\(data\\\\:image\\\\/png\\\\;base64\\\\,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIwAAAABJRU5ErkJggg\\\\=\\\\=\\\\)\\\\]{--un-url:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIwAAAABJRU5ErkJggg==);background-image:var(--un-url);}"
    `)
    expect(matched).toMatchInlineSnapshot(`
      Set {
        "bg-[url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIwAAAABJRU5ErkJggg==)]",
      }
    `)
  })

  test('themeAnimate configuration', async () => {
    const _uno = createGenerator<Theme>({
      presets: [
        presetUseful({
          themeAnimate: [
            'spin 1s linear infinite',
            'bounce 2s ease-in-out 3',
            'fade 1s ease-in-out 3',
          ],
        }),
      ],
    })

    expect(_uno.config.theme.animation).toMatchInlineSnapshot(`
      {
        "counts": {
          "bounce": "3",
          "fade": "3",
          "spin": "infinite",
        },
        "durations": {
          "bounce": "2s",
          "fade": "1s",
          "spin": "1s",
        },
        "timingFns": {
          "bounce": "ease-in-out",
          "fade": "ease-in-out",
          "spin": "linear",
        },
      }
    `)
  })
})
