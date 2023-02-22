import { parseColor } from '@unocss/preset-mini/utils'
import type { Rule, RuleMeta } from 'unocss'

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

export const normalizeRuleMeta = (ruleMeta: RuleMeta) => {
  for (const r of rules)
    r[2] = Object.assign(r[2] || {}, ruleMeta)
}
