import type { ThemeAnimation } from '@unocss/preset-mini'

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
