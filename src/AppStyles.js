import styled from 'styled-components'

export const MainWrapper = styled.section`
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-areas:
    'header header'
    'aside content';
  grid-template-columns: 3.125rem auto;
  grid-template-rows: 3.125rem auto;

  @media (min-width: 768px) {
    grid-template-columns: 15.625rem auto;
  }
`
