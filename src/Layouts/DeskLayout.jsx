import React from 'react'
import SideBar from '../components/SideBar'

function DeskLayout({children}) {
  return (
    <div className='hidden lg:grid grid-cols-3 gap-4 w-[64rem] shadow-lg  h-[70vh] mx-auto bg-color-white p-4 rounded-xl'>
      <SideBar/>
      <div className="col-span-2">
        {children}
      </div>
    </div>
  )
}

export default DeskLayout
