import { describe, it, expect } from 'vitest'
import { isEmail, isUrl, isPhoneNumber, isNonEmpty, isNumericString } from './validationHelper'

describe('isEmail', () => {
  it('returns true for valid email', () => {
    expect(isEmail('user@example.com')).toBe(true)
  })

  it('returns false for missing @', () => {
    expect(isEmail('userexample.com')).toBe(false)
  })

  it('returns false for missing domain', () => {
    expect(isEmail('user@')).toBe(false)
  })
})

describe('isUrl', () => {
  it('returns true for https URL', () => {
    expect(isUrl('https://example.com')).toBe(true)
  })

  it('returns true for http URL', () => {
    expect(isUrl('http://example.com')).toBe(true)
  })

  it('returns false for a plain string', () => {
    expect(isUrl('not a url')).toBe(false)
  })
})

describe('isPhoneNumber', () => {
  it('returns true for a typical phone number', () => {
    expect(isPhoneNumber('+1 800 555 0199')).toBe(true)
  })

  it('returns false for too short input', () => {
    expect(isPhoneNumber('123')).toBe(false)
  })
})

describe('isNonEmpty', () => {
  it('returns true for a non-empty string', () => {
    expect(isNonEmpty('hello')).toBe(true)
  })

  it('returns false for whitespace-only string', () => {
    expect(isNonEmpty('   ')).toBe(false)
  })
})

describe('isNumericString', () => {
  it('returns true for a string number', () => {
    expect(isNumericString('42')).toBe(true)
  })

  it('returns true for a decimal', () => {
    expect(isNumericString('3.14')).toBe(true)
  })

  it('returns false for a non-numeric string', () => {
    expect(isNumericString('abc')).toBe(false)
  })
})
