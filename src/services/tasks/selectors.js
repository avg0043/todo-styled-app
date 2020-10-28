import * as R from 'ramda'
import {
  TASKS,
  MENU_SELECTED_OPTION,
  SEARCHER_VALUE,
  IS_MENU_OPEN,
} from './constants'
import isEmptyString from '../../utils/isEmptyString'

const removeAccents = text =>
  text.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

const getLowerUnaccentString = text => R.pipe(R.toLower, removeAccents)(text)

export const getSelectedMenuOption = state => state[MENU_SELECTED_OPTION]

export const getSearcherValue = state => state[SEARCHER_VALUE] || ''

export const getIsMenuOpen = state => state[IS_MENU_OPEN]

export const getPendingTasks = state =>
  state[TASKS].filter(({ completed }) => !completed)

export const getCompletedTasks = state =>
  state[TASKS].filter(({ completed }) => completed)

export const getImportantTasks = state =>
  state[TASKS].filter(({ important }) => important)

export const getSearcherTasks = state => {
  const searcherValue = R.pipe(getSearcherValue, getLowerUnaccentString)(state)
  return (
    !isEmptyString(searcherValue) &&
    state[TASKS].filter(({ name }) =>
      getLowerUnaccentString(name).includes(searcherValue),
    )
  )
}
