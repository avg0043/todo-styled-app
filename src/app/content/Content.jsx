import React, { useContext, useState } from 'react'
import { TasksContext } from '../../TasksProvider'
import {
  addTask,
  getPendingTasks,
  removeTask,
  markCompletedTask,
  markImportantTask,
  getCompletedTasks,
  getSelectedMenuOption,
  getImportantTasks,
  getSearcherValue,
  getSearcherTasks,
  getIsMenuOpen,
} from '../../services/tasks'
import {
  COMPLETED_MENU_OPTION,
  IMPORTANT_MENU_OPTION,
  TASKS_MENU_OPTION,
} from '../../common/constants'
import isEmptyString from '../../utils/isEmptyString'
import ContentUI from '../../ui/content/Content'

const Content = () => {
  const { state, dispatch } = useContext(TasksContext)
  const selectedMenuOption = getSelectedMenuOption(state)
  const searcherValue = getSearcherValue(state)
  const pendingTasks = getPendingTasks(state)
  const completedTasks = getCompletedTasks(state)
  const importantTasks = getImportantTasks(state)
  const searcherTasks = getSearcherTasks(state)
  const isMenuOpen = getIsMenuOpen(state)
  const [taskName, setTaskName] = useState('')

  const handleTaskNameChange = event => setTaskName(event.target.value)

  const handleRemoveTaskClick = taskId => () => dispatch(removeTask(taskId))

  const handleTaskCompleteClick = (taskId, isChecked) =>
    dispatch(markCompletedTask(taskId, isChecked))

  const handleTaskImportantClick = (taskId, isImportant) => () =>
    dispatch(markImportantTask(taskId, isImportant))

  const handleFormSubmit = event => {
    dispatch(addTask({ name: taskName }))
    setTaskName('')
    event.preventDefault()
  }

  const getTasksToShow = () =>
    !isEmptyString(searcherValue)
      ? searcherTasks
      : selectedMenuOption === COMPLETED_MENU_OPTION
      ? completedTasks
      : selectedMenuOption === IMPORTANT_MENU_OPTION
      ? importantTasks
      : pendingTasks

  const getHeaderTitle = () =>
    !isEmptyString(searcherValue)
      ? `Searching "${searcherValue}"`
      : selectedMenuOption === COMPLETED_MENU_OPTION
      ? 'Completed'
      : selectedMenuOption === IMPORTANT_MENU_OPTION
      ? 'Important'
      : 'Tasks'

  const showAddTaskOption = () =>
    isEmptyString(searcherValue) &&
    ![COMPLETED_MENU_OPTION, IMPORTANT_MENU_OPTION].includes(selectedMenuOption)

  return (
    <ContentUI
      tasks={getTasksToShow()}
      taskName={taskName}
      headerTitle={getHeaderTitle()}
      showAddTask={showAddTaskOption()}
      isTasksMenuOptionSelected={selectedMenuOption === TASKS_MENU_OPTION}
      isMenuOpen={isMenuOpen}
      onTaskNameChange={handleTaskNameChange}
      onTaskRemoveClick={handleRemoveTaskClick}
      onTaskCompleteClick={handleTaskCompleteClick}
      onTaskImportantClick={handleTaskImportantClick}
      onFormSubmit={handleFormSubmit}
    />
  )
}

export default Content
