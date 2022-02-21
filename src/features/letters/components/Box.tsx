import { FC } from 'react'
import { styled, useTheme } from '@mui/material'
import shouldForwardProp from '@emotion/is-prop-valid'

enum Status {
  Miss = 'miss',
  Hit = 'hit',
  OutOfOrder = 'outOfOrder',
  Open = 'open'
}

export const Box: FC = () => {
  const boxColor = useDetermineBackgroundColor(Status.Open)
  return <Container boxColor={boxColor}>S</Container>
}

interface BoxContainerProps {
  boxColor: string
}

const Container = styled('div', { shouldForwardProp })<BoxContainerProps>`
  display: flex;
  border: 2px solid ${({ theme: { palette } }) => (palette.mode === 'dark' ? palette.grey[800] : palette.grey[400])};
  height: 58px;
  width: 58px;
  margin: 2px;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  background-color: ${({ boxColor }) => boxColor};
`

const useDetermineBackgroundColor = (status: Status): string => {
  const {
    palette: { success, error, warning, background }
  } = useTheme()
  if (status === Status.Hit) return success.main
  if (status === Status.Miss) return error.main
  if (status === Status.OutOfOrder) return warning.main
  return background.default
}