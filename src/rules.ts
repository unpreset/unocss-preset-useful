import type { Rule, RuleMeta } from 'unocss'

const rules: Rule[] = []

export const generateRule = (ruleMeta: RuleMeta) => {
  return rules.map((r) => { r[2] = ruleMeta; return r })
}
