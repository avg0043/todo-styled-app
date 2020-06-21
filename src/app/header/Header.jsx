import React, { useState, useContext } from 'react'
import { TasksContext } from '../../TasksProvider'
import {
  setSearcherValue as setSearcherValueAction,
  setMenuOption,
  getSelectedMenuOption,
} from '../../services/tasks'
import { NONE_MENU_OPTION, TASKS_MENU_OPTION } from '../../common/constants'
import isEmptyString from '../../utils/isEmptyString'
import HeaderUI from '../../ui/header/Header'

const Header = () => {
  const { state, dispatch } = useContext(TasksContext)
  const selectedMenuOption = getSelectedMenuOption(state)
  const [searcherValue, setSearcherValue] = useState('')

  const handleSearcherChange = event => {
    const newSearcherValue = event.target.value

    dispatch(setSearcherValueAction(newSearcherValue))

    if (isEmptyString(newSearcherValue))
      dispatch(setMenuOption(TASKS_MENU_OPTION))
    else if (selectedMenuOption !== NONE_MENU_OPTION)
      dispatch(setMenuOption(NONE_MENU_OPTION))

    setSearcherValue(newSearcherValue)
  }

  const handleRemoveSearcherValue = () => {
    dispatch(setSearcherValueAction(''))
    dispatch(setMenuOption(TASKS_MENU_OPTION))
    setSearcherValue('')
  }

  return (
    <HeaderUI
      searcherValue={searcherValue}
      onSearcherChange={handleSearcherChange}
      onRemoveSearcherValue={handleRemoveSearcherValue}
    />
  )
}

export default Header
