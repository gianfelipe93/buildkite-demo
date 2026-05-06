import { describe, it, expect } from 'vitest'
import { parseQueryString, buildQueryString, getPathSegments, isAbsoluteUrl, joinPaths } from './urlHelper'

describe('parseQueryString', () => {
  it('parses a query string into an object', () => {
    expect(parseQueryString('foo=1&bar=hello')).toEqual({ foo: '1', bar: 'hello' })
  })

  it('handles a leading question mark', () => {
    expect(parseQueryString('?a=1&b=2')).toEqual({ a: '1', b: '2' })
  })
})

describe('buildQueryString', () => {
  it('builds a query string from an object', () => {
    expect(buildQueryString({ page: '1', limit: '10' })).toBe('page=1&limit=10')
  })
})

describe('getPathSegments', () => {
  it('returns path segments from a URL', () => {
    expect(getPathSegments('https://example.com/a/b/c')).toEqual(['a', 'b', 'c'])
  })

  it('returns an empty array for root path', () => {
    expect(getPathSegments('https://example.com/')).toEqual([])
  })
})

describe('isAbsoluteUrl', () => {
  it('returns true for http URLs', () => {
    expect(isAbsoluteUrl('https://example.com')).toBe(true)
  })

  it('returns false for relative paths', () => {
    expect(isAbsoluteUrl('/about')).toBe(false)
  })
})

describe('joinPaths', () => {
  it('joins path segments without double slashes', () => {
    expect(joinPaths('https://example.com', 'api', 'users')).toBe('https://example.com/api/users')
  })

  it('handles trailing and leading slashes', () => {
    expect(joinPaths('/foo/', '/bar/', '/baz')).toBe('/foo/bar/baz')
  })
})
