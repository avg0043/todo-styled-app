import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.header`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background: #0078d7;
  padding: 0 10px;
`

const SearcherWrapper = styled.div`
  padding: 8px;
  padding-right: 64px;
  padding-left: 20px;
  background: white;
  border-radius: 3px;
`

const Header = () => {
  return (
    <Wrapper>
      <p>To Do</p>
      <SearcherWrapper>
        <input />
      </SearcherWrapper>
      <p>Avatar icon</p>
    </Wrapper>
  )
}

export default Header
