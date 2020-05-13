import React, { useReducer, createContext, useContext } from 'react'
import styled from 'styled-components'
import Header from './ui/header/Header'
import Aside from './ui/aside/Aside'
import Content from './ui/content/Content'

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, { name: 'Task 1' }] }
    default:
      return state
  }
}

const TasksContext = createContext()

const initialState = { tasks: [] }

const TasksContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <TasksContext.Provider value={{ state, dispatch }}>
      {children}
    </TasksContext.Provider>
  )
}

const TestComponent = () => {
  const { state, dispatch } = useContext(TasksContext)
  console.log(state)
  return (
    <>
      <p>Test component</p>
      <button onClick={() => dispatch({ type: 'ADD_TASK' })}>+</button>
    </>
  )
}

const MainWrapper = styled.section`
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-areas:
    'header header'
    'aside content';
  grid-template-columns: 15.625rem auto;
  grid-template-rows: 3.125rem auto;
`

const App = () => {
  return (
    <TasksContextProvider>
      <MainWrapper>
        <TestComponent />
        <Header />
        <Aside />
        <Content />
      </MainWrapper>
    </TasksContextProvider>
  )
}

export default App
