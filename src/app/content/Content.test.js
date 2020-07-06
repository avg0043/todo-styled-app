import React from 'react'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Content from './Content'
import renderWithProviders from '../../utils-tests/renderWithProviders'

const addNewTask = taskName => {
  userEvent.type(screen.getByLabelText('addTask'), 'Task 1')
  userEvent.click(screen.getByRole('button', { name: /add task/i }))
}

describe('Tests for Content component', () => {
  test('the add task button gets enable after type a new task', () => {
    renderWithProviders(<Content />)

    userEvent.type(screen.getByLabelText('addTask'), 'Task 1')

    expect(screen.getByRole('button', { name: /add task/i })).toBeEnabled()
  })

  test('adds a new task', () => {
    renderWithProviders(<Content />)
    const taskName = 'Task 1'

    addNewTask(taskName)

    expect(screen.getByText(taskName)).toBeVisible()
  })

  test('removes a task', () => {
    renderWithProviders(<Content />)
    const taskName = 'Task 1'

    addNewTask(taskName)
    userEvent.click(screen.getByTestId('trashIcon'))

    expect(screen.queryByText(taskName)).not.toBeInTheDocument()
  })

  test('marks a task as completed and checks that informative message is showed', () => {
    renderWithProviders(<Content />)
    const taskName = 'Task 1'

    addNewTask(taskName)
    userEvent.click(screen.getByTestId('checkboxIcon'))

    expect(screen.queryByText(taskName)).not.toBeInTheDocument()
    expect(
      screen.getByText('The task has been moved to the "Completed" section'),
    ).toBeVisible()
  })

  test('marks a task as important and checks that filled star icon is showed', () => {
    renderWithProviders(<Content />)
    const taskName = 'Task 1'

    addNewTask(taskName)
    userEvent.click(screen.getByTestId('starIcon'))

    expect(screen.getByText(taskName)).toBeVisible()
    expect(screen.getByTestId('starFilledIcon')).toBeVisible()
  })
})
