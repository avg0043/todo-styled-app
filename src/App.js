import React from 'react'
import styled from 'styled-components'
import Header from './ui/header/Header'
import { ReactComponent as StarIcon } from './assets/icons/star.svg'

const MainWrapper = styled.section`
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-areas:
    'header header'
    'aside content';
  grid-template-columns: 250px auto;
  grid-template-rows: 50px auto;
`

const Aside = styled.aside`
  grid-area: aside;
  border-right: 1px solid #c3c2c2;
`

const Ul = styled.ul`
  margin: 10px 24px;
  list-style: none;
`

const ImportantItem = styled.div`
  display: flex;
  align-items: center;
`

const StarIconStyled = styled(StarIcon)`
  width: 15px;
  margin-right: 7px;
`

const Content = styled.section`
  grid-area: content;
  margin: 0 24px;
  background: linear-gradient(
    180deg,
    white,
    white 52px,
    #e5e5e5 52px,
    #e5e5e5 52px
  );
  background-size: 100% 53px;
  box-shadow: inset 0 1px 0 0 #e5e5e5;
`

const App = () => {
  return (
    <MainWrapper>
      <Header />
      <Aside>
        <Ul>
          <li>
            <ImportantItem>
              <StarIconStyled />
              <p>Importante</p>
            </ImportantItem>
          </li>
          <li>Tareas</li>
        </Ul>
      </Aside>
      <Content />
    </MainWrapper>
  )
}

export default App
