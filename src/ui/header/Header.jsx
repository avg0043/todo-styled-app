import React from 'react'
import PropTypes from 'prop-types'
import {
  MainWrapper,
  SearcherWrapper,
  SearcherValue,
  UserInfoWrapper,
  UserTitle,
  UserIconStyled,
  SearcherIconStyled,
  CloseIconStyled,
} from './HeaderStyles'

const Header = ({ searcherValue, onSearcherChange, onRemoveSearcherValue }) => {
  return (
    <MainWrapper>
      <p>To Do</p>
      <SearcherWrapper>
        <SearcherIconStyled />
        <SearcherValue
          type="text"
          value={searcherValue}
          placeholder="Search any task..."
          onChange={onSearcherChange}
        />
        {searcherValue && <CloseIconStyled onClick={onRemoveSearcherValue} />}
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
  onRemoveSearcherValue: PropTypes.func.isRequired,
}

export default Header
