import React from 'react'
import { twclsx } from '@/utils'

const RangeSlider = () => {
    const classNames = twclsx("password__gen-options--length flex items-center justify-center w-full")
  return (
    <div className={classNames}>
      <div className="password-gen--options--length--input-wrapper flex flex-col w-full gap-y-[.8rem]">
        <div className="password-gen--options--length--label-wrapper flex justify-between items-center">
        <label htmlFor="char-length" className="">
          Character Length
        </label>
          <span className="password__gen-options--length--value text-heading-md text-secondary-neon-green font-bold">12</span>
        </div>
        
        <input type="range" name="char-length" id="char-length" min="8" max="32" className={twclsx("password__gen-options--range focus:outline-none ")} />
        
        </div>
    </div>
  )
}

export default RangeSlider