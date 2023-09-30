import { createGenerator } from 'unocss'
import { describe, expect, it } from 'vitest'
import { presetUseful } from 'unocss-preset-useful'
import type { UsefulExtends, UsefulTheme } from '../packages/core/src/types'

describe('presetUseful theme', () => {
  const extend: UsefulExtends = {
    animation: {
      'spin': 'spin 1s linear infinite',
      'bounce': 'bounce 2s ease-in-out 3',
      'fade': 'fade 1s ease-in-out 3',
      'foo': 'foo 1s * 3',
      'bar': 'bar 1s +',
      'wiggle-slow': 'wiggle 1s ease-in-out infinite',
    },
    keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' },
        '20%, 30%': { transform: 'rotate(-3deg)' },
        '80%': { transform: 'rotate(3deg)' },
      },
    },
  }

  it('theme extend configuration', async () => {
    const _uno = createGenerator<UsefulTheme>({
      presets: [
        presetUseful({
          enableDefaultShortcuts: false,
          enableMagicAnimations: false,
          uno: true,
          theme: {
            extend,
          },
        }),
      ],
    })
    const { css } = await _uno.generate('animate-wiggle-slow', { preflights: false })

    expect(_uno.config.theme.animation).toMatchSnapshot()
    expect(css).toMatchInlineSnapshot(`
      "/* layer: shortcuts */
      .animate-wiggle-slow{animation:wiggle 1s ease-in-out infinite;}
      /* layer: default */
      @keyframes wiggle{0%, 100%{transform:rotate(-3deg);}50%{transform:rotate(3deg);}20%, 30%{transform:rotate(-3deg);}80%{transform:rotate(3deg);}}"
    `)
  })
})
