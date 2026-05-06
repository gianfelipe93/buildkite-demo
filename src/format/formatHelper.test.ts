import { describe, it, expect } from 'vitest'
import { formatCurrency, formatBytes, formatDuration, padLeft, formatPercentage } from './formatHelper'

describe('formatCurrency', () => {
  it('formats a number as USD', () => {
    expect(formatCurrency(1234.5)).toBe('$1,234.50')
  })

  it('formats a number as EUR', () => {
    expect(formatCurrency(99.9, 'EUR', 'de-DE')).toContain('99')
  })
})

describe('formatBytes', () => {
  it('returns 0 B for 0', () => {
    expect(formatBytes(0)).toBe('0 B')
  })

  it('formats kilobytes', () => {
    expect(formatBytes(1024)).toBe('1.00 KB')
  })

  it('formats megabytes', () => {
    expect(formatBytes(1024 * 1024)).toBe('1.00 MB')
  })
})

describe('formatDuration', () => {
  it('formats seconds into HH:MM:SS', () => {
    expect(formatDuration(3661)).toBe('01:01:01')
  })

  it('formats zero as 00:00:00', () => {
    expect(formatDuration(0)).toBe('00:00:00')
  })
})

describe('padLeft', () => {
  it('pads a string on the left', () => {
    expect(padLeft('5', 3, '0')).toBe('005')
  })

  it('returns the string unchanged when already long enough', () => {
    expect(padLeft('hello', 3)).toBe('hello')
  })
})

describe('formatPercentage', () => {
  it('formats a ratio as a percentage', () => {
    expect(formatPercentage(0.756)).toBe('75.6%')
  })

  it('respects the decimals parameter', () => {
    expect(formatPercentage(0.5, 0)).toBe('50%')
  })
})
