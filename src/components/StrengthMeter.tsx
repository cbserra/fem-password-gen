import { StrengthResult } from '@/types/Types'
import { twclsx } from '@/utils'

import React from 'react'

const Bar = (props: { color?: string }) => {
  const { color } = props
  return (
    <div
      className={twclsx(
        'password__gen-form--strength-meter--bar ',
        'w-[1rem] ',
        // "border-2 ",
        // "border-y-primary-almost-white ",
        // "border-solid ",
        'outline outline-2 outline-primary-almost-white  ',
        'h-full',
        'py-[1.4rem] px-[.5rem]',
        `${color ? '${color} border-0' : ''}`
      )}
    ></div>
  )
}

const StrengthMeter = (props: { strengthResult: StrengthResult }) => {
  const { strengthResult } = props

  return (
    <div className='password__gen-form--strength-wrapper w-full h-full flex items-center justify-between uppercase bg-primary-very-dark-gray p-[1.6rem]'>
      <div className='password__gen-form--strength-title flex text-primary-gray'>Strength</div>
      <div className='password__gen-form--strength-meter h-full flex text-primary-almost-white '>
        {strengthResult && (
          <>
            {strengthResult.strengthTitle}
            <div className='password__gen-form--strength-meters flex gap-x-[.8rem]'>
              {strengthResult.colors.map((color, index) => (
                <Bar key={index} color={color} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default StrengthMeter
