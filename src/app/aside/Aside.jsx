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
import isMobileScreen from '../../utils/isMobileScreen'
import AsideUI from '../../ui/aside/Aside'

const Aside = () => {
  const { state, dispatch } = useContext(TasksContext)
  const selectedMenuOption = getSelectedMenuOption(state)
  const pendingTasks = getPendingTasks(state)
  const completedTasks = getCompletedTasks(state)
  const importantTasks = getImportantTasks(state)
  const isMenuOpen = getIsMenuOpen(state)

  const closeMenuInMobile = () =>
    isMobileScreen() && isMenuOpen && dispatch(setIsMenuOpen(false))

  const handleMenuOptionClick = selectedMenuOption => () => {
    dispatch(setMenuOption(selectedMenuOption))
    closeMenuInMobile()
  }

  const handleMenuIconClick = () => dispatch(setIsMenuOpen(!isMenuOpen))

  const handleClickOutside = () => closeMenuInMobile()

  return (
    <AsideUI
      selectedMenuOption={selectedMenuOption}
      pendingTasks={pendingTasks.length}
      completedTasksCount={completedTasks.length}
      importantTasksCount={importantTasks.length}
      isMenuOpen={isMenuOpen}
      onMenuOptionClick={handleMenuOptionClick}
      onMenuIconClick={handleMenuIconClick}
      onClickOutside={handleClickOutside}
    />
  )
}

export default Aside
