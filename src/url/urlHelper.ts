export function parseQueryString(query: string): Record<string, string> {
  const params = new URLSearchParams(query.startsWith('?') ? query.slice(1) : query)
  return Object.fromEntries(params.entries())
}

export function buildQueryString(params: Record<string, string>): string {
  return new URLSearchParams(params).toString()
}

export function getPathSegments(url: string): string[] {
  return new URL(url).pathname.split('/').filter(Boolean)
}

export function isAbsoluteUrl(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

export function joinPaths(...parts: string[]): string {
  return parts
    .map((p, i) => (i === 0 ? p.replace(/\/+$/, '') : p.replace(/^\/+|\/+$/g, '')))
    .filter(Boolean)
    .join('/')
}
