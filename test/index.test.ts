import { assert, test } from 'vitest'
import { a } from '../src'

test('simple', () => {
  assert.equal(a, 1)
})
