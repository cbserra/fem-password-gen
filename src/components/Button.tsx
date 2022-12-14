import { twclsx } from '@/utils/twclsx'

import React from 'react'

// import { GeneratePasswordOptions } from '@/types/Types'

// const Button = (params: {handleGeneratePassword: (options: GeneratePasswordOptions) => void}) => {
const Button: React.FunctionComponent<React.ButtonHTMLAttributes<HTMLButtonElement>> = () => {
  // const { handleGeneratePassword } = params
  return (
    <button
      type='submit'
      className={twclsx(
        'gen-pass-btn bg-secondary-neon-green text-primary-dark-gray uppercase w-full flex items-center justify-center gap-x-[1.6rem] py-[1.8rem]'
      )}
      // onClick={() => handleGeneratePassword({})}
    >
      Generate
      <svg width='12' height='12' xmlns='http://www.w3.org/2000/svg'>
        <path
          fill='#24232C'
          d='m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z'
        />
      </svg>
    </button>
  )
}

export default Button
