import type { UserConfig } from '@unocss/core';
import { magicAnimate } from './theme/magic-animate';

const keyframes = magicAnimate()?.keyframes ?? {};

export const autocomplete: UserConfig['autocomplete'] = {
  shorthands: {
    magic: '(' + Object.keys(keyframes).join('|') + ')',
  },
  templates: [
    'animate-<magic>',
  ]
}
