import { FC } from 'react'
import { styled } from '@mui/material'
import { useRecoilValue } from 'recoil'

import { lettersAtom } from '@/store'
import { LetterRow } from './components'

export const Letters: FC = () => {
  const letters = useRecoilValue(lettersAtom)
  console.log('letters', letters)
  return (
    <Container>
      <InnerContainer>
        {letters.map((letterConfig, index) => (
          <LetterRow key={index} rowNumber={index + 1} letterConfig={letterConfig} />
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
