import type { UsefulTheme } from '../../types'
import { deepMerge, nomarlizeAnimate } from '../../utils'

import { magicAnimate } from './animate'

// IN-README-START
// See index.test.ts `themeAnimate configuration` for usage.
export function nomarlizeTheme(theme: UsefulTheme): UsefulTheme {
  return {
    ...theme,
    animation: deepMerge(magicAnimate(), theme.animation ? nomarlizeAnimate(theme.animation) : {}) as any,
  }
}

// IN-README-END
