import styled, { css } from 'styled-components'

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

export const MainWrapper = styled.aside`
  grid-area: aside;
  background: #d0cdcd7d;
  border-right: 0.0625rem solid #e5e5e5;
`

export const List = styled.ul`
  margin: 0.625rem 1rem;
  list-style: none;
  line-height: 2.5rem;
`

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  ${({ name, selectedMenuOption }) =>
    name === selectedMenuOption &&
    css`
      color: #63b7af;
      font-weight: 700;
    `}
`

export const StarIconStyled = styled(StarIcon)`
  width: 0.9375rem;
  height: 1.0625rem;
  margin-right: 0.4375rem;
  ${({ name, selected_menu_option }) =>
    isIconSelected(name, selected_menu_option)}
`

export const ListIconStyled = styled(ListIcon)`
  width: 0.9375rem;
  height: 0.9375rem;
  margin-right: 0.4375rem;
  ${({ name, selected_menu_option }) =>
    isIconSelected(name, selected_menu_option)}
`

export const CompletedIconStyled = styled(CompletedIcon)`
  width: 0.9375rem;
  height: 0.9375rem;
  margin-right: 0.4375rem;
  ${({ name, selected_menu_option }) =>
    isIconSelected(name, selected_menu_option)}
`

export const Counter = styled.p`
  margin-left: auto;
`
