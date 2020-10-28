import React from 'react'
import { render } from '@testing-library/react'
import AppProvider from '../AppProvider'

const renderWithProviders = component =>
  render(<AppProvider>{component}</AppProvider>)

export default renderWithProviders
