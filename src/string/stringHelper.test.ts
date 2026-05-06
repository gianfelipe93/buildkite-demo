import { describe, it, expect } from 'vitest'
import { capitalize, truncate, camelToKebab, countWords, isPalindrome } from './stringHelper'

describe('capitalize', () => {
  it('capitalizes the first letter and lowercases the rest', () => {
    expect(capitalize('hELLO')).toBe('Hello')
  })

  it('handles empty string', () => {
    expect(capitalize('')).toBe('')
  })

  it('handles single character', () => {
    expect(capitalize('a')).toBe('A')
  })
})

describe('truncate', () => {
  it('truncates a string longer than the limit', () => {
    expect(truncate('Hello world', 5)).toBe('Hello...')
  })

  it('returns original string when within limit', () => {
    expect(truncate('Hi', 10)).toBe('Hi')
  })

  it('returns original string when exactly the limit', () => {
    expect(truncate('Hello', 5)).toBe('Hello')
  })
})

describe('camelToKebab', () => {
  it('converts camelCase to kebab-case', () => {
    expect(camelToKebab('helloWorld')).toBe('hello-world')
  })

  it('handles multiple humps', () => {
    expect(camelToKebab('myVariableName')).toBe('my-variable-name')
  })

  it('leaves already lowercase strings unchanged', () => {
    expect(camelToKebab('hello')).toBe('hello')
  })
})

describe('countWords', () => {
  it('counts words separated by spaces', () => {
    expect(countWords('hello world foo')).toBe(3)
  })

  it('returns 0 for an empty string', () => {
    expect(countWords('')).toBe(0)
  })

  it('handles multiple spaces between words', () => {
    expect(countWords('a  b  c')).toBe(3)
  })
})

describe('isPalindrome', () => {
  it('returns true for a palindrome', () => {
    expect(isPalindrome('racecar')).toBe(true)
  })

  it('ignores case and non-alphanumeric characters', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true)
  })

  it('returns false for a non-palindrome', () => {
    expect(isPalindrome('hello')).toBe(false)
  })
})
