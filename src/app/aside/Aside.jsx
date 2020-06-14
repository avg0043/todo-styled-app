import React, { useContext } from 'react'
import { TasksContext } from '../../TasksProvider'
import {
  getPendingTasks,
  getCompletedTasks,
  getSelectedMenuOption,
  setMenuOption,
  getImportantTasks,
  setIsMenuOpen,
  getIsMenuOpen,
} from '../../services/tasks'
import AsideUI from '../../ui/aside/Aside'

const Aside = () => {
  const { state, dispatch } = useContext(TasksContext)
  const selectedMenuOption = getSelectedMenuOption(state)
  const pendingTasks = getPendingTasks(state)
  const completedTasks = getCompletedTasks(state)
  const importantTasks = getImportantTasks(state)
  const isMenuOpen = getIsMenuOpen(state)

  const handleMenuOptionClick = selectedMenuOption => () =>
    dispatch(setMenuOption(selectedMenuOption))

  const handleMenuIconClick = () => dispatch(setIsMenuOpen(!isMenuOpen))

  return (
    <AsideUI
      selectedMenuOption={selectedMenuOption}
      pendingTasks={pendingTasks.length}
      completedTasksCount={completedTasks.length}
      importantTasksCount={importantTasks.length}
      isMenuOpen={isMenuOpen}
      onMenuOptionClick={handleMenuOptionClick}
      onMenuIconClick={handleMenuIconClick}
    />
  )
}

export default Aside
