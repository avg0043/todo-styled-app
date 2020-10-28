import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { useClickAway } from 'react-use'
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
  isMenuOpen,
  onMenuOptionClick,
  onMenuIconClick,
  onClickOutside,
}) => {
  const mainWrapperRef = useRef(null)

  useClickAway(mainWrapperRef, () => onClickOutside())

  return (
    <MainWrapper isMenuOpen={isMenuOpen} ref={mainWrapperRef}>
      <MenuIconStyled onClick={onMenuIconClick} />
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
              <ItemTitle isMenuOpen={isMenuOpen}>Important</ItemTitle>
            </ItemTitleWrapper>
            <Counter isMenuOpen={isMenuOpen}>{importantTasksCount}</Counter>
          </ListItem>
        </li>
        <li>
          <ListItem
            name={TASKS_MENU_OPTION}
            selectedMenuOption={selectedMenuOption}
            onClick={onMenuOptionClick(TASKS_MENU_OPTION)}
          >
            <ItemTitleWrapper>
              <ListIconStyled
                name={TASKS_MENU_OPTION}
                selected_menu_option={selectedMenuOption}
              />
              <ItemTitle isMenuOpen={isMenuOpen}>Tasks</ItemTitle>
            </ItemTitleWrapper>
            <Counter isMenuOpen={isMenuOpen}>{pendingTasks}</Counter>
          </ListItem>
        </li>
        <li>
          <ListItem
            name={COMPLETED_MENU_OPTION}
            selectedMenuOption={selectedMenuOption}
            onClick={onMenuOptionClick(COMPLETED_MENU_OPTION)}
          >
            <ItemTitleWrapper>
              <CompletedIconStyled
                name={COMPLETED_MENU_OPTION}
                selected_menu_option={selectedMenuOption}
              />
              <ItemTitle isMenuOpen={isMenuOpen}>Completed</ItemTitle>
            </ItemTitleWrapper>
            <Counter isMenuOpen={isMenuOpen}>{completedTasksCount}</Counter>
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
  isMenuOpen: PropTypes.bool.isRequired,
  onMenuOptionClick: PropTypes.func.isRequired,
  onMenuIconClick: PropTypes.func.isRequired,
  onClickOutside: PropTypes.func.isRequired,
}

export default Aside
