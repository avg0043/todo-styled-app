import React from 'react'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from './Header'
import renderWithProviders from '../../utils-tests/renderWithProviders'

describe('Tests for Header component', () => {
  test('the searcher shows a close icon after fill it', () => {
    renderWithProviders(<Header />)

    userEvent.type(screen.getByLabelText('searcher'), 'Task 1')

    expect(screen.getByTestId('closeIcon')).toBeVisible()
  })

  test('resets the searcher after click on close icon', () => {
    renderWithProviders(<Header />)

    userEvent.type(screen.getByLabelText('searcher'), 'Task 1')
    userEvent.click(screen.getByTestId('closeIcon'))

    expect(screen.getByLabelText('searcher')).toHaveValue('')
    expect(screen.queryByTestId('closeIcon')).not.toBeInTheDocument()
  })
})
