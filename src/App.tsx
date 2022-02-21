import { FC } from 'react'
import { styled } from '@mui/material'

import Header from '@/components/header'
import { Letters } from '@/features/letters'
import { Keyboard } from '@/features/keyboard'

const App: FC = () => {
  return (
    <Root>
      <Header />
      <MainContainer>
        <Letters />
        <Keyboard />
      </MainContainer>
    </Root>
  )
}

const MainContainer = styled('main')`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`
const Root = styled('div')`
  padding-top: 60px;
  display: flex;
  height: 100vh;
`

export default App
