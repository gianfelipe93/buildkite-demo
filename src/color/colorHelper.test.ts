import { describe, it, expect } from 'vitest'
import { hexToRgb, rgbToHex, isValidHex, lighten, getContrastColor } from './colorHelper'

describe('hexToRgb', () => {
  it('converts a hex string to RGB', () => {
    expect(hexToRgb('#ff0000')).toEqual({ r: 255, g: 0, b: 0 })
  })

  it('returns null for an invalid hex', () => {
    expect(hexToRgb('not-a-color')).toBeNull()
  })
})

describe('rgbToHex', () => {
  it('converts RGB values to hex', () => {
    expect(rgbToHex(255, 0, 0)).toBe('#ff0000')
  })

  it('pads single digit hex values', () => {
    expect(rgbToHex(0, 0, 0)).toBe('#000000')
  })
})

describe('isValidHex', () => {
  it('returns true for a 6-digit hex', () => {
    expect(isValidHex('#a1b2c3')).toBe(true)
  })

  it('returns true for a 3-digit hex', () => {
    expect(isValidHex('#fff')).toBe(true)
  })

  it('returns false for an invalid string', () => {
    expect(isValidHex('red')).toBe(false)
  })
})

describe('lighten', () => {
  it('lightens a color towards white', () => {
    const lightened = hexToRgb(lighten('#000000', 0.5))
    expect(lightened?.r).toBeGreaterThan(0)
  })

  it('returns the input unchanged for an invalid hex', () => {
    expect(lighten('invalid', 0.5)).toBe('invalid')
  })
})

describe('getContrastColor', () => {
  it('returns black for a light background', () => {
    expect(getContrastColor('#ffffff')).toBe('black')
  })

  it('returns white for a dark background', () => {
    expect(getContrastColor('#000000')).toBe('white')
  })
})
