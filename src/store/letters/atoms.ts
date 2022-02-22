import { atom } from 'recoil'

import { AtomKeys } from '@/store/keys'

export const lettersAtom = atom<{}>({
  key: AtomKeys.letters,
  default: {},
})

export enum Status {
  Miss = 'miss',
  Hit = 'hit',
  OutOfOrder = 'outOfOrder',
  Open = 'open'
}

interface LetterBox {
  letter: string
  status: Status
}