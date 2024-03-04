import { createGenerator } from 'unocss'
import { describe, expect, it } from 'vitest'
import type { UsefulOptions } from 'unocss-preset-useful'
import { presetUseful } from 'unocss-preset-useful'

function generateUno(options: UsefulOptions = {}) {
  return createGenerator({
    presets: [
      presetUseful(options),
    ],
  })
}

describe('presetUseful preflights', () => {
  it('base', async () => {
    const uno = generateUno()
    const preflights = uno.config.preflights

    expect(preflights.map(p => p.layer || 'default')).toMatchInlineSnapshot(`
      [
        "useful",
        "preflights",
      ]
    `)
  })
})
