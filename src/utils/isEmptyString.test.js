import isEmptyString from './isEmptyString'

describe('Tests for the utils function isEmptyString', () => {
  test('simple quote is an empty string', () => {
    expect(isEmptyString('')).toBe(true)
  })

  test('a blank space is an empty string', () => {
    expect(isEmptyString(' ')).toBe(true)
  })

  test('a string with characters is not an empty string', () => {
    expect(isEmptyString('foo')).toBe(false)
  })
})
