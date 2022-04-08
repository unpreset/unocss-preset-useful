import type { RuleMeta, UserShortcuts } from 'unocss'

export const shortcuts: UserShortcuts = [
  ['f-c', 'flex justify-center items-center'],
  ['f-b', 'flex justify-between items-center'],
  ['f-r', 'flex justify-around items-center'],
  ['f-r', 'flex justify-end items-center'],
  ['f-c-c', 'f-c flex-col'],
  ['f-b-c', 'f-b flex-col'],
  ['f-r-c', 'f-r flex-col'],
  ['f-e-c', 'f-e flex-col'],
  ['f-1', 'flex-1'],
  ['f-a', 'flex-auto'],
  ['p-c', 'pa top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'],
]

export const generateShortcuts = (ruleMeta: RuleMeta) => {
  return shortcuts.map((s) => { s[2] = (ruleMeta); return s })
}
