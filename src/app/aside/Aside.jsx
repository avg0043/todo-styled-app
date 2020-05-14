import React, { useContext } from 'react'
import { TasksContext } from '../../TasksProvider'
import {
  getPendingTasks,
  getCompletedTasks,
  getSelectedMenuOption,
  setMenuOption,
} from '../../services/tasks'
import AsideUI from '../../ui/aside/Aside'

const Aside = () => {
  const { state, dispatch } = useContext(TasksContext)
  const pendingTasks = getPendingTasks(state)
  const completedTasks = getCompletedTasks(state)
  const selectedMenuOption = getSelectedMenuOption(state)

  const handleMenuOptionClick = selectedMenuOption => () =>
    dispatch(setMenuOption(selectedMenuOption))

  return (
    <AsideUI
      pendingTasks={pendingTasks.length}
      completedTasksCount={completedTasks.length}
      selectedMenuOption={selectedMenuOption}
      onMenuOptionClick={handleMenuOptionClick}
    />
  )
}

export default Aside
