import { createGenerator, presetUno } from 'unocss'
import { describe, expect, test } from 'vitest'
import type { UsefulOptions } from '../src'
import { presetUseful } from '../src'

function generateUno(options: UsefulOptions = {}) {
  return createGenerator({
    presets: [
      presetUno(),
      presetUseful(options),
    ],
  })
}

describe('postprocess with unColor', () => {
  const code = 'bg-red text-blue'

  test('base', async () => {
    const uno = generateUno({
      unColor: true,
    })

    const { css } = await uno.generate(code, { preflights: false })

    expect(css).toMatchSnapshot()
  })

  test('with string', async () => {
    const uno = generateUno({
      unColor: '--test-color',
    })

    const { css } = await uno.generate(code, { preflights: false })

    expect(css).toMatchSnapshot()
  })
})
