import React, { useReducer, createContext, useMemo } from 'react'
import PropTypes from 'prop-types'
import { reducer } from './services/tasks'
import { TASKS, MENU_SELECTED_OPTION } from './services/tasks/constants'
import { TASKS_MENU_OPTION } from './common/constants'

const TasksContext = createContext()

const TasksContextProvider = ({ children }) => {
  const initialState = {
    [TASKS]: [],
    [MENU_SELECTED_OPTION]: TASKS_MENU_OPTION,
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch])

  return (
    <TasksContext.Provider value={contextValue}>
      {children}
    </TasksContext.Provider>
  )
}

TasksContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { TasksContextProvider, TasksContext }
