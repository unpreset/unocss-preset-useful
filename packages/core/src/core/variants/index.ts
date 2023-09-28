import type { Variant } from '@unocss/core'
import type { Theme } from '@unocss/preset-mini'
import type { UsefulOptions } from '../../types'
import { v_active } from './active'

export function variants(_options: UsefulOptions): Variant<Theme>[] {
  return [
    v_active,
  ]
}
