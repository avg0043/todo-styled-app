import isMobileScreen from './isMobileScreen'

const mockWindowInnerWidth = width => {
  Object.defineProperty(window, 'innerWidth', {
    value: width,
  })
}

describe('Tests for the isMobileScreen utils', () => {
  test('width < 768 is a mobile screen', () => {
    mockWindowInnerWidth(450)
    expect(isMobileScreen()).toBe(true)
  })

  test('width 768 is not a mobile screen', () => {
    mockWindowInnerWidth(768)
    expect(isMobileScreen()).toBe(false)
  })

  test('width > 768 is not a mobile screen', () => {
    mockWindowInnerWidth(1024)
    expect(isMobileScreen()).toBe(false)
  })
})
