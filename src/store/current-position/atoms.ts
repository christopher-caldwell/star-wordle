import { atom } from 'recoil'

import { AtomKeys } from '@/store/keys'

export const currentPositionAtom = atom<CurrentPosition>({
  key: AtomKeys.currentPosition,
  default: {
    column: 1,
    row: 1,
  },
})

interface CurrentPosition {
  column: number
  row: number
}
