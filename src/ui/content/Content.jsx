import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
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

const Content = ({
  tasks,
  taskName,
  onTaskNameChange,
  onTaskRemove,
  onTaskChecked,
  onFormSubmit,
}) => {
  return (
    <MainWrapper>
      <Header>
        <HeaderTitle>
          <p>Tasks</p>
        </HeaderTitle>
        <form onSubmit={onFormSubmit}>
          <HeaderNewTask>
            <input
              type="text"
              value={taskName}
              placeholder="Type your new task"
              onChange={onTaskNameChange}
            />
            <HeaderAdd>Add task</HeaderAdd>
          </HeaderNewTask>
        </form>
      </Header>
      <Body>
        {tasks.map(({ id, name, completed }) => (
          <Item key={id}>
            <ItemName>
              <input
                type="checkbox"
                value={completed}
                onChange={onTaskChecked(id)}
              />
              <p>{name}</p>
            </ItemName>
            <TrashIconStyled onClick={onTaskRemove(id)} />
          </Item>
        ))}
      </Body>
    </MainWrapper>
  )
}

Content.propTypes = {
  tasks: PropTypes.array.isRequired,
  taskName: PropTypes.string.isRequired,
  onTaskNameChange: PropTypes.func.isRequired,
  onTaskRemove: PropTypes.func.isRequired,
  onTaskChecked: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
}

export default Content
