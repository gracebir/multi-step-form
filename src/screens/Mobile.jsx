import React from 'react'
import MobileLayout from '../Layouts/MobileLayout'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Mobile/Home'
import Add from '../pages/Mobile/Add'
import Plan from '../pages/Mobile/Plan'
import Summary from '../pages/Mobile/Summary'

function Mobile() {
  return (
    <MobileLayout>
      <Routes>
        <Route element={<Home/>} path='/' />
        <Route element={<Add/>} path='/add' />
        <Route element={<Plan/>} path='/plan' />
        <Route element={<Summary/>} path='/summary' />
      </Routes>
    </MobileLayout>
  )
}

export default Mobile
