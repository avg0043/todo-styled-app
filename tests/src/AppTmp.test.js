import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders main title', () => {
  const { getByText } = render(<App />)
  const title = getByText(/hello world/i)
  expect(title).toBeInTheDocument()
})
