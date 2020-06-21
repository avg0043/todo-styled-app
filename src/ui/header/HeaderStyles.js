import styled from 'styled-components'
import { ReactComponent as UserIcon } from '../../assets/icons/user.svg'
import { ReactComponent as SearcherIcon } from '../../assets/icons/searcher.svg'
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg'

export const MainWrapper = styled.header`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background: #63b7af;
  padding: 0 0.625rem;
`

export const SearcherWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 0.3;
  width: 57vw;
  padding: 0.5rem;
  padding-left: 0.8rem;
  background: white;
  border-radius: 0.1875rem;

  @media (min-width: 768px) {
    width: 23vw;
  }
`
export const SearcherValue = styled.input`
  flex-grow: 1;
  width: 100%;
`

export const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const UserTitle = styled.p`
  display: none;

  @media (min-width: 768px) {
    display: block;
    margin-right: 0.875rem;
  }
`

export const UserIconStyled = styled(UserIcon)`
  width: 1.5375rem;
  height: 1.5375rem;
`

export const SearcherIconStyled = styled(SearcherIcon)`
  width: 0.9375rem;
  height: 0.9375rem;
  margin-right: 0.625rem;
  path {
    fill: #63b7af;
  }
`

export const CloseIconStyled = styled(CloseIcon)`
  width: 0.6375rem;
  height: 0.6375rem;
  margin-left: 0.625rem;
  cursor: pointer;
  path {
    fill: #63b7af;
  }
`
