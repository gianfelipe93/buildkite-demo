export function factorial(n: number): number {
  if (n < 0) throw new RangeError('factorial is not defined for negative numbers')
  return n <= 1 ? 1 : n * factorial(n - 1)
}

export function fibonacci(n: number): number {
  if (n < 0) throw new RangeError('fibonacci is not defined for negative numbers')
  if (n <= 1) return n
  let a = 0, b = 1
  for (let i = 2; i <= n; i++) {
    ;[a, b] = [b, a + b]
  }
  return b
}

export function isPrime(n: number): boolean {
  if (n < 2) return false
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false
  }
  return true
}

export function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b)
}

export function lcm(a: number, b: number): number {
  return (a * b) / gcd(a, b)
}
