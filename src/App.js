import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

const App = () => {
  return (
    <Wrapper>
      <Title>Hello World!</Title>
    </Wrapper>
  )
}

export default App
