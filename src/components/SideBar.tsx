import React from 'react'
import { NavLink } from 'react-router-dom'
import { navData } from '../data'

function SideBar() {
  return (
    <div className='h-full bg-sidebar-image bg-no-repeat bg-cover rounded-xl flex flex-col gap-9 col-span-1 w-full px-9 py-14'>
        {navData.map((item)=> (
             <NavLink to={item.href} key={item.id} className={`flex gap-5 items-center`}>
             <span className='w-8 h-8 border flex items-center justify-center rounded-full font-bold border-white'>
                 {item.id}
             </span>
             <div className='flex flex-col'>
                 <span className='uppercase text-cool-gray text-sm'>step {item.id}</span>
                 <span className='uppercase text-white font-bold text-sm'>{item.desc}</span>
             </div>
           </NavLink>
        ))}
    </div>
  )
}

export default SideBar
