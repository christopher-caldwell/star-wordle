import { FC } from 'react'
import { styled } from '@mui/material'

import { topRowOfKeys, middleRowOfKeys, bottomRowOfKeys } from '@/features/keyboard/api'
import { KeyboardRow } from './components'

export const Keyboard: FC = () => {
  return (
    <Container>
      <InnerContainer>
        <KeyboardRow keys={topRowOfKeys} />
        <KeyboardRow keys={middleRowOfKeys} />
        <KeyboardRow keys={bottomRowOfKeys} />
      </InnerContainer>
    </Container>
  )
}

const InnerContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Container = styled('div')`
  display: flex;
  justify-content: center;
  width: 100vw;
  flex-grow: 1;
`
