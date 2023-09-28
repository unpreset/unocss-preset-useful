import { createGenerator } from 'unocss'
import { describe, expect, test } from 'vitest'
import type { Theme } from '@unocss/preset-mini'
import { presetUseful } from 'unocss-preset-useful'

describe('presetUseful theme', () => {
  const animate = [
    'spin 1s linear infinite',
    'bounce 2s ease-in-out 3',
    'fade 1s ease-in-out 3',
    'foo 1s * 3',
    'bar 1s +',
  ]

  test('theme animate configuration', async () => {
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
