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

export const setMenuOption = menuOption => ({
  type: actionTypes.SET_MENU_OPTION,
  payload: { menuOption },
})
