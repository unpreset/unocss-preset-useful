import { createGenerator, escapeSelector, presetUno } from 'unocss'
import { describe, expect, test } from 'vitest'
import presetUseful from '../src'
import { usefulTargets } from './index.targets'

const uno = createGenerator({
  presets: [
    presetUno(),
    presetUseful(),
  ],
})

describe('preset-useful', () => {
  test('targets', async() => {
    const code = usefulTargets.join(' ')
    const { css } = await uno.generate(code)
    const { css: css2 } = await uno.generate(code)

    const unmatched = []
    for (const i of usefulTargets) {
      if (!css.includes(escapeSelector(i)))
        unmatched.push(i)
    }
    expect(unmatched).toEqual([])
    expect(css).toMatchSnapshot()
    expect(css).toEqual(css2)
  })
})
