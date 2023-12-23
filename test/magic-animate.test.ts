import { describe, expect, it } from 'vitest'
import { createGenerator } from 'unocss'
import type { Theme } from '@unocss/preset-mini'
import { cssObj2StrAsync, presetUseful } from 'unocss-preset-useful'
import { magicAnimate } from '../packages/core/src/core/theme/magic-animate'

describe('magic in PresetUseful Theme', () => {
  it('magic animate', () => {
    expect(magicAnimate()).toMatchFileSnapshot('./fixtures/magic-animate.ts.snap')
  })

  it('magic animate in Uno', async () => {
    const uno = createGenerator<Theme>({
      presets: [
        presetUseful(),
      ],
    })

    const { css } = await uno.generate('animate-puffIn', { preflights: false })
    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      @keyframes puffIn{0%{opacity:0;transform-origin:50% 50%;transform:scale(2, 2);filter:blur(2px);}100%{opacity:1;transform-origin:50% 50%;transform:scale(1, 1);filter:blur(0px);}}
      .animate-puffIn{animation:puffIn 1s linear 1;animation-fill-mode:both;}"
    `)
  })

  it('postcss style stringify', async () => {
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
