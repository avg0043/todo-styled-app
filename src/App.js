import React from 'react'
import styled from 'styled-components'
import Content from './app/content/Content'
import Aside from './app/aside/Aside'
import Header from './ui/header/Header'

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
    <MainWrapper>
      <Header />
      <Aside />
      <Content />
    </MainWrapper>
  )
}

export default App
