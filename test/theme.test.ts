import { createGenerator } from 'unocss'
import { describe, expect, test } from 'vitest'
import type { Theme } from '@unocss/preset-mini'
import { cssObj2StrAsync, cssObj2StrSync, presetUseful } from 'unocss-preset-useful'
import type { UsefulExtends } from '../packages/core/src/types'

describe('presetUseful theme', () => {
  const extend: UsefulExtends = {
    animation: {
      spin: 'spin 1s linear infinite',
      bounce: 'bounce 2s ease-in-out 3',
      fade: 'fade 1s ease-in-out 3',
      foo: 'foo 1s * 3',
      bar: 'bar 1s +',
    },
    keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' },
        '20%, 30%': { transform: 'rotate(-3deg)' },
        '80%': { transform: 'rotate(3deg)' },
      }
    }
  }


  test('theme animate configuration', async () => {
    const _uno = createGenerator<Theme>({
      presets: [
        presetUseful({
          uno: false,
          theme: {
            extend
          },
        }) as any,
      ],
    })

    expect(_uno.config.theme.animation).toMatchSnapshot()
  })

  test('theme keyframes configuration', async () => {
    expect(await cssObj2StrAsync(extend.keyframes!.wiggle)).toMatchInlineSnapshot(`
      "0%, 100% {
          transform: rotate(-3deg)
      }
      50% {
          transform: rotate(3deg)
      }
      20%, 30% {
          transform: rotate(-3deg)
      }
      80% {
          transform: rotate(3deg)
      }"
    `)
    expect(cssObj2StrSync(extend.keyframes!.wiggle)).toMatchInlineSnapshot('"0%, 100%{transform:rotate(-3deg);}50%{transform:rotate(3deg);}20%, 30%{transform:rotate(-3deg);}80%{transform:rotate(3deg);}"')
  })
})
