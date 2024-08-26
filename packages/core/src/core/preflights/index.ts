import type { Preflight } from '@unocss/core'
import type { ResolvedOptions } from '../../types'
import { resetPreflight } from './reset'

export function preflights(options: ResolvedOptions): Preflight[] {
  return [
    options.enableResetStyles ? resetPreflight : undefined,
  ].filter(Boolean) as Preflight[]
}
