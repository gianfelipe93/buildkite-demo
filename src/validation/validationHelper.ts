export function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export function isUrl(value: string): boolean {
  try {
    const url = new URL(value)
    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
}

export function isPhoneNumber(value: string): boolean {
  return /^\+?[\d\s\-().]{7,15}$/.test(value)
}

export function isNonEmpty(value: string): boolean {
  return value.trim().length > 0
}

export function isNumericString(value: string): boolean {
  return value.trim() !== '' && !isNaN(Number(value))
}
