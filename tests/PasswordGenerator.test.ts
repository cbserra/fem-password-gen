import { GeneratePasswordOptions } from '../src/types/Types'
import { generatePassword } from '../src/utils/PasswordGenerator'

test('max password length, all options checked', () => {
  const result = generatePassword({
    length: 32,
    includeLowercase: true,
    includeUppercase: true,
    includeNumbers: true,
    includeSymbols: true
  } as GeneratePasswordOptions)
  console.log(result)
  expect(result).toBeTruthy()
  expect(result.length).toBe(32)
})

test('min password length, all options checked', () => {
  const result = generatePassword({
    length: 32,
    includeLowercase: true,
    includeUppercase: true,
    includeNumbers: true,
    includeSymbols: true
  } as GeneratePasswordOptions)
  console.log(result)
  expect(result).toBeTruthy()
  expect(result.length).toBe(32)
})
