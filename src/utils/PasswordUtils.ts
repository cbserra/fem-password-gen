import {
  GeneratePasswordOptions,
  MEDIUM,
  PasswordResult,
  STRONG,
  StrengthResult,
  TOO_WEAK,
  UNTITLED,
  WEAK
} from '@/types/Types'
import { evaluatePassword } from '@/utils/PasswordEvaluator'
import { generatePassword } from '@/utils/PasswordGenerator'

export function generatePasswordResult(generateOptions: GeneratePasswordOptions): PasswordResult {
  const password = generatePassword(generateOptions)
  const score = evaluatePassword(password)
  const strength = getPasswordStrength(score)

  return { password, strength }
}

function getPasswordStrength(score: number): StrengthResult {
  switch (score) {
    case 0:
      return TOO_WEAK
    case 1:
      return WEAK
    case 2:
      return MEDIUM
    case 3:
    case 4:
      return STRONG
    default:
      return UNTITLED
  }
}
