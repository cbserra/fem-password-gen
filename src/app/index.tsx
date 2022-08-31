import Form from "@/components/Form"
import GeneratedPassword from "@/components/GeneratedPassword"
import { GeneratePasswordOptions, PasswordResult, UNTITLED } from "@/types/Types"
import { generatePasswordResult } from "@/utils/PasswordUtils"
import { twclsx } from "@/utils/twclsx"
import React from "react"

// you can add Header, footer anything else you might want to, or else leave it to be
const PasswordGeneratorApp: React.FunctionComponent = () => {
  const [passwordResult, setPasswordResult] = React.useState<PasswordResult>({password: '', strength: UNTITLED})
  // const [passwordOptions, setPasswordOptions] = React.useState<GeneratePasswordOptions>()
  // useTheme shold always on top of app
/*   function handleGeneratePassword(options: GeneratePasswordOptions): void {
    // const passwordOptions: GeneratePasswordOptions = {
    //   length: length,
    //   includeSymbols: includeSymbols,
    //   includeNumbers: includeNumbers,
    //   includeLowercase: includeLowercase,
    //   includeUppercase: includeUppercase,
    // }
    console.log(`🚀 ~ handleGeneratePassword ~ options`, options)

    const passwordResult = generatePasswordResult (options) 
    console.log(`🚀 ~ handleGeneratePassword ~ passwordResult`, passwordResult)

    setPassword(passwordResult)
  } */

  const handleGeneratePassword = (options: GeneratePasswordOptions): void => {
      console.log(`🚀 ~ handleGeneratePassword ~ options`, options)
  
      const passwordResult = generatePasswordResult (options) 
      console.log(`🚀 ~ handleGeneratePassword ~ passwordResult`, passwordResult)
  
      setPasswordResult(passwordResult)
  }

  return (
    <>
      <h1 className={twclsx("text-heading-sm")}>Password Generator</h1>
      <GeneratedPassword passwordResult={passwordResult} />
      <Form passwordResult={passwordResult} handleGeneratePassword={handleGeneratePassword} />
    </>
  )
}

export default PasswordGeneratorApp
