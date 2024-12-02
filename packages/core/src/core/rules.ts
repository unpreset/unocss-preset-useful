import type { Rule, RuleMeta } from '@unocss/core'
import { parseColor } from '@unocss/preset-mini/utils'
import { layerMeta } from '../meta'

// IN-README-START
// Use any css variable easily.
export const rules: Rule[] = [
  [/^([^:]+)::(\S|[^:]+)$/, ([, n, v], { theme }) => {
    const color = parseColor(v, theme)
    if (color?.cssColor?.type === 'rgb' && color.cssColor.components) {
      return {
        [`--${n}`]: `${color.cssColor.components.join(',')}`,
      }
    }
    return {
      [`--${n}`]: v,
    }
  }],
]
// IN-README-END

normalizeRuleMeta(layerMeta)

export function normalizeRuleMeta(ruleMeta: RuleMeta) {
  for (const r of rules)
    r[2] = Object.assign(r[2] || {}, ruleMeta)
}
