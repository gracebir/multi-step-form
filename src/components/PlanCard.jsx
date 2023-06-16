import React, { useContext } from 'react'
import { AppContext } from '../context/context'

function PlanCard({ year, month, title, img }) {
    const { isMonth } = useContext(AppContext)
    return (
        <div className="flex flex-col cursor-pointer justify-between gap-10 border border-light-gray hover:border-purplish-blue rounded-lg px-4 py-6">
            <div>
                <img src={img} alt={title} />
            </div>
            <div className='flex flex-col gap-1'>
                <h3 className='text-marine-blue font-medium'>{title}</h3>
                {isMonth ? (
                    <span className='text-cool-gray text-sm'>{month}</span>
                ) : (
                    <div className='flex flex-col'>
                        <span className='text-cool-gray text-sm'>{year}</span>
                        <span className='text-marine-blue text-xs'>{"2 months free"}</span>
                    </div>
                )}

            </div>
        </div>
    )
}

export default PlanCard
