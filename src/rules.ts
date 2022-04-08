import type { Rule, RuleMeta } from 'unocss'

export const rules: Rule[] = [
  ['pr', { position: 'relative' }],
  ['pa', { position: 'absolute' }],
]

export const generateRule = (ruleMeta: RuleMeta) => {
  return rules.map((r) => { r[2] = ruleMeta; return r })
}
