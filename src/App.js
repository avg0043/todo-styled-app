import React from 'react'
import styled from 'styled-components'
import Header from './ui/header/Header'
import { ReactComponent as StarIcon } from './assets/icons/star.svg'
import { ReactComponent as TasksIcon } from './assets/icons/tasks.svg'

const MainWrapper = styled.section`
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-areas:
    'header header'
    'aside content';
  grid-template-columns: 250px auto;
  grid-template-rows: 50px auto;
`

const Aside = styled.aside`
  grid-area: aside;
  background: #d0cdcd7d;
  border-right: 1px solid #e5e5e5;
`

const Ul = styled.ul`
  margin: 10px 24px;
  list-style: none;
`

const ListItem = styled.div`
  display: flex;
  align-items: center;
`

const StarIconStyled = styled(StarIcon)`
  width: 15px;
  margin-right: 7px;
`

const TasksIconStyled = styled(TasksIcon)`
  width: 12px;
  margin-right: 7px;
  margin-left: 2px;
`

const Counter = styled.p`
  margin-left: auto;
`

const Content = styled.section`
  grid-area: content;
  margin: 0 24px;
  display: flex;
  flex-direction: column;
  // background: linear-gradient(
  //   180deg,
  //   white,
  //   white 52px,
  //   #e5e5e5 52px,
  //   #e5e5e5 52px
  // );
  // background-size: 100% 53px;
  // box-shadow: inset 0 1px 0 0 #e5e5e5;
`

const HeaderContent = styled.div`
  font-size: 20px;
  color: #3e69e4;
  margin: 15px 0px;
`

const TasksList = styled.div`
  // grid-area: content;
  // margin: 0 24px;
  height: 100%;
  background: linear-gradient(
    180deg,
    white,
    white 52px,
    #e5e5e5 52px,
    #e5e5e5 52px
  );
  background-size: 100% 53px;
  box-shadow: inset 0 1px 0 0 #e5e5e5;
  // height: 100%;
  // overflow: hidden;
`

const TaskItem = styled.div`
  display: flex;
  align-items: center;
  min-height: 52px;
`

const App = () => {
  return (
    <MainWrapper>
      <Header />
      <Aside>
        <Ul>
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
        </Ul>
      </Aside>
      <Content>
        <HeaderContent>
          <p>Tareas</p>
        </HeaderContent>
        {/* <AddContent>
          <p>Agregar una tarea</p>
        </AddContent> */}
        <TasksList>
          <TaskItem>
            <p>X</p> {/* Checkbox icon */}
            <p>Comprar</p>
          </TaskItem>
        </TasksList>
      </Content>
    </MainWrapper>
  )
}

export default App
