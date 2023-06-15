import React from 'react'
import Home from '../pages/Home'
import { Route, Routes } from 'react-router-dom'

function Desktop() {
  return (
    <div className='hidden lg:flex justify-center items-center w-full h-screen bg-magnolia font-ubuntu text-color-white'>
      <Routes>
        <Route element={<Home/>} path='/' />
      </Routes>
    </div>
  )
}

export default Desktop
