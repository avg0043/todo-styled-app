import * as actionTypes from './action-types'

export const addTask = task => ({
  type: actionTypes.ADD_TASK,
  payload: { task },
})
