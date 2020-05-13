import React, { useReducer, createContext, useMemo } from 'react'
import PropTypes from 'prop-types'
import { reducer } from './services/tasks'
import { TASKS } from './services/tasks/constants'

const TasksContext = createContext()

const TasksContextProvider = ({ children }) => {
  const initialState = { [TASKS]: [] }
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
