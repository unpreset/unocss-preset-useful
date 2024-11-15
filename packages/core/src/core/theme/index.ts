import type { UsefulTheme } from '../../types'

// IN-README-START
// See index.test.ts `themeAnimate configuration` for usage.
export function nomarlizeTheme(theme: UsefulTheme): UsefulTheme {
  return {
    ...theme,
  }
}

// IN-README-END
