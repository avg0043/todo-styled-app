import React, { useContext } from 'react'
import { TasksContext } from './TasksProvider'
import Content from './app/content/Content'
import Aside from './app/aside/Aside'
import Header from './app/header/Header'
import { MainWrapper } from './AppStyles'
import { getIsMenuOpen } from './services/tasks'

const App = () => {
  const { state } = useContext(TasksContext)
  const isMenuOpen = getIsMenuOpen(state)

  return (
    <MainWrapper isMenuOpen={isMenuOpen}>
      <Header />
      <Aside />
      <Content />
    </MainWrapper>
  )
}

export default App
