import React from 'react'
import { addOns } from '../data'
import CardAdd from '../components/CardAdd'

function Add() {
  return (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-3xl text-marine-blue font-bold'>Pick add-ons</h1>
        <p className="text-cool-gray text-base">Add-ons help enhance your gaming experience.</p>
      </div>
      <div className='flex flex-col gap-3'>
        {addOns.map((item)=> (
          <CardAdd
          key={item.id}
          service={item.service}
          desc={item.desc}
          month={item.month}
          year={item.year}
          />
        ))}
      </div>
    </div>
  )
}

export default Add
