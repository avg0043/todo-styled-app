import { TASKS } from './constants'

export const getTasks = state => state[TASKS]

export const getCompletedTasks = state =>
  state[TASKS].filter(({ completed }) => completed)
