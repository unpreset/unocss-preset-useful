import type { CSSObject } from 'unocss'
import { describe, expect, test } from 'vitest'
import { cssObj2StrSync, nomarlizeAnimate, stringifyObj } from 'unocss-preset-useful'

describe('utils', () => {
  const animate = [
    'spin 1s linear infinite',
    'bounce 2s ease-in-out 3',
    'fade 1s ease-in-out 3',
    'foo 1s * 3',
    'bar 1s +',
  ]

  test('nomarlizeAnimate', async () => {
    const result = nomarlizeAnimate({ animate })

    expect(result).toMatchSnapshot()
  })

  test('cssObj2StrSync', async () => {
    const style: Record<string, CSSObject> = {
      '0%, 20%, 40%, 50%': { opacity: 1, transform: 'scale(1, 1) translateY(0)' },
      '10%, 30%': { opacity: 1, transform: 'scale(1.1, 1.1) translateY(0)' },
      '100%': { opacity: 0, transform: 'scale(1, 1) translateY(-900%)' },
    }

    expect(await cssObj2StrSync(style)).toMatchInlineSnapshot('"0%, 20%, 40%, 50%{opacity:1;transform:scale(1, 1) translateY(0);}10%, 30%{opacity:1;transform:scale(1.1, 1.1) translateY(0);}100%{opacity:0;transform:scale(1, 1) translateY(-900%);}"')
  })

  test('stringify CSSObject', () => {
    const obj = {
      foo: 'bb',
      bar: 'dd',
    }

    expect(stringifyObj(obj)).toMatchInlineSnapshot('"{foo:bb;bar:dd;}"')
  })
})
