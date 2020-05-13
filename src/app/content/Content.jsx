import React, { useContext, useState } from 'react'
import { TasksContext } from '../../TasksProvider'
import { addTask, getTasks, removeTask } from '../../services/tasks'
import ContentUI from '../../ui/content/Content'

const Content = () => {
  const { state, dispatch } = useContext(TasksContext)
  const tasks = getTasks(state)
  const [taskName, setTaskName] = useState('')

  const handleTaskNameChange = event => setTaskName(event.target.value)

  const handleRemoveTask = taskId => () => dispatch(removeTask(taskId))

  const handleFormSubmit = event => {
    dispatch(addTask({ name: taskName }))
    setTaskName('')
    event.preventDefault()
  }

  return (
    <ContentUI
      tasks={tasks}
      taskName={taskName}
      onTaskNameChange={handleTaskNameChange}
      onTaskRemove={handleRemoveTask}
      onFormSubmit={handleFormSubmit}
    />
  )
}

export default Content
