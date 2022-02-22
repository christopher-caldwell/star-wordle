import { useRecoilState } from 'recoil'

import { currentPositionAtom, lettersAtom, Status } from '@/store'
import { deleteText } from '.'

export const useSendKeyboardInput = () => {
  const [letterConfig, setLetterConfig] = useRecoilState(lettersAtom)
  const [{ column, row }, setCurrentPosition] =
    useRecoilState(currentPositionAtom)

  const submitAnswer = () => {
    console.log('submitting')
  }

  const increasePosition = () => {
    setCurrentPosition((currentPosition) => {
      if (currentPosition.column === 4) {
        submitAnswer()
        return currentPosition
      }
      return {
        column: currentPosition.column + 1,
        row,
      }
    })
  }

  const handleDelete = () => {
    setCurrentPosition((currentPosition) => {
      if (currentPosition.column === 0)
        return {
          column,
          row,
        }
      return {
        column: currentPosition.column - 1,
        row,
      }
    })
  }

  const sendInput = (letter: string) => {
    if (letter === deleteText) {
      sendInput('')
      return handleDelete()
    }
    const isErasingInput = letter === ''
    const targetColumn = isErasingInput ? column - 1 : column

    setLetterConfig((currentLetterConfig) => {
      const mutableLetterConfig = [...currentLetterConfig]
      const mutableRowConfig = [...mutableLetterConfig[row]]
      const mutableColumnConfig = Object.assign(
        {},
        mutableRowConfig[targetColumn],
      )

      if (mutableColumnConfig === undefined) {
        throw new Error(
          `[useSendKeyboardInput]: Trying to access invalid position: Row: ${row}, Column: ${targetColumn}`,
        )
      }

      mutableColumnConfig.letter = letter
      mutableRowConfig[targetColumn] = mutableColumnConfig
      mutableLetterConfig[row] = mutableRowConfig
      return mutableLetterConfig
    })

    if (!isErasingInput) increasePosition()
  }

  return {
    sendInput,
  }
}
