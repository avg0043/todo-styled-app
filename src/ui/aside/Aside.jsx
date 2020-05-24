import React from 'react'
import PropTypes from 'prop-types'
import {
  IMPORTANT_MENU_OPTION,
  TASKS_MENU_OPTION,
  COMPLETED_MENU_OPTION,
} from '../../common/constants'
import {
  MainWrapper,
  List,
  ListItem,
  StarIconStyled,
  Counter,
  ListIconStyled,
  CompletedIconStyled,
  ItemTitle,
} from './AsideStyles'

const Aside = ({
  selectedMenuOption,
  pendingTasks,
  completedTasksCount,
  importantTasksCount,
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
            <ItemTitle>Important</ItemTitle>
            <Counter>{importantTasksCount}</Counter>
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
            <ItemTitle>Tasks</ItemTitle>
            <Counter>{pendingTasks}</Counter>
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
            <ItemTitle>Completed</ItemTitle>
            <Counter>{completedTasksCount}</Counter>
          </ListItem>
        </li>
      </List>
    </MainWrapper>
  )
}

Aside.propTypes = {
  selectedMenuOption: PropTypes.string.isRequired,
  pendingTasks: PropTypes.number.isRequired,
  completedTasksCount: PropTypes.number.isRequired,
  importantTasksCount: PropTypes.number.isRequired,
  onMenuOptionClick: PropTypes.func.isRequired,
}

export default Aside
