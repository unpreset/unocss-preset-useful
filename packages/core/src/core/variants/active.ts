import type { VariantObject } from '@unocss/core'

export const v_active: VariantObject = {
  name: '@active',
  match(matcher) {
    if (!matcher.startsWith('@active'))
      return matcher

    return {
      matcher: matcher.slice(8),
      selector: s => `${s}.active`,
    }
  },
}
