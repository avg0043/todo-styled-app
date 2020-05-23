import { TASKS, MENU_SELECTED_OPTION, SEARCHER_VALUE } from './constants'

export const getPendingTasks = state =>
  state[TASKS].filter(({ completed }) => !completed)

export const getCompletedTasks = state =>
  state[TASKS].filter(({ completed }) => completed)

export const getImportantTasks = state =>
  state[TASKS].filter(({ important }) => important)

export const getSelectedMenuOption = state => state[MENU_SELECTED_OPTION]

export const getSearcherValue = state => state[SEARCHER_VALUE]
