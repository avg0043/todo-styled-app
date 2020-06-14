import styled, { css } from 'styled-components'

import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg'
import { ReactComponent as StarIcon } from '../../assets/icons/star.svg'
import { ReactComponent as ListIcon } from '../../assets/icons/list.svg'
import { ReactComponent as CompletedIcon } from '../../assets/icons/completed.svg'

const isIconSelected = (name, selected_menu_option) =>
  name === selected_menu_option &&
  css`
    path {
      fill: #63b7af;
    }
  `

const commonIconStyles = () =>
  css`
    width: 0.9375rem;
    margin-right: 0.4375rem;
    padding: 0.3rem;
  `

const commonListItemTextsStyles = () =>
  css`
    ${({ isOpen }) =>
      !isOpen &&
      css`
        display: none;
      `}

    @media (min-width: 768px) {
      display: block;

      ${({ isOpen }) =>
        !isOpen &&
        css`
          display: none;
        `}
    }
  `

export const MainWrapper = styled.aside`
  grid-area: aside;
  border-right: 0.0625rem solid #e5e5e5;
  background: #e6e4e4;

  ${({ isOpen }) =>
    isOpen &&
    css`
      position: relative;
      width: 16.5rem;
    `}

  @media (min-width: 768px) {
    position: inherit;
    width: inherit;
  }
`

export const List = styled.ul`
  padding: 0.625rem 1rem 0 0.6875rem;
  list-style: none;
`

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.9375rem;
  cursor: pointer;

  ${({ name, selectedMenuOption }) =>
    name === selectedMenuOption &&
    css`
      color: #63b7af;
      font-weight: 700;
    `}
`

export const ItemTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const MenuIconStyled = styled(MenuIcon)`
  height: 1.1625rem;
  width: 1.9375rem;
  padding: 1.025rem 0 0.5rem 0.5rem;
  cursor: pointer;
  path {
    fill: #63b7af;
  }
`

export const StarIconStyled = styled(StarIcon)`
  ${commonIconStyles()}
  height: 1.0625rem;

  ${({ name, selected_menu_option }) =>
    isIconSelected(name, selected_menu_option)}
`

export const ListIconStyled = styled(ListIcon)`
  ${commonIconStyles()}
  width: 0.9375rem;
  height: 0.9375rem;

  ${({ name, selected_menu_option }) =>
    isIconSelected(name, selected_menu_option)}
`

export const CompletedIconStyled = styled(CompletedIcon)`
  ${commonIconStyles()}
  width: 0.9375rem;
  height: 0.9375rem;

  ${({ name, selected_menu_option }) =>
    isIconSelected(name, selected_menu_option)}
`

export const Counter = styled.p`
  ${commonListItemTextsStyles()}
`

export const ItemTitle = styled.p`
  ${commonListItemTextsStyles()}
`
