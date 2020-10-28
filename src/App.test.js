import React from 'react'
import { screen } from '@testing-library/react'
import App from './App'
import renderWithProviders from './utils-tests/renderWithProviders'

test('checks the main title of the app', () => {
  renderWithProviders(<App />)
  expect(screen.getByText(/To Do/)).toBeVisible()
})
