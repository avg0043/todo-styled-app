import React, { useState, useContext, useEffect } from 'react'
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

  useEffect(() => {
    if (
      selectedMenuOption !== NONE_MENU_OPTION &&
      !isEmptyString(searcherValue)
    ) {
      setSearcherValue('')
      dispatch(setSearcherValueAction(''))
    }
  }, [dispatch, searcherValue, selectedMenuOption])

  const resetSearcherAndMenu = () => {
    setSearcherValue('')
    dispatch(setSearcherValueAction(''))
    dispatch(setMenuOption(TASKS_MENU_OPTION))
  }

  const handleSearcherChange = event => {
    const newSearcherValue = event.target.value

    setSearcherValue(newSearcherValue)
    dispatch(setSearcherValueAction(newSearcherValue))

    if (isEmptyString(newSearcherValue))
      dispatch(setMenuOption(TASKS_MENU_OPTION))
    else if (selectedMenuOption !== NONE_MENU_OPTION)
      dispatch(setMenuOption(NONE_MENU_OPTION))
  }

  return (
    <HeaderUI
      searcherValue={searcherValue}
      onSearcherChange={handleSearcherChange}
      onRemoveSearcherValue={resetSearcherAndMenu}
      onTitleClick={resetSearcherAndMenu}
    />
  )
}

export default Header
