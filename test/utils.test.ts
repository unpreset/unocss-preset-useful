import type { CSSObject } from 'unocss'
import { createGenerator } from 'unocss'
import { describe, expect, test } from 'vitest'
import type { Theme } from '@unocss/preset-mini'
import { convertCSSObjectToString, nomarlizeAnimate, presetUseful } from '../src'

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

  test('convertCSSObjectToString', async () => {
    const style: Record<string, CSSObject> = {
      '0%, 20%, 40%, 50%': { opacity: 1, transform: 'scale(1, 1) translateY(0)' },
      '10%, 30%': { opacity: 1, transform: 'scale(1.1, 1.1) translateY(0)' },
      '100%': { opacity: 0, transform: 'scale(1, 1) translateY(-900%)' },
    }

    expect(await convertCSSObjectToString(style)).toMatchInlineSnapshot('"{0%,20%,40%,50%{\\"opacity\\":1,\\"transform\\":\\"scale(1,1)translateY(0)\\"}}{10%,30%{\\"opacity\\":1,\\"transform\\":\\"scale(1.1,1.1)translateY(0)\\"}}{100%{\\"opacity\\":0,\\"transform\\":\\"scale(1,1)translateY(-900%)\\"}}"')
  })
})
