import type { UsefulTheme } from '../../types'
import { nomarlizeAnimate } from '../../utils'

// IN-README-START
// See index.test.ts `themeAnimate configuration` for usage.
export function nomarlizeTheme(theme: UsefulTheme): UsefulTheme {
  return {
    ...theme,
    animation: theme.animation ? nomarlizeAnimate(theme.animation) : undefined,
  }
}
// IN-README-END
