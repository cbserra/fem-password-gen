import { GeneratePasswordOptions, PasswordResult, UNTITLED } from '@/types/Types'
import { twclsx } from '@/utils/twclsx'
import React from 'react'
import Button from './Button'
import Checkbox from './Checkbox'
import RangeSlider from './RangeSlider'
import StrengthMeter from './StrengthMeter'

const checkboxOptions = [
    {
        id: 'uppercase',
        label: 'Uppercase Letters',
        classNames: 'password__gen-options--checkbox',
    },
    {
        id: 'lowercase',
        label: 'Lowercase Letters',
        classNames: 'password__gen-options--checkbox',
    },
    {
        id: 'numbers',
        label: 'Numbers',
        classNames: 'password__gen-options--checkbox',
    },
    {
        id: 'symbols',
        label: 'Symbols',
        classNames: 'password__gen-options--checkbox',
    },
]

const Form = (params: {passwordResult: PasswordResult; handleGeneratePassword: (options: GeneratePasswordOptions) => void}) => {
    const { passwordResult } = params
  return (
    <div className={twclsx("password__gen-form--input section p-[1.6rem]")}>
        <form className={twclsx("password__gen-form flex flex-col items-center justify-center w-full gap-y-[3.2rem]")}>
    
            <RangeSlider />
            <div className="password__gen-form--checkbox-wrapper flex w-full flex-col gap-y-[1.6rem]">
                {checkboxOptions && checkboxOptions.map((option, index) => {
                    return (
                        <Checkbox 
                            key={index}
                            id={`include-${option.id}`}
                            classNames={option.classNames}
                            label={`Include ${option.label}`} />
                    )
                })}
            </div>
            <StrengthMeter strengthResult={ passwordResult?.strength ?? UNTITLED} />
            <Button />
    
        </form>
    </div>
)
}

export default Form