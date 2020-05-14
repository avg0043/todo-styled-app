import * as R from 'ramda'
import { v4 as uuid } from 'uuid'
import * as actionTypes from './action-types'
import { TASKS } from './constants'

export default (state, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_TASK: {
      const newTask = { id: uuid(), ...payload.task }
      return R.assocPath([TASKS], [...state[TASKS], newTask], state)
    }

    case actionTypes.REMOVE_TASK: {
      const newTasks = state[TASKS].filter(({ id }) => id !== payload.id)
      return R.assocPath([TASKS], newTasks, state)
    }

    case actionTypes.MARK_COMPLETED_TASK: {
      const newTasks = state[TASKS].map(task =>
        task.id === payload.id
          ? { ...task, completed: payload.isCompleted }
          : task,
      )
      return R.assocPath([TASKS], newTasks, state)
    }

    default: {
      return state
    }
  }
}
