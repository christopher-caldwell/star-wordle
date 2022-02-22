import { atom } from 'recoil'

import { AtomKeys } from '@/store/keys'

export enum Status {
  Miss = 'miss',
  Hit = 'hit',
  OutOfOrder = 'outOfOrder',
  Open = 'open',
}

export interface LetterBox {
  letter: string
  status: Status
}

export const defaultLetterConfig: LetterBox = {
  letter: '',
  status: Status.Open,
}
export const defaultColumnConfig: LetterBox[] = new Array(5).fill(
  defaultLetterConfig,
)

/** 2d array for storing the rows and columns */
export const lettersAtom = atom<LetterBox[][]>({
  key: AtomKeys.letters,
  default: new Array(6).fill(defaultColumnConfig),
})
