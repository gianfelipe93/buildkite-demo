import { describe, it, expect } from 'vitest'
import { factorial, fibonacci, isPrime, gcd, lcm } from './mathHelper'

describe('factorial', () => {
  it('returns 1 for 0', () => {
    expect(factorial(0)).toBe(1)
  })

  it('returns 120 for 5', () => {
    expect(factorial(5)).toBe(120)
  })

  it('throws for negative numbers', () => {
    expect(() => factorial(-1)).toThrow(RangeError)
  })
})

describe('fibonacci', () => {
  it('returns 0 for n=0', () => {
    expect(fibonacci(0)).toBe(0)
  })

  it('returns 1 for n=1', () => {
    expect(fibonacci(1)).toBe(1)
  })

  it('returns 55 for n=10', () => {
    expect(fibonacci(10)).toBe(55)
  })
})

describe('isPrime', () => {
  it('returns false for 1', () => {
    expect(isPrime(1)).toBe(false)
  })

  it('returns true for 2', () => {
    expect(isPrime(2)).toBe(true)
  })

  it('returns true for 17', () => {
    expect(isPrime(17)).toBe(true)
  })

  it('returns false for 9', () => {
    expect(isPrime(9)).toBe(false)
  })
})

describe('gcd', () => {
  it('returns the greatest common divisor', () => {
    expect(gcd(48, 18)).toBe(6)
  })

  it('returns the number itself when the other is 0', () => {
    expect(gcd(7, 0)).toBe(7)
  })
})

describe('lcm', () => {
  it('returns the least common multiple', () => {
    expect(lcm(4, 6)).toBe(12)
  })

  it('handles coprime numbers', () => {
    expect(lcm(3, 7)).toBe(21)
  })
})
