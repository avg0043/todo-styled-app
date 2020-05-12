import React from 'react'
import styled from 'styled-components'
import Header from './ui/header/Header'
import Aside from './ui/aside/Aside'
import Content from './ui/content/Content'

const MainWrapper = styled.section`
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-areas:
    'header header'
    'aside content';
  grid-template-columns: 15.625rem auto;
  grid-template-rows: 3.125rem auto;
`

// const Content = styled.section`
//   grid-area: content;
//   margin: 0 24px;
//   display: flex;
//   flex-direction: column;
//   // background: linear-gradient(
//   //   180deg,
//   //   white,
//   //   white 52px,
//   //   #e5e5e5 52px,
//   //   #e5e5e5 52px
//   // );
//   // background-size: 100% 53px;
//   // box-shadow: inset 0 1px 0 0 #e5e5e5;
// `

// const HeaderContent = styled.div`
//   font-size: 20px;
//   color: #3e69e4;
//   margin: 15px 0px;
// `

// const TasksList = styled.div`
//   // grid-area: content;
//   // margin: 0 24px;
//   height: 100%;
//   background: linear-gradient(
//     180deg,
//     white,
//     white 52px,
//     #e5e5e5 52px,
//     #e5e5e5 52px
//   );
//   background-size: 100% 53px;
//   box-shadow: inset 0 1px 0 0 #e5e5e5;
//   // height: 100%;
//   // overflow: hidden;
// `

// const TaskItem = styled.div`
//   display: flex;
//   align-items: center;
//   min-height: 52px;
// `

const App = () => {
  return (
    <MainWrapper>
      <Header />
      <Aside />
      <Content />
    </MainWrapper>
  )
}

export default App
