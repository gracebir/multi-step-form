import React from 'react'
import MobileLayout from '../Layouts/MobileLayout'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Mobile/Home'
import Add from '../pages/Mobile/Add'
import Plan from '../pages/Mobile/Plan'
import Summary from '../pages/Mobile/Summary'
import Succes from '../pages/Mobile/Succes'

function Mobile() {
  return (
    <MobileLayout>
      <Routes>
        <Route element={<Home/>} path='/' />
        <Route element={<Add/>} path='/add' />
        <Route element={<Plan/>} path='/plan' />
        <Route element={<Summary/>} path='/summary' />
        <Route element={<Succes/>} path='/summary/:success' />
      </Routes>
    </MobileLayout>
  )
}

export default Mobile
