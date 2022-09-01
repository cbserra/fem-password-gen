import { PasswordResult, UNTITLED } from '@/types/Types'
import { twclsx } from '@/utils/twclsx'

import Button from './Button'
import Checkbox from './Checkbox'
import RangeSlider from './RangeSlider'
import StrengthMeter from './StrengthMeter'

import React from 'react'

const CHECKBOX_METADATA = [
  {
    id: 'uppercase',
    label: 'Uppercase Letters',
    classNames: 'password__gen-options--checkbox'
  },
  {
    id: 'lowercase',
    label: 'Lowercase Letters',
    classNames: 'password__gen-options--checkbox'
  },
  {
    id: 'numbers',
    label: 'Numbers',
    classNames: 'password__gen-options--checkbox'
  },
  {
    id: 'symbols',
    label: 'Symbols',
    classNames: 'password__gen-options--checkbox'
  }
]

const Form = (params: {
  passwordResult: PasswordResult
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}) => {
  const { passwordResult, handleChange, handleSubmit } = params
  return (
    <div className={twclsx('password__gen-form--input section p-[1.6rem]')}>
      <form
        className={twclsx(
          'password__gen-form flex flex-col items-center justify-center w-full gap-y-[3.2rem]'
        )}
        onSubmit={handleSubmit}
      >
        <RangeSlider handleChange={handleChange} />
        <div className='password__gen-form--checkbox-wrapper flex w-full flex-col gap-y-[1.6rem]'>
          {CHECKBOX_METADATA &&
            CHECKBOX_METADATA.map((option, index) => {
              return (
                <Checkbox
                  key={index}
                  id={`include-${option.id}`}
                  classNames={option.classNames}
                  label={`Include ${option.label}`}
                  index={index}
                  handleChange={handleChange}
                />
              )
            })}
        </div>
        <StrengthMeter strengthResult={passwordResult?.strength ?? UNTITLED} />
        <Button />
      </form>
    </div>
  )
}

export default Form
