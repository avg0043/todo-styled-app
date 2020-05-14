import React, { useContext } from 'react'
import { TasksContext } from '../../TasksProvider'
import {
  getTasks,
  getCompletedTasks,
  getSelectedMenuOption,
  setMenuOption,
} from '../../services/tasks'
import AsideUI from '../../ui/aside/Aside'

const Aside = () => {
  const { state, dispatch } = useContext(TasksContext)
  const tasks = getTasks(state)
  const completedTasks = getCompletedTasks(state)
  const selectedMenuOption = getSelectedMenuOption(state)

  const handleMenuOptionClick = selectedMenuOption => () =>
    dispatch(setMenuOption(selectedMenuOption))

  return (
    <AsideUI
      tasksCount={tasks.length}
      completedTasksCount={completedTasks.length}
      selectedMenuOption={selectedMenuOption}
      onMenuOptionClick={handleMenuOptionClick}
    />
  )
}

export default Aside
