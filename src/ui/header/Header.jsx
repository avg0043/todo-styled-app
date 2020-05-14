import React from 'react'
import styled from 'styled-components'

const MainWrapper = styled.header`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background: #63b7af;
  padding: 0 0.625rem;
`

const SearcherWrapper = styled.div`
  padding: 0.5rem;
  padding-right: 4rem;
  padding-left: 1.25rem;
  background: white;
  border-radius: 0.1875rem;
`

const Header = () => {
  return (
    <MainWrapper>
      <p>TO-DO App</p>
      <SearcherWrapper>
        <input />
      </SearcherWrapper>
      <p>Álvaro Vázquez</p>
    </MainWrapper>
  )
}

export default Header
