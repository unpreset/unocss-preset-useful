import type { ThemeAnimation } from '@unocss/preset-mini'
import type { DeepPartial } from './type'

/**
 * Normalize custom animate usage to UnoCSS animations theme.
 *
 * [ name, duration, timing-function, iteration-count ]
 *
 * @example
 *
 * themeAnimate: ['spin 1s linear infinite'],
 *
 * Will be transformd:
 *
 * {
 *   durations: {
 *     spin: '1s',
 *   },
 *   timingFns: {
 *     spin: 'linear',
 *   },
 *   counts: {
 *     spin: 'infinite',
 *   },
 * }
 */
export function nomarlizeAnimate(themeAnimate: string[]) {
  const animateTheme: ThemeAnimation = {}
  const animateKeys: (Exclude<keyof ThemeAnimation, 'properties'>)[] = ['durations', 'timingFns', 'counts']
  themeAnimate.forEach((v) => {
    const ps = v.split(/\s+/)
    if (ps.length > 1) {
      const key = ps[0]
      for (let i = 1; i < ps.length; i++) {
        if (animateTheme[animateKeys[i - 1]]) {
          animateTheme[animateKeys[i - 1]]![key] = ps[i]
        }
        else {
          animateTheme[animateKeys[i - 1]] = {
            [key]: ps[i],
          }
        }
      }
    }
  })

  return animateTheme
}

/**
 * Deep merge two objects.
 * @param original Original object
 * @param patch Patch object
 * @returns Merged object
 */
export function deepMerge<T>(original: T, patch: DeepPartial<T>): T {
  const o = original as any
  const p = patch as any

  if (Array.isArray(o) && Array.isArray(p))
    return [...o, ...p] as any

  if (Array.isArray(o))
    return [...o] as any

  const output = { ...o }
  if (isObject(o) && isObject(p)) {
    Object.keys(p).forEach((key) => {
      if (isObject(p[key])) {
        if (!(key in o))
          Object.assign(output, { [key]: p[key] })
        else
          output[key] = deepMerge(o[key], p[key])
      }
      else {
        Object.assign(output, { [key]: p[key] })
      }
    })
  }
  return output
}

function isObject(val: unknown): val is Record<any, any> {
  return val !== null && typeof val === 'object'
}
