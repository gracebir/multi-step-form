import React from 'react'
import { NavLink } from 'react-router-dom'
import { navData } from '../data'

function Navbar() {
    return (
        <div className='h-[25vh] w-full bg-navbar-image bg-no-repeat bg-cover py-8 flex justify-around'>
            <div className='w-[55%] flex justify-between'>
                {navData.map((item, i) => (
                    <NavLink className={`flex justify-center items-center h-9 w-9 border text-sm text-white rounded-full`} key={i} to={item.href}>
                        {item.id}
                    </NavLink>
                ))}
            </div>

        </div>
    )
}

export default Navbar
