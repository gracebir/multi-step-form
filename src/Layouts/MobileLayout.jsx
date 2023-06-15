import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

function MobileLayout({ children }) {
  return (
    <div className='relative w-full flex lg:hidden flex-col justify-between bg-magnolia min-h-screen'>
      <Navbar />
      <div className='w-full left-0 right-0 top-[120px] absolute'>
        <div className='bg-white mx-2 rounded-xl px-5 py-8 shadow-lg'>
          {children}
        </div>
      </div>
      <div className="flex justify-between items-center px-4 bg-color-white py-4">
        <Link className="text-cool-gray font-medium text-sm" to={""}>
          Go Back
        </Link>
        <Link className="bg-marine-blue px-5 py-3 text-white rounded-md text-sm font-medium" to={""}>
          Next Step
        </Link>
      </div>
    </div>
  )
}

export default MobileLayout

