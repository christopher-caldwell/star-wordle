import { FC } from 'react'
import { styled } from '@mui/material'

import { KeyboardKey } from '../api'

export const KeyboardButton: FC<Props> = ({ text, width }) => {
  return <Button width={width}>{text}</Button>
}

interface ButtonProps {
  width: KeyboardKey['width']
}
const Button = styled('button')<ButtonProps>`
  width: ${({ width }) => width}px;
  margin: 0 2px;
  height: 50px;
  background-color: ${({ theme }) =>
    theme.palette.mode === 'dark' ? theme.palette.grey[600] : theme.palette.grey[300]};
  color: ${({ theme }) => theme.palette.text.primary};
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  border: none;
`

interface Props extends KeyboardKey {}
