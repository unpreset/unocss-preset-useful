import type { Extractor } from 'unocss'

// https://github.com/unocss/unocss/pull/2485

// IN-README-START
export const extractors: Extractor[] = [{
  name: 'unocss-preset-useful-extractor-includes-base64',
  order: 0,
  extract({ code }) {
    return [...new Set(code.split(/[\\:]?[\s'"`{}]|;(?!base64)+/g))]
  },
}]
// IN-README-END
