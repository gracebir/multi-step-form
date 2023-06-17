import React, { useContext } from 'react'
import SideBar from '../components/SideBar'
import { AppContext } from '../context/context'
import { useLocation, useNavigate } from 'react-router-dom'
import { navData } from '../data'

function DeskLayout({ children }) {
  const location = useLocation()
  const navigate = useNavigate()

  console.log(location.pathname)
  const { increase, currentIndex, decrease } = useContext(AppContext)
  return (
    <div className='hidden lg:flex justify-center items-center w-full h-screen bg-magnolia font-ubuntu text-color-white'>
      <div className='hidden lg:grid grid-cols-3 gap-4 w-[64rem] shadow-lg  h-[70vh] mx-auto bg-color-white p-4 rounded-xl'>
        <SideBar />
        <div className="col-span-2 grid grid-rows-6 px-20">
          <div className='py-8 row-span-6'>
            {children}
          </div>
          {location.pathname !== "/summary/success" && (
            <div className="flex justify-between items-center row-span-1">
              {currentIndex > 0 ? (
                <button onClick={decrease} className='text-cool-gray cursor-pointer font-medium hover:text-marine-blue duration-300' to={"/"}>
                  Go back
                </button>
              ) : <div></div>}

              {currentIndex === navData.length - 1 ? (
                <button onClick={()=> navigate("/summary/success")} className="bg-purplish-blue cursor-pointer py-3 px-7 rounded-lg font-medium">
                  Confirm
                </button>
              ) : (
                <button onClick={increase} className="bg-marine-blue cursor-pointer py-3 px-7 rounded-lg font-medium">
                  Next Step
                </button>
              )
              }

            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DeskLayout
