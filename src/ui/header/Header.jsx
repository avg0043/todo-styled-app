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
  Title,
} from './HeaderStyles'

const Header = ({
  searcherValue,
  onSearcherChange,
  onRemoveSearcherValue,
  onTitleClick,
}) => {
  return (
    <MainWrapper>
      <Title onClick={onTitleClick}>To Do</Title>
      <SearcherWrapper>
        <SearcherIconStyled />
        <SearcherValue
          aria-label="searcher"
          type="text"
          value={searcherValue}
          placeholder="Search any task..."
          onChange={onSearcherChange}
        />
        {searcherValue && (
          <CloseIconStyled
            data-testid="closeIcon"
            onClick={onRemoveSearcherValue}
          />
        )}
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
  onTitleClick: PropTypes.func.isRequired,
}

export default Header
