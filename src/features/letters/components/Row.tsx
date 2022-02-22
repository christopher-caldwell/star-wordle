import { FC } from 'react'
import { styled } from '@mui/material'

import { LetterBox } from '@/store'
import { Box } from './Box'

export const LetterRow: FC<Props> = ({ letterConfig, rowNumber }) => {
  return (
    <Row>
      {letterConfig.map((letterBox, index) => (
        <Box key={`${rowNumber}-${index + 1}`} {...letterBox} />
      ))}
    </Row>
  )
}

interface Props {
  letterConfig: LetterBox[]
  rowNumber: number
}

const Row = styled('div')`
  display: flex;
  justify-content: space-between;
`
