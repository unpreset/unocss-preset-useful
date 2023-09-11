import { describe, expect, test } from 'vitest'
import { createGenerator } from 'unocss'
import type { Theme } from '@unocss/preset-mini'
import { magicAnimate } from '../packages/core/src/core/theme/animate'
import presetUseful, { cssObj2StrAsync } from 'unocss-preset-useful'

describe('Theme', () => {
  test('Magic animate', () => {
    expect(magicAnimate()).toMatchFileSnapshot('./fixtures/magic-animate.ts.snap')
  })

  test('Magic animate in Uno', async () => {
    const uno = createGenerator<Theme>({
      presets: [
        presetUseful(),
      ],
    })

    const { css } = await uno.generate('animate-puffIn', { preflights: false })
    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      @keyframes puffIn{0%{opacity:0;transformOrigin:50% 50%;transform:scale(2, 2);filter:blur(2px);}100%{opacity:1;transformOrigin:50% 50%;transform:scale(1, 1);filter:blur(0px);}}
      .animate-puffIn{animation:puffIn 1s linear 1;animation-fill-mode:both;}"
    `)
  })

  test('postcss style stringify', async () => {
    const style = {
      '0%, 20%, 40%, 50%': { opacity: 1, transform: 'scale(1, 1) translateY(0)' },
      '10%, 30%': { opacity: 1, transform: 'scale(1.1, 1.1) translateY(0)' },
      '100%': { opacity: 0, transform: 'scale(1, 1) translateY(-900%)' },
    }

    expect(`{${await cssObj2StrAsync(style)}}`).toMatchInlineSnapshot(`
      "{0%, 20%, 40%, 50% {
          opacity: 1;
          transform: scale(1, 1) translateY(0)
      }
      10%, 30% {
          opacity: 1;
          transform: scale(1.1, 1.1) translateY(0)
      }
      100% {
          opacity: 0;
          transform: scale(1, 1) translateY(-900%)
      }}"
    `)
  })
})
