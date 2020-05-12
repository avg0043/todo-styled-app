import React from 'react'
import styled from 'styled-components'
import { ReactComponent as StarIcon } from '../../assets/icons/star.svg'
import { ReactComponent as TasksIcon } from '../../assets/icons/tasks.svg'

const MainWrapper = styled.aside`
  grid-area: aside;
  background: #d0cdcd7d;
  border-right: 0.0625rem solid #e5e5e5;
`

const List = styled.ul`
  margin: 0.625rem 1.5rem;
  list-style: none;
`

const ListItem = styled.div`
  display: flex;
  align-items: center;
`

const StarIconStyled = styled(StarIcon)`
  width: 0.9375rem;
  margin-right: 0.4375rem;
`

const TasksIconStyled = styled(TasksIcon)`
  width: 0.75rem;
  margin-right: 0.4375rem;
  margin-left: 0.125rem;
`

const Counter = styled.p`
  margin-left: auto;
`

const Aside = () => {
  return (
    <MainWrapper>
      <List>
        <li>
          <ListItem>
            <StarIconStyled />
            <p>Importante</p>
            <Counter>1</Counter>
          </ListItem>
        </li>
        <li>
          <ListItem>
            <TasksIconStyled />
            <p>Tareas</p>
            <Counter>3</Counter>
          </ListItem>
        </li>
      </List>
    </MainWrapper>
  )
}

export default Aside
