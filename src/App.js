import React, { useReducer } from 'react'
import styled from 'styled-components'
import Header from './ui/header/Header'
import Aside from './ui/aside/Aside'
import Content from './ui/content/Content'

const initialState = { tasks: [] }

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, { name: 'Task 1' }] }
    default:
      throw new Error()
  }
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
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state)
  return (
    <MainWrapper>
      <button onClick={() => dispatch({ type: 'ADD_TASK' })}>+</button>
      <Header />
      <Aside />
      <Content />
    </MainWrapper>
  )
}

export default App
