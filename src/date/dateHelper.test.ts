import { describe, it, expect } from 'vitest'
import { addDays, differenceInDays, isWeekend, startOfDay, formatDate } from './dateHelper'

describe('addDays', () => {
  it('adds positive days', () => {
    const result = addDays(new Date('2024-01-01'), 5)
    expect(formatDate(result)).toBe('2024-01-06')
  })

  it('subtracts days when negative', () => {
    const result = addDays(new Date('2024-01-10'), -3)
    expect(formatDate(result)).toBe('2024-01-07')
  })

  it('does not mutate the original date', () => {
    const original = new Date('2024-01-01')
    addDays(original, 5)
    expect(formatDate(original)).toBe('2024-01-01')
  })
})

describe('differenceInDays', () => {
  it('returns the absolute difference between two dates', () => {
    expect(differenceInDays(new Date('2024-01-10'), new Date('2024-01-01'))).toBe(9)
  })

  it('is order-independent', () => {
    expect(differenceInDays(new Date('2024-01-01'), new Date('2024-01-10'))).toBe(9)
  })

  it('returns 0 for the same date', () => {
    expect(differenceInDays(new Date('2024-06-01'), new Date('2024-06-01'))).toBe(0)
  })
})

describe('isWeekend', () => {
  it('returns true for Saturday', () => {
    expect(isWeekend(new Date('2024-01-06'))).toBe(true)
  })

  it('returns true for Sunday', () => {
    expect(isWeekend(new Date('2024-01-07'))).toBe(true)
  })

  it('returns false for a weekday', () => {
    expect(isWeekend(new Date('2024-01-08'))).toBe(false)
  })
})

describe('startOfDay', () => {
  it('zeroes out the time portion', () => {
    const result = startOfDay(new Date('2024-03-15T14:30:00'))
    expect(result.getHours()).toBe(0)
    expect(result.getMinutes()).toBe(0)
    expect(result.getSeconds()).toBe(0)
    expect(result.getMilliseconds()).toBe(0)
  })

  it('does not mutate the original date', () => {
    const original = new Date('2024-03-15T14:30:00')
    startOfDay(original)
    expect(original.getHours()).toBe(14)
  })
})

describe('formatDate', () => {
  it('formats as YYYY-MM-DD', () => {
    expect(formatDate(new Date('2024-07-04'))).toBe('2024-07-04')
  })
})
