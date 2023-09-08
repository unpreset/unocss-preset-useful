import { createGenerator } from 'unocss'
import { describe, expect, test } from 'vitest'
import type { Theme } from '@unocss/preset-mini'
import { nomarlizeAnimate, presetUseful } from '../src'

describe('utils', () => {
  const animate = [
    'spin 1s linear infinite',
    'bounce 2s ease-in-out 3',
    'fade 1s ease-in-out 3',
    'test 1s * 3',
    'aaa 1s +',
  ]

  test('nomarlizeAnimate', async () => {
    const result = nomarlizeAnimate({ animate })

    expect(result).toMatchSnapshot()
  })

  test('themeAnimate configuration', async () => {
    const _uno = createGenerator<Theme>({
      presets: [
        presetUseful({
          uno: false,
          theme: {
            animation: {
              animate,
            },
          },
        }),
      ],
    })

    expect(_uno.config.theme.animation).toMatchSnapshot()
  })
})
