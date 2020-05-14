import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import {
  IMPORTANT_MENU_OPTION,
  TASKS_MENU_OPTION,
  COMPLETED_MENU_OPTION,
} from '../../common/constants'
import { ReactComponent as StarIcon } from '../../assets/icons/star.svg'
import { ReactComponent as ListIcon } from '../../assets/icons/list.svg'
import { ReactComponent as CompletedIcon } from '../../assets/icons/completed.svg'

const isIconSelected = (name, selected_menu_option) =>
  name === selected_menu_option &&
  css`
    path {
      fill: blue;
    }
  `

const MainWrapper = styled.aside`
  grid-area: aside;
  background: #d0cdcd7d;
  border-right: 0.0625rem solid #e5e5e5;
`

const List = styled.ul`
  margin: 0.625rem 1rem;
  list-style: none;
  line-height: 2.5rem;
`

const ListItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  ${({ name, selectedMenuOption }) =>
    name === selectedMenuOption &&
    css`
      color: #3e69e4;
      font-weight: 500;
    `}
`

const StarIconStyled = styled(StarIcon)`
  width: 0.9375rem;
  height: 1.0625rem;
  margin-right: 0.4375rem;
  ${({ name, selected_menu_option }) =>
    isIconSelected(name, selected_menu_option)}
`

const ListIconStyled = styled(ListIcon)`
  width: 0.9375rem;
  height: 0.9375rem;
  margin-right: 0.4375rem;
  ${({ name, selected_menu_option }) =>
    isIconSelected(name, selected_menu_option)}
`

const CompletedIconStyled = styled(CompletedIcon)`
  width: 0.9375rem;
  height: 0.9375rem;
  margin-right: 0.4375rem;
  ${({ name, selected_menu_option }) =>
    isIconSelected(name, selected_menu_option)}
`

const Counter = styled.p`
  margin-left: auto;
`

const Aside = ({
  tasksCount,
  completedTasksCount,
  selectedMenuOption,
  onMenuOptionClick,
}) => {
  return (
    <MainWrapper>
      <List>
        <li>
          <ListItem
            name={IMPORTANT_MENU_OPTION}
            selectedMenuOption={selectedMenuOption}
            onClick={onMenuOptionClick(IMPORTANT_MENU_OPTION)}
          >
            <StarIconStyled
              name={IMPORTANT_MENU_OPTION}
              selected_menu_option={selectedMenuOption}
            />
            <p>Important</p>
            <Counter>0</Counter>
          </ListItem>
        </li>
        <li>
          <ListItem
            name={TASKS_MENU_OPTION}
            selectedMenuOption={selectedMenuOption}
            onClick={onMenuOptionClick(TASKS_MENU_OPTION)}
          >
            <ListIconStyled
              name={TASKS_MENU_OPTION}
              selected_menu_option={selectedMenuOption}
            />
            <p>Tasks</p>
            <Counter>{tasksCount}</Counter>
          </ListItem>
        </li>
        <li>
          <ListItem
            name={COMPLETED_MENU_OPTION}
            selectedMenuOption={selectedMenuOption}
            onClick={onMenuOptionClick(COMPLETED_MENU_OPTION)}
          >
            <CompletedIconStyled
              name={COMPLETED_MENU_OPTION}
              selected_menu_option={selectedMenuOption}
            />
            <p>Completed</p>
            <Counter>{completedTasksCount}</Counter>
          </ListItem>
        </li>
      </List>
    </MainWrapper>
  )
}

Aside.propTypes = {
  tasksCount: PropTypes.number.isRequired,
  completedTasksCount: PropTypes.number.isRequired,
  selectedMenuOption: PropTypes.string.isRequired,
  onMenuOptionClick: PropTypes.func.isRequired,
}

export default Aside
