import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Emoji from '../emoji/Emoji'
import {
  MainWrapper,
  Header,
  HeaderTitle,
  HeaderNewTask,
  HeaderAdd,
  Body,
  Item,
  ItemName,
  CheckboxCheckedIconStyled,
  CheckboxIconStyled,
  ItemActions,
  StarFilledIconStyled,
  StarIconStyled,
  TrashIconStyled,
  InformativeMessageWrapper,
  InformativeMessageTitle,
} from './ContentStyles'

const Content = ({
  tasks,
  taskName,
  headerTitle,
  showAddTask,
  isTasksMenuOptionSelected,
  onTaskNameChange,
  onTaskRemoveClick,
  onTaskCompleteClick,
  onTaskImportantClick,
  onFormSubmit,
}) => {
  const [showInformativeMsg, setShowInformativeMsg] = useState(false)

  const handleTaskChecked = (taskId, checked) => () => {
    onTaskCompleteClick(taskId, checked)
    if (checked) {
      setShowInformativeMsg(true)
      setTimeout(() => setShowInformativeMsg(false), 2000)
    }
  }

  return (
    <MainWrapper>
      <Header>
        <HeaderTitle>
          <p>{headerTitle}</p>
        </HeaderTitle>
        {showAddTask && (
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
        )}
      </Header>
      <Body>
        {tasks.map(({ id, name, completed, important }) => (
          <Item key={id}>
            <ItemName>
              {completed ? (
                <CheckboxCheckedIconStyled
                  onClick={handleTaskChecked(id, false)}
                />
              ) : (
                <CheckboxIconStyled onClick={handleTaskChecked(id, true)} />
              )}
              <p>{name}</p>
            </ItemName>
            <ItemActions>
              {important ? (
                <StarFilledIconStyled
                  onClick={onTaskImportantClick(id, false)}
                />
              ) : (
                <StarIconStyled onClick={onTaskImportantClick(id, true)} />
              )}
              <TrashIconStyled onClick={onTaskRemoveClick(id)} />
            </ItemActions>
          </Item>
        ))}
        {showInformativeMsg && isTasksMenuOptionSelected && (
          <>
            <InformativeMessageWrapper>
              <InformativeMessageTitle>
                The task has been moved to the "Completed" section
              </InformativeMessageTitle>
              <Emoji label="sheep" symbol="😊" />
            </InformativeMessageWrapper>
          </>
        )}
      </Body>
    </MainWrapper>
  )
}

Content.propTypes = {
  tasks: PropTypes.array.isRequired,
  taskName: PropTypes.string.isRequired,
  headerTitle: PropTypes.string.isRequired,
  showAddTask: PropTypes.bool.isRequired,
  isTasksMenuOptionSelected: PropTypes.bool.isRequired,
  onTaskNameChange: PropTypes.func.isRequired,
  onTaskRemoveClick: PropTypes.func.isRequired,
  onTaskCompleteClick: PropTypes.func.isRequired,
  onTaskImportantClick: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
}

export default Content
