import styled, { css } from 'styled-components'

export const MainWrapper = styled.section`
  display: grid;
  grid-template-areas:
    'header header'
    'aside content';
  grid-template-columns: 3.125rem 1fr;
  grid-template-rows: 3.125rem 1fr;
  height: 100vh;

  @media (min-width: 768px) {
    grid-template-columns: 18.125rem 1fr;

    ${({ isMenuOpen }) =>
      !isMenuOpen &&
      css`
        grid-template-columns: 3.125rem 1fr;
      `}
  }
`
