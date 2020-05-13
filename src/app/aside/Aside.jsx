import React, { useContext } from 'react'
import { TasksContext } from '../../TasksProvider'
import { getTasks } from '../../services/tasks'
import AsideUI from '../../ui/aside/Aside'

const Aside = () => {
  const { state } = useContext(TasksContext)
  const tasks = getTasks(state)

  return <AsideUI tasksCount={tasks.length} />
}

export default Aside
