import React, { useState, useContext } from 'react'
import { TasksContext } from '../../TasksProvider'
import { setSearcherValue as setSearcherValueAction } from '../../services/tasks'
import HeaderUI from '../../ui/header/Header'

const Header = () => {
  const { dispatch } = useContext(TasksContext)
  const [searcherValue, setSearcherValue] = useState('')

  const handleSearcherChange = event => {
    dispatch(setSearcherValueAction(event.target.value))
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
