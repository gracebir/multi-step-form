import React, { useContext } from 'react'
import ToggleButton from '../components/ToggleButton'
import { AppContext } from '../context/context'
import PlanCard from '../components/PlanCard'
import { planDatas } from '../data'


function Plan() {
  const {isMonth} = useContext(AppContext)
  return (
    <div className='flex flex-col gap-10'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-3xl text-marine-blue font-bold'>Select your plan</h1>
        <p className="text-cool-gray text-base">You have the option of monthly or yearly billing.</p>
      </div>
      <div className="flex flex-col gap-7">
        <div className='grid grid-cols-3 gap-4'>
         {planDatas.map((item)=> (
          <PlanCard
          key={item.id}
          title={item.title}
          year={item.year}
          month={item.month}
          img={item.img}
          />
         ))}
        </div>
        <div className="bg-magnolia w-full rounded-lg py-4 flex justify-center gap-4">
          <span className={`font-medium ${isMonth ? 'text-marine-blue':'text-cool-gray'}`}>Montly</span>
          <ToggleButton />
          <span className={`font-medium ${!isMonth ? 'text-marine-blue':'text-cool-gray'}`}>Year</span>
        </div>
      </div>
      
    </div>
  )
}

export default Plan
