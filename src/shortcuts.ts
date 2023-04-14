import type { RuleMeta, StaticShortcut } from 'unocss'

export const shortcuts: StaticShortcut[] = [
  ['pr', 'relative'],
  ['pa', 'absolute'],
  ['pf', 'fixed'],
  ['p-c', 'pa top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'],
  ['f-c', 'flex justify-center items-center'],
  ['f-c-c', 'f-c flex-col'],

  ['fc', 'flex justify-center'],
  ['fi', 'flex items-center'],
  ['fcc', 'flex justify-center items-center'],
  ['fs', 'flex justify-start'],
  ['fsc', 'flex justify-start items-center'],
  ['fse', 'flex justify-start items-end'],
  ['fe', 'flex justify-end'],
  ['fec', 'flex justify-end items-center'],
  ['fb', 'flex justify-between'],
  ['fbc', 'flex justify-between items-center'],
  ['fa', 'flex justify-around'],
  ['fac', 'flex justify-around items-center'],
  ['fw', 'flex justify-wrap'],
  ['fwr', 'flex justify-wrap-reverse'],

  ['fic', 'flex items-center'],
  ['fccc', 'flex justify-center items-center flex-col'],

  ['trans', 'transition-all-350 ease-linear'],
]

export function normalizeShortcutMeta(ruleMeta: RuleMeta) {
  for (const r of shortcuts)
    r[2] = Object.assign(r[2] || {}, ruleMeta)
}
