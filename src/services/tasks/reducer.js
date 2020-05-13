import * as R from 'ramda'
import * as actionTypes from './action-types'
import { TASKS } from './constants'

export default (state, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_TASK:
      return R.assocPath([TASKS], [...state[TASKS], payload.task], state)
    default:
      return state
  }
}
