import { evaluatePassword } from './../src/utils/PasswordEvaluator'

test("provided a strong password, should return highest score from 'zxcvbn' function", () => {
  const actualPassword = ")e6K%gA8W?s20Rm/)0Ko9/sMV4k'C3w}"
  const score = evaluatePassword(actualPassword)

  console.log(score)
  expect(score).toBe(4)
})
