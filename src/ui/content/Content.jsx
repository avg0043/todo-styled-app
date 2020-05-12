import React from 'react'
import styled from 'styled-components'

const MainWrapper = styled.section`
  grid-area: content;
  margin: 0 1.5rem;
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  font-size: 1.25rem;
  color: #3e69e4;
  margin: 15px 0px;
`

const Body = styled.div`
  height: 100%;
  background: linear-gradient(
    180deg,
    white,
    white 3.25rem,
    #e5e5e5 3.25rem,
    #e5e5e5 3.25rem
  );
  background-size: 100% 3.3125rem;
  box-shadow: inset 0 0.0625rem 0 0 #e5e5e5;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  min-height: 3.25rem;
`

const Content = () => {
  return (
    <MainWrapper>
      <Header>
        <p>Tareas</p>
      </Header>
      <Body>
        <Item>
          <p>X</p> {/* TODO: checkbox icon */}
          <p>Comprar</p>
        </Item>
      </Body>
    </MainWrapper>
  )
}

export default Content
