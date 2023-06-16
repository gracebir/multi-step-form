import React, { useContext } from 'react'
import { AppContext } from '../../context/context'
import ToggleButton from '../../components/ToggleButton'
import CardMobile from '../../components/CardMobile'
import { planDatas } from '../../data'

function Plan() {
  const {isMonth} = useContext(AppContext)
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-2xl text-marine-blue font-bold'>Select your plan</h1>
        <p className="text-cool-gray text-lg">You have the option of monthly or yearly billing.</p>
      </div>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
        {planDatas.map((item)=> (
          <CardMobile
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