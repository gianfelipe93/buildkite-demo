import { describe, it, expect } from 'vitest'
import { chunk, unique, flatten, groupBy, shuffle } from './arrayHelper'

describe('chunk', () => {
  it('splits an array into chunks of the given size', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]])
  })

  it('returns the whole array in one chunk when size exceeds length', () => {
    expect(chunk([1, 2], 5)).toEqual([[1, 2]])
  })

  it('returns an empty array for an empty input', () => {
    expect(chunk([], 3)).toEqual([])
  })
})

describe('unique', () => {
  it('removes duplicate values', () => {
    expect(unique([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3])
  })

  it('returns the same array when all values are unique', () => {
    expect(unique(['a', 'b', 'c'])).toEqual(['a', 'b', 'c'])
  })
})

describe('flatten', () => {
  it('flattens a 2D array into a 1D array', () => {
    expect(flatten([[1, 2], [3, 4], [5]])).toEqual([1, 2, 3, 4, 5])
  })

  it('returns an empty array for an empty input', () => {
    expect(flatten([])).toEqual([])
  })
})

describe('groupBy', () => {
  it('groups objects by a key', () => {
    const input = [
      { type: 'fruit', name: 'apple' },
      { type: 'veggie', name: 'carrot' },
      { type: 'fruit', name: 'banana' },
    ]
    const result = groupBy(input, 'type')
    expect(result['fruit']).toHaveLength(2)
    expect(result['veggie']).toHaveLength(1)
  })
})

describe('shuffle', () => {
  it('returns an array with the same elements', () => {
    const input = [1, 2, 3, 4, 5]
    expect(shuffle(input).sort()).toEqual([...input].sort())
  })

  it('does not mutate the original array', () => {
    const input = [1, 2, 3]
    shuffle(input)
    expect(input).toEqual([1, 2, 3])
  })
})
