import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { ReactComponent as StarIcon } from '../../assets/icons/star.svg'
import { ReactComponent as ListIcon } from '../../assets/icons/list.svg'
import { ReactComponent as CompletedIcon } from '../../assets/icons/completed.svg'

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
`

const StarIconStyled = styled(StarIcon)`
  width: 0.9375rem;
  height: 1.0625rem;
  margin-right: 0.4375rem;
`

const ListIconStyled = styled(ListIcon)`
  width: 0.9375rem;
  height: 0.9375rem;
  margin-right: 0.4375rem;
`

const CompletedIconStyled = styled(CompletedIcon)`
  width: 0.9375rem;
  height: 0.9375rem;
  margin-right: 0.4375rem;
`

const Counter = styled.p`
  margin-left: auto;
`

const Aside = ({ tasksCount, completedTasksCount }) => {
  return (
    <MainWrapper>
      <List>
        <li>
          <ListItem>
            <StarIconStyled />
            <p>Important</p>
            <Counter>0</Counter>
          </ListItem>
        </li>
        <li>
          <ListItem>
            <ListIconStyled />
            <p>Tasks</p>
            <Counter>{tasksCount}</Counter>
          </ListItem>
        </li>
        <li>
          <ListItem>
            <CompletedIconStyled />
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
}

export default Aside
