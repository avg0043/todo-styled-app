import * as actionTypes from './action-types'

export const addTask = task => ({
  type: actionTypes.ADD_TASK,
  payload: { task },
})

export const removeTask = taskId => ({
  type: actionTypes.REMOVE_TASK,
  payload: { taskId },
})

export const markCompletedTask = (taskId, isCompleted) => ({
  type: actionTypes.MARK_COMPLETED_TASK,
  payload: { taskId, isCompleted },
})

export const markImportantTask = (taskId, isImportant) => ({
  type: actionTypes.MARK_IMPORTANT_TASK,
  payload: { taskId, isImportant },
})

export const setMenuOption = menuOption => ({
  type: actionTypes.SET_MENU_OPTION,
  payload: { menuOption },
})

export const setSearcherValue = searcherValue => ({
  type: actionTypes.SET_SEARCHER_VALUE,
  payload: { searcherValue },
})

export const setIsMenuOpen = isMenuOpen => ({
  type: actionTypes.SET_IS_MENU_OPEN,
  payload: { isMenuOpen },
})
