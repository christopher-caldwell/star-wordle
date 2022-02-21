import { FC } from 'react'
import { styled } from '@mui/material'

import { Box } from './Box'

const columnArray = [1, 2, 3, 4, 5]

export const LetterRow: FC = () => {
  return (
    <Row>
      {columnArray.map(columnNumber => (
        <Box key={columnNumber} />
      ))}
    </Row>
  )
}

const Row = styled('div')`
  display: flex;
  justify-content: space-between;
`
