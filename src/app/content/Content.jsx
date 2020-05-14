import React, { useContext, useState } from 'react'
import { TasksContext } from '../../TasksProvider'
import {
  addTask,
  getPendingTasks,
  removeTask,
  markCompletedTask,
  getCompletedTasks,
  getSelectedMenuOption,
} from '../../services/tasks'
import { COMPLETED_MENU_OPTION } from '../../common/constants'
import ContentUI from '../../ui/content/Content'

const Content = () => {
  const { state, dispatch } = useContext(TasksContext)
  const selectedMenuOption = getSelectedMenuOption(state)
  const pendingTasks = getPendingTasks(state)
  const completedTasks = getCompletedTasks(state)
  const [taskName, setTaskName] = useState('')

  const handleTaskNameChange = event => setTaskName(event.target.value)

  const handleRemoveTask = taskId => () => dispatch(removeTask(taskId))

  const handleTaskChecked = (taskId, checked) => () =>
    dispatch(markCompletedTask(taskId, checked))

  const handleFormSubmit = event => {
    dispatch(addTask({ name: taskName }))
    setTaskName('')
    event.preventDefault()
  }

  return (
    <ContentUI
      tasks={
        selectedMenuOption === COMPLETED_MENU_OPTION
          ? completedTasks
          : pendingTasks
      }
      taskName={taskName}
      headerTitle={
        selectedMenuOption === COMPLETED_MENU_OPTION ? 'Completed' : 'Tasks'
      }
      showAddTask={!(selectedMenuOption === COMPLETED_MENU_OPTION)}
      onTaskNameChange={handleTaskNameChange}
      onTaskRemove={handleRemoveTask}
      onTaskChecked={handleTaskChecked}
      onFormSubmit={handleFormSubmit}
    />
  )
}

export default Content
