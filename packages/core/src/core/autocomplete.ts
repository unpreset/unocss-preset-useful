import type { UserConfig } from 'unocss'
import { magicAnimate } from './theme/magic-animate'

const keyframes = magicAnimate()?.keyframes ?? {}

// IN-README-START
export const autocomplete: UserConfig['autocomplete'] = {
  shorthands: {
    magic: `(${Object.keys(keyframes).join('|')})`,
  },
  templates: [
    'animate-<magic>',
  ],
}
// IN-README-END
