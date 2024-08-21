import type { ThemeAnimation } from '@unocss/preset-mini'
import postcss from 'postcss'
import postcssJs, { objectify } from 'postcss-js'
import type { CSSObject } from 'unocss'
import type { CustomStaticShortcuts, DeepPartial, Objectiable } from './types'

// name duration timing-function iteration-count
export const animationRegExp = /^([a-z-]+)\s+([0-9.]+m?s?|[*+])?\s?([a-z-]+(?:\([^)]+\))?|[*+])?\s*([a-z0-9-]+|[*+])?$/i

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
export function resolveAnimation(extend_animation: Objectiable<string>) {
  const animation: ThemeAnimation = {}
  const keys: (Exclude<keyof ThemeAnimation, 'properties'>)[] = ['durations', 'timingFns', 'counts']
  const shortcuts: CustomStaticShortcuts = []

  for (const k in extend_animation) {
    const v = extend_animation[k]
    const match = v.match(animationRegExp)
    if (match != null) {
      const [, name, duration, timing, count] = match
      const values = [duration, timing, count]

      if (name !== k)
        shortcuts.push([`animate-${k}`, `animate-${name}`])

      for (let i = 0; i < keys.length; i++) {
        const key = keys[i]
        const value = values[i]
        if (value != null) {
          if (value === '*') {
            continue
          }

          if (animation[key]) {
            animation[key]![name] = values[i] === '+' ? '' : values[i]
          }
          else {
            animation[key] = {
              [name]: values[i] === '+' ? '' : values[i],
            }
          }
        }
      }
    }
  }

  return {
    animation,
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
  const obj = objectify(root as any)

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
    return `${str}${camelToHyphen(key)}:${obj[key]};`
  }, '')}}`
}

export async function cssObj2StrAsync(style: Record<string, CSSObject>) {
  return postcss().process(style, { parser: postcssJs } as any).then(result => result.css)
}

export function toArray<T>(val: T | T[]): T[] {
  return Array.isArray(val) ? val : [val]
}

export function camelToHyphen(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}
