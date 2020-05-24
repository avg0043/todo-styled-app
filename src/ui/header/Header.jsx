import React from 'react'
import PropTypes from 'prop-types'
import {
  MainWrapper,
  SearcherWrapper,
  UserInfoWrapper,
  UserTitle,
  UserIconStyled,
} from './HeaderStyles'

const Header = ({ searcherValue, onSearcherChange }) => {
  return (
    <MainWrapper>
      <p>To Do</p>
      <SearcherWrapper>
        <input type="text" value={searcherValue} onChange={onSearcherChange} />
      </SearcherWrapper>
      <UserInfoWrapper>
        <UserTitle>Álvaro Vázquez</UserTitle>
        <UserIconStyled />
      </UserInfoWrapper>
    </MainWrapper>
  )
}

Header.propTypes = {
  searcherValue: PropTypes.string.isRequired,
  onSearcherChange: PropTypes.func.isRequired,
}

export default Header
