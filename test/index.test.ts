import { createGenerator, escapeSelector } from 'unocss'
import { presetUseful } from 'unocss-preset-useful'
import { describe, expect, it } from 'vitest'
import { usefulTargets } from './fixtures/index.targets'

describe('preset-useful', async () => {
  const uno = await createGenerator({
    presets: [
      presetUseful(),
    ],
  })
  it('targets', async () => {
    const code = usefulTargets.join(' ')
    const { css } = await uno.generate(code)
    const { css: css2 } = await uno.generate(code)

    const unmatched: string[] = []
    for (const i of usefulTargets) {
      if (!css.includes(escapeSelector(i)))
        unmatched.push(i)
    }
    expect(unmatched).toEqual([])
    expect(css).toMatchSnapshot()
    expect(css).toEqual(css2)
  })
})
