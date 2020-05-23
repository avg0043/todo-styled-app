import React from 'react'
import PropTypes from 'prop-types'
import { MainWrapper, SearcherWrapper } from './HeaderStyles'

const Header = ({ searcherValue, onSearcherChange }) => {
  return (
    <MainWrapper>
      <p>TO-DO App</p>
      <SearcherWrapper>
        <input type="text" value={searcherValue} onChange={onSearcherChange} />
      </SearcherWrapper>
      <p>Álvaro Vázquez</p>
    </MainWrapper>
  )
}

Header.propTypes = {
  searcherValue: PropTypes.string.isRequired,
  onSearcherChange: PropTypes.func.isRequired,
}

export default Header
