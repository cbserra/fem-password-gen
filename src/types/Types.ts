type UndefinableString = string | undefined

export interface GeneratePasswordOptions {
  length: number
  includeLowercase: boolean
  includeUppercase: boolean
  includeNumbers: boolean
  includeSymbols: boolean
}

export interface StrengthResult {
  strengthTitle: StrengthTitle
  colors: UndefinableString[]
}

export enum StrengthTitle {
  UNTITLED = '',
  TOO_WEAK = 'Too Weak!',
  WEAK = 'Weak',
  MEDIUM = 'Medium',
  STRONG = 'Strong'
}
export const TOO_WEAK: StrengthResult = {
  strengthTitle: StrengthTitle.TOO_WEAK,
  colors: ['bg-secondary-red', undefined, undefined, undefined]
}
export const WEAK: StrengthResult = {
  strengthTitle: StrengthTitle.WEAK,
  colors: ['bg-secondary-orange', 'bg-secondary-orange', undefined, undefined]
}
export const MEDIUM: StrengthResult = {
  strengthTitle: StrengthTitle.MEDIUM,
  colors: ['bg-secondary-yellow', 'bg-secondary-yellow', 'bg-secondary-yellow', undefined]
}
export const STRONG: StrengthResult = {
  strengthTitle: StrengthTitle.STRONG,
  colors: ['bg-secondary-green', 'bg-secondary-green', 'bg-secondary-green', 'bg-secondary-green']
}
export const UNTITLED: StrengthResult = {
  strengthTitle: StrengthTitle.UNTITLED,
  colors: [undefined, undefined, undefined, undefined]
}

export interface PasswordResult {
  password: string
  strength: StrengthResult
}
