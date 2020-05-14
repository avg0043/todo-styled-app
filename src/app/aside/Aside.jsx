import React, { useContext } from 'react'
import { TasksContext } from '../../TasksProvider'
import { getTasks, getCompletedTasks } from '../../services/tasks'
import AsideUI from '../../ui/aside/Aside'

const Aside = () => {
  const { state } = useContext(TasksContext)
  const tasks = getTasks(state)
  const completedTasks = getCompletedTasks(state)

  return (
    <AsideUI
      tasksCount={tasks.length}
      completedTasksCount={completedTasks.length}
    />
  )
}

export default Aside
