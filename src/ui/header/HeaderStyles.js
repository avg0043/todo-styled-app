import styled from 'styled-components'
import { ReactComponent as UserIcon } from '../../assets/icons/user.svg'
import { ReactComponent as SearcherIcon } from '../../assets/icons/searcher.svg'

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
  padding: 0.5rem;
  padding-left: 0.8rem;
  background: white;
  border-radius: 0.1875rem;
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
