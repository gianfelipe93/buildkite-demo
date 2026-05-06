import { describe, it, expect } from 'vitest'
import { clamp, roundTo, isEven, sum, average } from './numberHelper'

describe('clamp', () => {
  it('returns the value when within range', () => {
    expect(clamp(5, 1, 10)).toBe(5)
  })

  it('clamps to min when below range', () => {
    expect(clamp(-5, 0, 10)).toBe(0)
  })

  it('clamps to max when above range', () => {
    expect(clamp(15, 0, 10)).toBe(10)
  })
})

describe('roundTo', () => {
  it('rounds to the specified number of decimals', () => {
    expect(roundTo(3.14159, 2)).toBe(3.14)
  })

  it('rounds up correctly', () => {
    expect(roundTo(0.555, 2)).toBe(0.56)
  })

  it('rounds to 0 decimals', () => {
    expect(roundTo(4.7, 0)).toBe(5)
  })
})

describe('isEven', () => {
  it('returns true for even numbers', () => {
    expect(isEven(4)).toBe(true)
  })

  it('returns false for odd numbers', () => {
    expect(isEven(7)).toBe(false)
  })

  it('returns true for 0', () => {
    expect(isEven(0)).toBe(true)
  })
})

describe('sum', () => {
  it('sums an array of numbers', () => {
    expect(sum([1, 2, 3, 4])).toBe(10)
  })

  it('returns 0 for an empty array', () => {
    expect(sum([])).toBe(0)
  })
})

describe('average', () => {
  it('returns the average of an array', () => {
    expect(average([2, 4, 6])).toBe(4)
  })

  it('returns 0 for an empty array', () => {
    expect(average([])).toBe(0)
  })
})
