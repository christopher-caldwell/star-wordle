import { FC } from 'react'
import { styled } from '@mui/material'

import { LetterRow } from './components'

const rowArray = [1, 2, 3, 4, 5, 6]

export const Letters: FC = () => {
  return (
    <Container>
      <InnerContainer>
        {rowArray.map(() => (
          <LetterRow />
        ))}
      </InnerContainer>
    </Container>
  )
}

const InnerContainer = styled('div')`
  display: flex;
  flex-direction: column;
  max-width: 313px;
  max-height: 372px;
`
const Container = styled('div')`
  display: flex;
  justify-content: center;
  width: 100vw;
  margin-bottom: 10px;
`
