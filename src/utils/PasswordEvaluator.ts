import zxcvbn from 'zxcvbn'

export function evaluatePassword(password: string): number {
  const result = zxcvbn(password)
  return result.score
}
