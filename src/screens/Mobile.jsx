import React from 'react'
import MobileLayout from '../Layouts/MobileLayout'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Mobile/Home'

function Mobile() {
  return (
    <MobileLayout>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </MobileLayout>
  )
}

export default Mobile
