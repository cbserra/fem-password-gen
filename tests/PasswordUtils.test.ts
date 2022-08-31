import { GeneratePasswordOptions, StrengthTitle } from '../src/types/Types'
import { generatePasswordResult } from '../src/utils/PasswordUtils'

test('max password length, all options checked', () => {
  const result = generatePasswordResult({
    length: 32,
    includeLowercase: true,
    includeUppercase: true,
    includeNumbers: true,
    includeSymbols: true
  } as GeneratePasswordOptions)
  console.log(result)
  expect(result).toBeTruthy()
  expect(result.password.length).toBe(32)
  expect(result.strength.strengthTitle).toBe(StrengthTitle.STRONG)
})
