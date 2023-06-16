import React from 'react'

function TextField({placeholder, type, name, onChange}) {
  return (
    <div className='flex flex-col gap-1'>
      <label className='text-marine-blue font-medium'>{name}</label>
      <input className='py-3 border border-light-gray px-4 w-full rounded-lg outline-none text-marine-blue placeholder:text-cool-gray text-lg' type={type} placeholder={placeholder} onChange={onChange}/>
    </div>
  )
}

export default TextField
