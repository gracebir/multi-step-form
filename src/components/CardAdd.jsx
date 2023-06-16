import React, { useContext, useState } from 'react'
import CheckBox from './CheckBox'
import { AppContext } from '../context/context'

function CardAdd({ service, desc, month, year }) {
    const { isMonth } = useContext(AppContext)
    console.log(isMonth)
    const [isChecked, setIsChecked] = useState(false)
    return (
        <div className={`border flex ${isChecked ? "border-purplish-blue bg-alabaster":"border-cool-gray"} items-center justify-between px-5 py-4 rounded-lg`}>
            <div className='flex items-center gap-4'>
                <CheckBox isChecked={isChecked} setIsChecked={setIsChecked}/>
                <div>
                    <h3 className='text-marine-blue font-medium lg:font-semibold text-base lg:text-lg'>{service}</h3>
                    <p className="text-cool-gray text-sm lg:text-base">{desc}</p>
                </div>
            </div>
            <span className='text-purplish-blue text-sm lg:text-base'>{isMonth ? month : year}</span>
        </div>
    )
}

export default CardAdd
