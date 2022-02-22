import BackspaceIcon from '@mui/icons-material/BackspaceOutlined'

const standardWidth = 1

export const topRowOfKeys: KeyboardKey[] = [
  {
    width: standardWidth,
    text: 'Q',
  },
  {
    width: standardWidth,
    text: 'W',
  },
  {
    width: standardWidth,
    text: 'E',
  },
  {
    width: standardWidth,
    text: 'R',
  },
  {
    width: standardWidth,
    text: 'T',
  },
  {
    width: standardWidth,
    text: 'Y',
  },
  {
    width: standardWidth,
    text: 'U',
  },
  {
    width: standardWidth,
    text: 'I',
  },
  {
    width: standardWidth,
    text: 'O',
  },
  {
    width: standardWidth,
    text: 'P',
  },
]

export const middleRowOfKeys: KeyboardKey[] = [
  {
    width: standardWidth,
    text: '',
    isBlank: true,
  },
  {
    width: standardWidth,
    text: 'A',
  },
  {
    width: standardWidth,
    text: 'S',
  },
  {
    width: standardWidth,
    text: 'D',
  },
  {
    width: standardWidth,
    text: 'F',
  },
  {
    width: standardWidth,
    text: 'G',
  },
  {
    width: standardWidth,
    text: 'H',
  },
  {
    width: standardWidth,
    text: 'J',
  },
  {
    width: standardWidth,
    text: 'K',
  },
  {
    width: standardWidth,
    text: 'L',
  },
  {
    width: standardWidth,
    text: '',
    isBlank: true,
  },
]

export const bottomRowOfKeys: KeyboardKey[] = [
  {
    width: 1.5,
    text: 'ENTER',
  },
  {
    width: standardWidth,
    text: 'Z',
  },
  {
    width: standardWidth,
    text: 'X',
  },
  {
    width: standardWidth,
    text: 'C',
  },
  {
    width: standardWidth,
    text: 'V',
  },
  {
    width: standardWidth,
    text: 'B',
  },
  {
    width: standardWidth,
    text: 'N',
  },
  {
    width: standardWidth,
    text: 'M',
  },
  {
    width: 1.5,
    text: <BackspaceIcon />,
  },
]

export const keyboardConfig: KeyboardKey[][] = [
  topRowOfKeys,
  middleRowOfKeys,
  bottomRowOfKeys,
]

export interface KeyboardKey {
  width: string | number
  text: string | JSX.Element
  /** UI trickery to create the spacing in the middle keyboard row */
  isBlank?: boolean
}
