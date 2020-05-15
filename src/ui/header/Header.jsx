import React from 'react'
import { MainWrapper, SearcherWrapper } from './HeaderStyles'

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
