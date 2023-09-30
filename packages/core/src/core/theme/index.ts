import type { UsefulTheme } from '../../types'
import { deepMerge } from '../../utils'

import { magicAnimate } from './magic-animate'

const MagicAnimation = magicAnimate()

// IN-README-START
// See index.test.ts `themeAnimate configuration` for usage.
export function nomarlizeTheme(theme: UsefulTheme, enableMagicAnimations: boolean): UsefulTheme {
  return {
    ...theme,
    animation: deepMerge(
      enableMagicAnimations ? MagicAnimation : {},
      theme.animation ?? {},
    ),
  }
}

// IN-README-END
