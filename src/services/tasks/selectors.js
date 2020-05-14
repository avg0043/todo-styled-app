import { TASKS, MENU_SELECTED_OPTION } from './constants'

export const getTasks = state => state[TASKS]

export const getCompletedTasks = state =>
  state[TASKS].filter(({ completed }) => completed)

export const getSelectedMenuOption = state => state[MENU_SELECTED_OPTION]
