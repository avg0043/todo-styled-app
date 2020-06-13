import React, { useState } from 'react'
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
  MenuIconStyled,
  ItemTitleWrapper,
} from './AsideStyles'

const Aside = ({
  selectedMenuOption,
  pendingTasks,
  completedTasksCount,
  importantTasksCount,
  onMenuOptionClick,
}) => {
  const [isOpen, setIsOpen] = useState(true)

  const handleMenuIconClick = () => setIsOpen(!isOpen)

  return (
    <MainWrapper>
      <MenuIconStyled onClick={handleMenuIconClick} />
      <List>
        <li>
          <ListItem
            name={IMPORTANT_MENU_OPTION}
            selectedMenuOption={selectedMenuOption}
            onClick={onMenuOptionClick(IMPORTANT_MENU_OPTION)}
          >
            <ItemTitleWrapper>
              <StarIconStyled
                name={IMPORTANT_MENU_OPTION}
                selected_menu_option={selectedMenuOption}
              />
              <ItemTitle>Important</ItemTitle>
            </ItemTitleWrapper>
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
