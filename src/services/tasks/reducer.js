import * as actionTypes from './action-types'
import { TASKS } from './constants'

export default (state, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_TASK:
      return { ...state, [TASKS]: [...state.tasks, payload.task] }
    default:
      return state
  }
}
