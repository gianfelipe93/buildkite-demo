import { describe, it, expect } from 'vitest'
import { pick, omit, deepClone, isEmpty, mapValues } from './objectHelper'

describe('pick', () => {
  it('returns only the specified keys', () => {
    expect(pick({ a: 1, b: 2, c: 3 }, ['a', 'c'])).toEqual({ a: 1, c: 3 })
  })

  it('ignores keys that do not exist', () => {
    expect(pick({ a: 1 }, ['a', 'b' as keyof { a: number }])).toEqual({ a: 1 })
  })
})

describe('omit', () => {
  it('excludes the specified keys', () => {
    expect(omit({ a: 1, b: 2, c: 3 }, ['b'])).toEqual({ a: 1, c: 3 })
  })

  it('returns a full copy when no keys are omitted', () => {
    expect(omit({ a: 1, b: 2 }, [])).toEqual({ a: 1, b: 2 })
  })
})

describe('deepClone', () => {
  it('creates a deep copy of an object', () => {
    const original = { a: { b: 1 } }
    const clone = deepClone(original)
    clone.a.b = 99
    expect(original.a.b).toBe(1)
  })
})

describe('isEmpty', () => {
  it('returns true for an empty object', () => {
    expect(isEmpty({})).toBe(true)
  })

  it('returns false for a non-empty object', () => {
    expect(isEmpty({ a: 1 })).toBe(false)
  })
})

describe('mapValues', () => {
  it('applies the function to each value', () => {
    expect(mapValues({ a: 1, b: 2 }, v => v * 2)).toEqual({ a: 2, b: 4 })
  })

  it('can transform value types', () => {
    expect(mapValues({ x: 'hello' }, v => v.length)).toEqual({ x: 5 })
  })
})
