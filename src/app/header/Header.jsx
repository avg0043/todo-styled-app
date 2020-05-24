import React, { useState, useContext } from 'react'
import { TasksContext } from '../../TasksProvider'
import {
  setSearcherValue as setSearcherValueAction,
  setMenuOption,
  getSelectedMenuOption,
} from '../../services/tasks'
import { NONE_MENU_OPTION } from '../../common/constants'
import HeaderUI from '../../ui/header/Header'

const Header = () => {
  const { state, dispatch } = useContext(TasksContext)
  const selectedMenuOption = getSelectedMenuOption(state)
  const [searcherValue, setSearcherValue] = useState('')

  const handleSearcherChange = event => {
    dispatch(setSearcherValueAction(event.target.value))
    if (selectedMenuOption !== NONE_MENU_OPTION)
      dispatch(setMenuOption(NONE_MENU_OPTION))
    setSearcherValue(event.target.value)
  }

  return (
    <HeaderUI
      searcherValue={searcherValue}
      onSearcherChange={handleSearcherChange}
    />
  )
}

export default Header
