import React from 'react'

function TextField({ placeholder, type, value, onBlur, name,label, isError=false, onChange }) {
    return (
        <div className='flex flex-col gap-1'>
            <div className='flex justify-between items-center'>
                <label className='text-marine-blue font-normal lg:font-medium'>{label}</label>
                {isError && (<span className='text-strawberry-red lg:text-sm text-xs font-semibold'>{"This Field is Required"}</span>)}
            </div>
            <input name={name} value={value} onBlur={onBlur} className={`py-2 lg:py-3 border ${isError ? 'border-strawberry-red':'border-light-gray hover:border-purplish-blue'}  px-4 w-full rounded-lg outline-none text-marine-blue placeholder:font-medium lg:placeholder:font-normal placeholder:text-cool-gray text-base lg:text-lg`} type={type} placeholder={placeholder} onChange={onChange} />
        </div>
    )
}

export default TextField
