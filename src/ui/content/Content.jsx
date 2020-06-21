import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Emoji from '../emoji/Emoji'
import isEmptyString from '../../utils/isEmptyString'
import {
  MainWrapper,
  Header,
  HeaderTitleWrapper,
  HeaderTitleText,
  HeaderNewTask,
  HeaderAdd,
  HeaderTaskName,
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
  ItemNameText,
} from './ContentStyles'

const Content = ({
  tasks,
  taskName,
  headerTitle,
  showAddTask,
  isTasksMenuOptionSelected,
  isMenuOpen,
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
    <MainWrapper isMenuOpen={isMenuOpen}>
      <Header>
        <HeaderTitleWrapper>
          <HeaderTitleText>{headerTitle}</HeaderTitleText>
        </HeaderTitleWrapper>
        {showAddTask && (
          <form onSubmit={onFormSubmit}>
            <HeaderNewTask>
              <HeaderTaskName
                type="text"
                value={taskName}
                placeholder="Type your new task"
                onChange={onTaskNameChange}
              />
              <HeaderAdd disabled={isEmptyString(taskName)}>Add task</HeaderAdd>
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
              <ItemNameText>{name}</ItemNameText>
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
  isMenuOpen: PropTypes.bool.isRequired,
  onTaskNameChange: PropTypes.func.isRequired,
  onTaskRemoveClick: PropTypes.func.isRequired,
  onTaskCompleteClick: PropTypes.func.isRequired,
  onTaskImportantClick: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
}

export default Content
