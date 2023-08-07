import type { ThemeAnimation } from '@unocss/preset-mini'

// IN-README-START
// See index.test.ts `themeAnimate configuration` for usage.
export function nomarlizeTheme(themeAnimate?: string[]) {
  const animateTheme: ThemeAnimation = {}
  const animateKeys: (Exclude<keyof ThemeAnimation, 'properties'>)[] = ['durations', 'timingFns', 'counts']
  themeAnimate?.forEach((v) => {
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
// IN-README-END
