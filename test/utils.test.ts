import { createGenerator } from 'unocss'
import { describe, expect, test } from 'vitest'
import type { Theme } from '@unocss/preset-mini'
import { presetUseful } from '../src'

describe('utils', () => {
  test('themeAnimate configuration', async () => {
    const _uno = createGenerator<Theme>({
      presets: [
        presetUseful({
          themeAnimate: [
            'spin 1s linear infinite',
            'bounce 2s ease-in-out 3',
            'fade 1s ease-in-out 3',
            'test 1s _ 3',
          ],
        }),
      ],
    })

    expect(_uno.config.theme.animation).toMatchSnapshot()
  })
})
