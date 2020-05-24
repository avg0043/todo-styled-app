import React from 'react'
import Content from './app/content/Content'
import Aside from './app/aside/Aside'
import Header from './app/header/Header'
import { MainWrapper } from './AppStyles'

const App = () => {
  return (
    <MainWrapper>
      <Header />
      <Aside />
      <Content />
    </MainWrapper>
  )
}

export default App
