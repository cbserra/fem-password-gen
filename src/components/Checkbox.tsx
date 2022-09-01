import { twclsx } from '@/utils/twclsx'

import React from 'react'

interface CheckboxOptions {
  label: string
  id: string
  classNames: string
  index: number
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  checked?: boolean
}

const Checkbox = (params: CheckboxOptions) => {
  const { label, id, classNames, handleChange } = params
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [checked, setChecked] = React.useState(false)
  return (
    <div
      className={twclsx(
        `checkbox checkbox-${id} password__gen-options--checkbox-label flex items-end justify-start w-full gap-x-[2.0rem]`
      )}
    >
      <input
        type='checkbox'
        name={`${id}`}
        id={`${id}`}
        className={twclsx(`${classNames} password__gen-options--checkbox`)}
        onChange={handleChange}
        onClick={() => setChecked((prevValue) => !prevValue)}
      />
      <label htmlFor={`${id}`}>{label}</label>
    </div>
  )
}

export default Checkbox
