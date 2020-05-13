import React, { useContext } from 'react'
import styled from 'styled-components'
import { TasksContext } from '../../TasksProvider'
import { addTask, getTasks } from '../../services/tasks'
import { useState } from 'react'

const MainWrapper = styled.section`
  grid-area: content;
  margin: 0 1.5rem;
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  margin: 0.9375rem 0;
`

const HeaderTitle = styled.div`
  font-size: 1.25rem;
  color: #3e69e4;
  margin-bottom: 1.175rem;
`

const HeaderNewTask = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const HeaderAdd = styled.button`
  background: #3e69e4;
  font-size: white;
  color: white;
  padding: 0.4375rem;
  border-radius: 0.5rem;
  cursor: pointer;
`

const Body = styled.div`
  height: 100%;
  background: linear-gradient(
    180deg,
    white,
    white 3.25rem,
    #dedede 3.25rem,
    #dedede 3.25rem
  );
  background-size: 100% 3.3125rem;
  box-shadow: inset 0 0.0625rem 0 0 #dedede;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  min-height: 3.25rem;
`

const Content = () => {
  const { state, dispatch } = useContext(TasksContext)
  const tasks = getTasks(state)
  const [taskName, setTaskName] = useState('')

  const handleTaskNameChange = event => setTaskName(event.target.value)

  const handleAddTaskClick = () => dispatch(addTask({ name: taskName }))

  return (
    <MainWrapper>
      <Header>
        <HeaderTitle>
          <p>Tasks</p>
        </HeaderTitle>
        <HeaderNewTask>
          <input
            type="text"
            value={taskName}
            placeholder="Type your new task"
            onChange={handleTaskNameChange}
          />
          <HeaderAdd onClick={handleAddTaskClick}>Add task</HeaderAdd>
        </HeaderNewTask>
      </Header>
      <Body>
        {tasks.map(({ name }, index) => (
          <Item key={index}>
            <p>[X]</p> {/* TODO: checkbox icon */}
            <p>{name}</p>
          </Item>
        ))}
      </Body>
    </MainWrapper>
  )
}

export default Content
