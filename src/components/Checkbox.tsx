import React from 'react'

interface CheckboxOptions {
    label: string,
    id: string,
    classNames: string,
}

const Checkbox = (params: CheckboxOptions) => {
    const { label, id, classNames } = params
  return (
    <div className="password__gen-options--checkbox-label flex items-end justify-start w-full gap-x-[2.0rem]">
      <input type="checkbox" name={`${id}`} id={`${id}`} className={`${classNames} password__gen-options--checkbox`} />
      <label htmlFor={`${id}`}>
        <svg width="14" height="12" xmlns="http://www.w3.org/2000/svg">
          <path stroke="#18171F" strokeWidth="3" fill="none" d="M1 5.607 4.393 9l8-8"/>
        </svg>
        {label}
      </label>
    </div>
  )
}

export default Checkbox