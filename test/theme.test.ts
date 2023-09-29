import { createGenerator } from 'unocss'
import { describe, expect, test } from 'vitest'
import type { Theme } from '@unocss/preset-mini'
import { presetUseful } from 'unocss-preset-useful'

describe('presetUseful theme', () => {
  const animation = {
    spin: 'spin 1s linear infinite',
    bounce: 'bounce 2s ease-in-out 3',
    fade: 'fade 1s ease-in-out 3',
    foo: 'foo 1s * 3',
    bar: 'bar 1s +',
  }

  test('theme animate configuration', async () => {
    const _uno = createGenerator<Theme>({
      presets: [
        presetUseful({
          uno: false,
          theme: {
            animation: {
              animation,
            },
          },
        }),
      ],
    })

    expect(_uno.config.theme.animation).toMatchSnapshot()
  })
})
