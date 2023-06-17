import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { AppContext } from '../context/context'
import { useLocation, useNavigate } from 'react-router-dom'
import { navData } from '../data'

function MobileLayout({ children }) {
  const { increase, currentIndex, decrease } = useContext(AppContext)
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div className='relative w-full flex lg:hidden flex-col justify-between bg-magnolia min-h-screen'>
      <Navbar />
      <div className='w-full left-0 right-0 top-[120px] absolute'>
        <div className='bg-white mx-2 rounded-xl px-5 py-8 shadow-lg'>
          {children}
        </div>
      </div>
      {location.pathname !== "/summary/success" && (
        <div className="flex justify-between items-center px-4 bg-color-white py-4">
          {currentIndex > 0 ? (
            <button onClick={decrease} className='text-cool-gray font-medium text-sm'>
              Go back
            </button>
          ) : <div></div>}

          {currentIndex === navData.length - 1 ? (
            <button onClick={()=> navigate("/summary/success")} className="bg-purplish-blue px-5 py-3 text-white rounded-md text-sm font-medium">
              Confirm
            </button>
          ) : (
            <button onClick={increase} className="bg-marine-blue px-5 py-3 text-white rounded-md text-sm font-medium">
              Next Step
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default MobileLayout

