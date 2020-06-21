import styled, { css } from 'styled-components'
import { ReactComponent as TrashIcon } from '../../assets/icons/trash.svg'
import { ReactComponent as CheckboxIcon } from '../../assets/icons/checkbox.svg'
import { ReactComponent as CheckboxCheckedIcon } from '../../assets/icons/checkbox_checked.svg'
import { ReactComponent as StarIcon } from '../../assets/icons/star_big.svg'
import { ReactComponent as StarFilledIcon } from '../../assets/icons/star_big_filled.svg'

const checkboxStyle = css`
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
  margin-right: 0.6875rem;
  path {
    fill: #63b7af;
  }
`

export const MainWrapper = styled.section`
  grid-area: content;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;

  ${({ isMenuOpen }) =>
    isMenuOpen &&
    css`
      opacity: 0.5;
    `}

  @media (min-width: 768px) {
    opacity: 1;
  }
`

export const Header = styled.div`
  margin: 0.9375rem 0;
`

export const HeaderTitleWrapper = styled.div`
  font-size: 1.25rem;
  color: #63b7af;
  margin-bottom: 1.175rem;
  font-weight: 800;
`

export const HeaderTitleText = styled.p`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-x: hidden;
  width: 69vw;
`

export const HeaderNewTask = styled.div`
  display: flex;
  justify-content: space-between;
`

export const HeaderTaskName = styled.input`
  flex-grow: 1;
`

export const HeaderAdd = styled.button`
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
  &:disabled {
    pointer-events: none;
    background-color: rgba(214, 116, 99, 0.6);
  }
`

export const ItemActions = styled.div`
  display: flex;
  align-items: center;
`

export const TrashIconStyled = styled(TrashIcon)`
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
  path {
    fill: #bb3b0e;
  }
`

export const StarIconStyled = styled(StarIcon)`
  ${checkboxStyle}
`

export const StarFilledIconStyled = styled(StarFilledIcon)`
  ${checkboxStyle}
`

export const CheckboxIconStyled = styled(CheckboxIcon)`
  ${checkboxStyle}
`

export const CheckboxCheckedIconStyled = styled(CheckboxCheckedIcon)`
  ${checkboxStyle}
`

export const Body = styled.div`
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

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  min-height: 3.25rem;
`

export const ItemName = styled.div`
  display: flex;
  align-items: center;
`

export const ItemNameText = styled.p`
  overflow-wrap: break-word;
  word-wrap: break-word;
  width: 53vw;

  @media (min-width: 768px) {
    width: 72vw;
  }
`

export const InformativeMessageWrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 3.25rem;
  color: #63b7af;
`

export const InformativeMessageTitle = styled.p`
  font-style: oblique;
  margin-right: 0.3125rem;
`
