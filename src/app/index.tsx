import Form from '@/components/Form'
import GeneratedPassword from '@/components/GeneratedPassword'
import Heading from '@/components/Heading'

import { GeneratePasswordOptions, PasswordResult, UNTITLED } from '@/types/Types'
import { generatePasswordResult } from '@/utils/PasswordUtils'

import React from 'react'

const EMPTY_PASSWORD_RESULT = { password: '', strength: UNTITLED }
const DEFAULT_OPTIONS = {
  length: 8,
  includeSymbols: false,
  includeNumbers: false,
  includeLowercase: false,
  includeUppercase: false
}
const PasswordGeneratorApp: React.FunctionComponent = () => {
  const [passwordResult, setPasswordResult] = React.useState<PasswordResult>(EMPTY_PASSWORD_RESULT)
  const [formData, updateFormData] = React.useState<GeneratePasswordOptions>(DEFAULT_OPTIONS)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log(`🚀 ~ handleSubmit ~ formData`, formData)

    handleGeneratePassword(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault()
    updateFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    })

    console.log(`🚀 ~ handleChange ~ formData`, formData)
    console.log(
      `🚀 ~ handleChange ~ [e.target.name]: e.target.value.trim()`,
      e.target.name,
      e.target.value.trim()
    )
  }

  const handleGeneratePassword = (options: GeneratePasswordOptions): void => {
    console.log(formData)
    console.log(`🚀 ~ handleGeneratePassword ~ options`, options)

    const passwordResult = generatePasswordResult(options)
    console.log(`🚀 ~ handleGeneratePassword ~ passwordResult`, passwordResult)

    setPasswordResult(passwordResult)
  }

  return (
    <>
      <Heading />
      <GeneratedPassword passwordResult={passwordResult} />
      <Form
        passwordResult={passwordResult}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  )
}

export default PasswordGeneratorApp
