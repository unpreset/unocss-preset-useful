import type { Variant } from 'unocss'
import type { Theme } from '@unocss/preset-mini'
import type { ResolvedOptions } from '../../types'
import { v_active } from './active'

export function variants(_options: ResolvedOptions): Variant<Theme>[] {
  return [
    v_active,
  ]
}
