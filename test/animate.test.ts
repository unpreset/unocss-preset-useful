import { describe, expect, test } from 'vitest'
import { createGenerator } from 'unocss'
import type { Theme } from '@unocss/preset-mini'
import { magicAnimate } from '../src/core/theme/animate'
import presetUseful from '../src'

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

    const { css } = await uno.generate('animate-tinUpOut', { preflights: false })
    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      @keyframes tinUpOut{{0%,20%,40%,50%{\\"opacity\\":1,\\"transform\\":\\"scale(1,1)translateY(0)\\"}}{10%,30%{\\"opacity\\":1,\\"transform\\":\\"scale(1.1,1.1)translateY(0)\\"}}{100%{\\"opacity\\":0,\\"transform\\":\\"scale(1,1)translateY(-900%)\\"}}}
      .animate-tinUpOut{animation:tinUpOut 1s linear 1;animation-fill-mode:both;}"
    `)
  })
})
