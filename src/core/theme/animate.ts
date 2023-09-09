// import MagicCSS from 'magic.css/dist/magic.css'
import type { Theme } from '@unocss/preset-mini'
import { convertCSSObjectToString, getKeyframes } from '../../utils'
import { magicCSS } from './magicCSS'

// IN-README-START
export function magicAnimate(): Theme['animation'] {
  const keyframesObj = getKeyframes(magicCSS)

  function generate<T = string>(val?: T): Record<string, T> {
    return Object.keys(keyframesObj).reduce((acc, key) => {
      const name = key.replace('@keyframes ', '')
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      acc[name] = val ?? `{${convertCSSObjectToString(keyframesObj[key])}}`
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
