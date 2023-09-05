import { createGenerator } from 'unocss'
import { describe, expect, test } from 'vitest'
import { presetUseful } from '../src'

describe('useful presets', () => {
  test('mutiple preset', async () => {
    const uno = createGenerator({
      presets: [
        presetUseful({
          typography: true,
          scrollbar: true,
        }),
      ],
    })

    const { css } = await uno.generate('text-center prose scrollbar', { preflights: false })

    expect(css).toMatchSnapshot()
  })
})
