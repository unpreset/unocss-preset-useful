import type { ThemeAnimation } from '@unocss/preset-mini'
import postcss from 'postcss'
import postcssJs, { objectify } from 'postcss-js'
import type { CSSObject } from 'unocss'
import type { CustomStaticShortcuts, DeepPartial, UsefulThemeAnimation } from './types'


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
export function resolveAnimation(animation: UsefulThemeAnimation) {
  const { animation: themeAnimate = {} } = animation
  const _animation: ThemeAnimation = {}
  const keys: (Exclude<keyof ThemeAnimation, 'properties'>)[] = ['durations', 'timingFns', 'counts']
  const shortcuts: CustomStaticShortcuts = []

  for (const name in themeAnimate) {
    const v = themeAnimate[name]
    const ps = v.split(/\s+/)
    if (ps.length > 1) {
      const key = ps[0]

      if (key !== name)
        shortcuts.push([`animate-${name}`, `animate-${key}`])

      for (let i = 1; i < ps.length; i++) {
        if (ps[i] === '*')
          continue
        const _key = keys[i - 1]
        if (_animation[_key]) {
          _animation[_key]![key] = ps[i] === '+' ? '' : ps[i]
        }
        else {
          _animation[_key] = {
            [key]: ps[i] === '+' ? '' : ps[i],
          }
        }
      }
    }
  }

  return {
    animation: deepMerge(animation, _animation),
    shortcuts,
  }
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

export function cssObj2StrSync(style: Record<string, CSSObject>): string {
  return Object.keys(style).reduce((str, key) => {
    return `${str}${key}${stringifyObj(style[key])}`
  }, '').replace(/\n/g, '')
}

export function stringifyObj(obj: CSSObject) {
  return `{${Object.keys(obj).reduce((str, key) => {
    return `${str}${key}:${obj[key]};`
  }, '')}}`
}

export async function cssObj2StrAsync(style: Record<string, CSSObject>) {
  return postcss().process(style, { parser: postcssJs } as any).then(result => result.css)
}

export function toArray<T>(val: T | T[]): T[] {
  return Array.isArray(val) ? val : [val]
}
