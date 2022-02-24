export enum AtomKeys {
  letters = 'letters',
  currentPosition = 'currentPosition'
}

export const ensureKeysAreUnique = <KeyType>(keys: KeyType): boolean => {
  const atomKeys = Object.values(keys)
  const uniqueAtomKeysLength = new Set(atomKeys).size

  return uniqueAtomKeysLength === atomKeys.length
}

const areKeysUnique = ensureKeysAreUnique(AtomKeys)

if (!areKeysUnique) throw new Error('Recoil Atom keys are not all unique')
