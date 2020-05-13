import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { TasksContext } from '../../TasksProvider'
import { addTask, getTasks, removeTask } from '../../services/tasks'
import { ReactComponent as TrashIcon } from '../../assets/icons/trash.svg'

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

const TrashIconStyled = styled(TrashIcon)`
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
  path {
    fill: #bb0404;
  }
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
  justify-content: space-between;
  min-height: 3.25rem;
`

const ItemName = styled.div`
  display: flex;
`

const Content = () => {
  const { state, dispatch } = useContext(TasksContext)
  const tasks = getTasks(state)
  const [taskName, setTaskName] = useState('')

  const handleTaskNameChange = event => setTaskName(event.target.value)

  const handleRemoveTask = taskId => () => dispatch(removeTask(taskId))

  const handleFormSubmit = event => {
    dispatch(addTask({ name: taskName }))
    setTaskName('')
    event.preventDefault()
  }

  return (
    <MainWrapper>
      <Header>
        <HeaderTitle>
          <p>Tasks</p>
        </HeaderTitle>
        <form onSubmit={handleFormSubmit}>
          <HeaderNewTask>
            <input
              type="text"
              value={taskName}
              placeholder="Type your new task"
              onChange={handleTaskNameChange}
            />
            <HeaderAdd>Add task</HeaderAdd>
          </HeaderNewTask>
        </form>
      </Header>
      <Body>
        {tasks.map(({ id, name }) => (
          <Item key={id}>
            <ItemName>
              <input type="checkbox" />
              <p>{name}</p>
            </ItemName>
            <TrashIconStyled onClick={handleRemoveTask(id)} />
          </Item>
        ))}
      </Body>
    </MainWrapper>
  )
}

export default Content
