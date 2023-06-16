import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/context'

function Summary() {
  const { isMonth } = useContext(AppContext)
  return (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-col gap-3'>
        <h1 className='text-2xl text-marine-blue font-bold'>Finishing up</h1>
        <p className="text-cool-gray text-base">Double-check everything looks OK before confirming.</p>
      </div>
      <div className='flex flex-col'>
        <div className='py-5 bg-magnolia px-3 rounded-lg flex flex-col gap-4'>
            <div className='flex justify-between items-center'>
              <div>
                <h3 className="text-marine-blue font-medium">Arcade {isMonth ? "(Month)" : "(Year)"}</h3>
                <Link className='text-cool-gray text-sm underline' to={"/plan"}>Change</Link>
              </div>
              <span className="text-marine-blue font-semibold">{isMonth ? "$9/mo" : "$90/yr"}</span>
            </div>
            <hr className='w-full'/>
            <div className='flex justify-between'>
              <span className='text-cool-gray'>
                Online service
              </span>
              <span className='text-cool-gray'>
              {isMonth ? "+$1/mo" : "+$10/yr"}
              </span>
            </div>
            <div className='flex justify-between'>
              <span className='text-cool-gray'>
                Larger storage
              </span>
              <span className='text-cool-gray'>
              {isMonth ? "+$2/mo" : "+$20/yr"}
              </span>
            </div>
        </div>
      </div>
      <div className='flex px-3 justify-between'>
        <span className='text-cool-gray'>Total {isMonth ? "(per month)" : "(per year)"}</span>
        <span className="text-xl text-purplish-blue font-semibold">{isMonth ? "$12/mo" : "$120/yr"}</span>
      </div>
    </div>
  )
}

export default Summary
