import { parseColor } from '@unocss/preset-mini/utils'
import type { Rule, RuleMeta } from 'unocss'
import { layerMeta } from './meta'

export const rules: Rule[] = [
  [/^(.+)::(.+)$/, ([, n, v], { theme }) => {
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

normalizeRuleMeta(layerMeta)

export function normalizeRuleMeta(ruleMeta: RuleMeta) {
  for (const r of rules)
    r[2] = Object.assign(r[2] || {}, ruleMeta)
}
