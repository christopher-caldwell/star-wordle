import { atom } from 'recoil'

import { AtomKeys } from '@/store/keys'

export const currentPositionAtom = atom<CurrentPosition>({
  key: AtomKeys.currentPosition,
  default: {
    column: 0,
    row: 0,
  },
})

interface CurrentPosition {
  column: number
  row: number
}
