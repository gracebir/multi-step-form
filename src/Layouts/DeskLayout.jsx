import React from 'react'
import SideBar from '../components/SideBar'
import { Link } from 'react-router-dom'

function DeskLayout({ children }) {
  return (
    <div className='hidden lg:flex justify-center items-center w-full h-screen bg-magnolia font-ubuntu text-color-white'>
      <div className='hidden lg:grid grid-cols-3 gap-4 w-[64rem] shadow-lg  h-[70vh] mx-auto bg-color-white p-4 rounded-xl'>
        <SideBar />
        <div className="col-span-2 grid grid-rows-6 px-20">
          <div className='py-8 row-span-6'>
            {children}
          </div>
          <div className="flex justify-between items-center row-span-1">
            <Link className='text-cool-gray font-medium' to={"/"}>
              Go back
            </Link>
            <Link className="bg-marine-blue py-3 px-7 rounded-lg font-medium" to={""}>
              Next Step
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeskLayout
