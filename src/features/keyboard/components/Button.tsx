import { FC } from 'react'
import { styled } from '@mui/material'

import { KeyboardKey, useSendKeyboardInput } from '../api'

export const KeyboardButton: FC<Props> = ({ text, width, isBlank }) => {
  const { sendInput } = useSendKeyboardInput()
  if (isBlank) return <BlankButton />
  return (
    <Button onClick={() => sendInput(text)} width={width}>
      {text}
    </Button>
  )
}

interface ButtonProps {
  width: KeyboardKey['width']
}
const Button = styled('button')<ButtonProps>`
  flex: ${({ width }) => width};
  /* flex: 1; */
  margin: 0 2px;
  height: 10vh;
  background-color: ${({ theme }) =>
    theme.palette.mode === 'dark' ? theme.palette.grey[600] : theme.palette.grey[300]};
  color: ${({ theme }) => theme.palette.text.primary};
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  border: none;
`

/** UI trickery to create the spacing in the middle keyboard row */
const BlankButton = styled('div')`
  flex: 1;
`

interface Props extends KeyboardKey {}
