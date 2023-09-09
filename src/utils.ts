import type { ThemeAnimation } from '@unocss/preset-mini'
import postcss from 'postcss'
import { objectify } from 'postcss-js'
import type { CSSObject } from 'unocss'
import type { DeepPartial, UsefulThemeAnimation } from './types'

/**
 * Normalize custom animate usage to UnoCSS animations theme.
 *
 * ⚠️ You must strictly follow the following format. ⚠️
 *
 * [ name, duration, timing-function, iteration-count ]
 *
 * If you use * as placeholder, it will be ignored.
 *
 * [name, duration, *, iteration-count]
 *
 * If you use + as placeholder, it will be replaced with empty string.
 *
 * [name, duration, +, iteration-count]
 *
 * @example
 *
 * { animate: ['spin 1s linear infinite'] }
 *
 * Will be transformd:
 *
 * {
 *   animate: ['spin 1s linear infinite'],
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
export function nomarlizeAnimate(animation: UsefulThemeAnimation) {
  const { animate: themeAnimate } = animation
  const animateTheme: ThemeAnimation = {}
  const animateKeys: (Exclude<keyof ThemeAnimation, 'properties'>)[] = ['durations', 'timingFns', 'counts']
  themeAnimate?.forEach((v) => {
    const ps = v.split(/\s+/)
    if (ps.length > 1) {
      const key = ps[0]
      for (let i = 1; i < ps.length; i++) {
        if (ps[i] === '*')
          continue
        const _key = animateKeys[i - 1]
        if (animateTheme[_key]) {
          animateTheme[_key]![key] = ps[i] === '+' ? '' : ps[i]
        }
        else {
          animateTheme[_key] = {
            [key]: ps[i] === '+' ? '' : ps[i],
          }
        }
      }
    }
  })

  return deepMerge(animation, animateTheme)
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

export function isObject(val: unknown): val is Record<any, any> {
  return val !== null && typeof val === 'object'
}

export function getKeyframes(css: string) {
  const root = postcss.parse(css)
  const obj = objectify(root)

  return Object.keys(obj).reduce<Record<string, Record<string, CSSObject>>>((acc, key) => {
    if (key.startsWith('@keyframes'))
      acc[key] = obj[key]
    return acc
  }, {})
}

export function convertCSSObjectToString(style: Record<string, object>): string {
  return Object.keys(style).reduce((str, key) => {
    return `${str}{${key}${JSON.stringify(style[key])}}`
  }, '').replace(/\n|\s/g, '')
}

// export async function convertCSSObjectToString(style: Record<string, CSSObject>) {
//   return postcss().process(style, { parser: postcssJs } as any).then(result => result.css)
// }

export function toArray<T>(val: T | T[]): T[] {
  return Array.isArray(val) ? val : [val]
}
