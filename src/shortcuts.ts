import type { RuleMeta, UserShortcuts } from 'unocss'

const shortcuts: UserShortcuts = [
  ['pr', 'relative'],
  ['pa', 'absolute'],
  ['pf', 'fixed'],
  ['p-c', 'pa top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'],
  ['f-c', 'flex justify-center items-center'],
  ['f-c-c', 'f-c flex-col'],

  ['fc', 'flex justify-center'],
  ['fcc', 'flex justify-center items-center'],
  ['fs', 'flex justify-start'],
  ['fsc', 'flex justify-start items-center'],
  ['fe', 'flex justify-end'],
  ['fec', 'flex justify-end items-center'],
  ['fb', 'flex justify-between'],
  ['fbc', 'flex justify-between items-center'],
  ['fw', 'flex justify-wrap'],
  ['fwr', 'flex justify-wrap-reverse'],
  ['fa', 'flex justify-around'],
  ['fac', 'flex justify-around items-center'],

  ['fic', 'flex items-center'],
  ['fccc', 'flex justify-center items-center flex-col'],

  ['trans', 'transition-all-350 ease-linear'],
  ['text', 'text-text-default dark:text-text-dark'],
  ['bg', 'trans bg-bg-default dark:bg-bg-dark'],
  ['base', 'trans text'],

  ['icon', 'w-5.5 h-5.5 cursor-pointer select-none transition-opacity-300 ease-in-out text'],
  ['icon-btn', 'icon color-inherit op64 hover-op100 hover-color-teal-500 dark-hover-color-inherit'],
  ['icon-link', 'icon color-inherit op64 hover:op100 hover-text-red-300 dark-hover-color-inherit'],
]

export const generateShortcuts = (ruleMeta: RuleMeta) => {
  return shortcuts.map((s) => { s[2] = (ruleMeta); return s })
}
