import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { navData } from '../data'
import { AppContext } from '../context/context'

function Navbar() {
    const { setCurrentIndex } = useContext(AppContext)
    return (
        <div className='h-[25vh] w-full bg-navbar-image bg-no-repeat bg-cover py-8 flex justify-around'>
            <div className='w-[55%] flex justify-between'>
                {navData.map((item, i) => (
                    <NavLink onClick={()=> setCurrentIndex(i)}  className={`flex justify-center items-center h-9 w-9 border text-sm text-white rounded-full`} key={i} to={item.href}>
                        {item.id}
                    </NavLink>
                ))}
            </div>

        </div>
    )
}

export default Navbar
