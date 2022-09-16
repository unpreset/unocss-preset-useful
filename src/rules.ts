import { parseColor } from '@unocss/preset-mini/utils'
import type { Rule, RuleMeta } from 'unocss'

const rules: Rule[] = [
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

export const generateRule = (ruleMeta: RuleMeta) => {
  return rules.map((r) => { r[2] = ruleMeta; return r })
}
