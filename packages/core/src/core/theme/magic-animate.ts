// import MagicCSS from 'magic.css/dist/magic.css'
import type { Theme } from '@unocss/preset-mini'
import { cssObj2StrSync, getKeyframes } from '../../utils'
import magicCSS from '../../../../../data/magicCSS'

// IN-README-START
export function magicAnimate(): Theme['animation'] {
  const keyframesObj = getKeyframes(magicCSS)

  function generate<T = string>(val?: T): Record<string, T> {
    return Object.keys(keyframesObj).reduce((acc, key) => {
      const name = key.replace('@keyframes ', '')
      // @ts-expect-error nothing
      acc[name] = val ?? `{${cssObj2StrSync(keyframesObj[key])}}`
      return acc
    }, {})
  }

  return {
    keyframes: generate(),
    durations: generate('1s'),
    properties: generate({ 'animation-fill-mode': 'both' }),
  }
}
// IN-README-END
