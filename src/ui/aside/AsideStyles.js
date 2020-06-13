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

    @media (min-width: 768px) {
      margin-right: 0.4375rem;
    }
  `

export const MainWrapper = styled.aside`
  grid-area: aside;
  background: #d0cdcd7d;
  border-right: 0.0625rem solid #e5e5e5;
`

export const List = styled.ul`
  list-style: none;
  line-height: 2.5rem;
  padding: 0.625rem 1rem;
`

export const ListItem = styled.div`
  cursor: pointer;

  ${({ name, selectedMenuOption }) =>
    name === selectedMenuOption &&
    css`
      color: #63b7af;
      font-weight: 700;
    `}

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const ItemTitleWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
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
  display: none;

  @media (min-width: 768px) {
    display: block;
    margin-left: auto;
  }
`

export const ItemTitle = styled.p`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`
