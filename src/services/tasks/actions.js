import * as actionTypes from './action-types'

export const addTask = task => ({
  type: actionTypes.ADD_TASK,
  payload: { task },
})

export const removeTask = id => ({
  type: actionTypes.REMOVE_TASK,
  payload: { id },
})

export const markCompletedTask = (id, isCompleted) => ({
  type: actionTypes.MARK_COMPLETED_TASK,
  payload: { id, isCompleted },
})

export const markImportantTask = (id, isImportant) => ({
  type: actionTypes.MARK_IMPORTANT_TASK,
  payload: { id, isImportant },
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
