import { createGenerator, presetUno } from 'unocss'
import { describe, expect, it } from 'vitest'
import type { UsefulOptions } from 'unocss-preset-useful'
import { presetUseful } from 'unocss-preset-useful'

function generateUno(options: UsefulOptions = {}) {
  return createGenerator({
    presets: [
      presetUno(),
      presetUseful(options),
    ],
  })
}

describe('presetUseful postprocess with unColor', () => {
  const code = 'bg-red text-blue'

  it('base', async () => {
    const uno = generateUno({
      unColor: true,
    })

    const { css } = await uno.generate(code, { preflights: false })

    expect(css).toMatchSnapshot()
  })

  it('with any string', async () => {
    const uno = generateUno({
      unColor: '--test-color',
    })

    const { css } = await uno.generate(code, { preflights: false })

    expect(css).toMatchSnapshot()
  })
})

describe('presetUseful postprocess with important', () => {
  const withOutImport = ['bg-red', 'text-blue']
  const withInImport = ['!text-xl', 'sm:text-sm!', 'important-ma']

  it('base', async () => {
    const uno = generateUno({
      important: true,
    })

    const { css } = await uno.generate([...withInImport, ...withOutImport], { preflights: false })

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .important-ma{margin:auto !important;}
      .bg-red{--un-bg-opacity:1 !important;background-color:rgba(248,113,113,var(--un-bg-opacity)) !important;}
      .\\\\!text-xl{font-size:1.25rem !important;line-height:1.75rem !important;}
      .text-blue{--un-text-opacity:1 !important;color:rgba(96,165,250,var(--un-text-opacity)) !important;}
      @media (min-width: 640px){
      .sm\\\\:text-sm\\\\!{font-size:0.875rem !important;line-height:1.25rem !important;}
      }"
    `)
  })
})
