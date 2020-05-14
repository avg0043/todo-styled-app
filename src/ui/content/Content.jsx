import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { ReactComponent as TrashIcon } from '../../assets/icons/trash.svg'
import { ReactComponent as CheckboxIcon } from '../../assets/icons/checkbox.svg'
import { ReactComponent as CheckboxCheckedIcon } from '../../assets/icons/checkbox_checked.svg'
import { ReactComponent as StarIcon } from '../../assets/icons/star_big.svg'
import { ReactComponent as StarFilledIcon } from '../../assets/icons/star_big_filled.svg'

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
  color: #63b7af;
  margin-bottom: 1.175rem;
  font-weight: 800;
`

const HeaderNewTask = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const HeaderAdd = styled.button`
  background: #ee8572;
  font-size: 0.625rem;
  font-weight: 700;
  color: white;
  padding: 0.625rem;
  border-radius: 0.25rem;
  cursor: pointer;
  text-transform: uppercase;
  &:hover {
    background: #d67463;
  }
`

const ItemActions = styled.div`
  display: flex;
  align-items: center;
`

const TrashIconStyled = styled(TrashIcon)`
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
  path {
    fill: #bb3b0e;
  }
`

const checkboxStyle = css`
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
  margin-right: 0.6875rem;
  path {
    fill: #63b7af;
  }
`

const StarIconStyled = styled(StarIcon)`
  ${checkboxStyle}
`

const StarFilledIconStyled = styled(StarFilledIcon)`
  ${checkboxStyle}
`

const CheckboxIconStyled = styled(CheckboxIcon)`
  ${checkboxStyle}
`

const CheckboxCheckedIconStyled = styled(CheckboxCheckedIcon)`
  ${checkboxStyle}
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
  align-items: center;
`

const Content = ({
  tasks,
  taskName,
  headerTitle,
  showAddTask,
  onTaskNameChange,
  onTaskRemove,
  onTaskChecked,
  onTaskImportantClick,
  onFormSubmit,
}) => {
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
                <CheckboxCheckedIconStyled onClick={onTaskChecked(id, false)} />
              ) : (
                <CheckboxIconStyled onClick={onTaskChecked(id, true)} />
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
              <TrashIconStyled onClick={onTaskRemove(id)} />
            </ItemActions>
          </Item>
        ))}
      </Body>
    </MainWrapper>
  )
}

Content.propTypes = {
  tasks: PropTypes.array.isRequired,
  taskName: PropTypes.string.isRequired,
  headerTitle: PropTypes.string.isRequired,
  showAddTask: PropTypes.bool.isRequired,
  onTaskNameChange: PropTypes.func.isRequired,
  onTaskRemove: PropTypes.func.isRequired,
  onTaskChecked: PropTypes.func.isRequired,
  onTaskImportantClick: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
}

export default Content
