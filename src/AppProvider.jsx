import React from 'react'
import PropTypes from 'prop-types'
import { TasksContextProvider } from './TasksProvider'

const AppProvider = ({ children }) => {
  return <TasksContextProvider>{children}</TasksContextProvider>
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppProvider
