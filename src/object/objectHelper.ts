export function pick<T extends object>(obj: T, keys: (keyof T)[]): Partial<T> {
  return keys.reduce((acc, key) => {
    if (key in obj) acc[key] = obj[key]
    return acc
  }, {} as Partial<T>)
}

export function omit<T extends object>(obj: T, keys: (keyof T)[]): Partial<T> {
  return (Object.keys(obj) as (keyof T)[]).reduce((acc, key) => {
    if (!keys.includes(key)) acc[key] = obj[key]
    return acc
  }, {} as Partial<T>)
}

export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj))
}

export function isEmpty(obj: object): boolean {
  return Object.keys(obj).length === 0
}

export function mapValues<T, U>(
  obj: Record<string, T>,
  fn: (value: T) => U,
): Record<string, U> {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, fn(v)]))
}
