import { FC } from 'react'
import { styled } from '@mui/material'

import { KeyboardKey } from '@/features/keyboard/api'
import { KeyboardButton } from './Button'

export const KeyboardRow: FC<Props> = ({ keys }) => {
  return (
    <Container>
      {keys.map(key => (
        <KeyboardButton key={typeof key.text === 'string' ? key.text : 'delete'} {...key} />
      ))}
    </Container>
  )
}

const Container = styled('div')`
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
  width: 100%;
`

interface Props {
  keys: KeyboardKey[]
}
