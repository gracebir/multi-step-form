import React from 'react'
import Home from '../pages/Home'
import { Route, Routes } from 'react-router-dom'
import DeskLayout from '../Layouts/DeskLayout'
import Add from '../pages/Add'
import Plan from '../pages/Plan'
import Summary from '../pages/Summary'

function Desktop() {
  return (
    <DeskLayout>
      <Routes>
        <Route element={<Home/>} path='/' />
        <Route element={<Add/>} path='/add' />
        <Route element={<Plan/>} path='/plan' />
        <Route element={<Summary/>} path='/summary' />
      </Routes>
    </DeskLayout>
  )
}

export default Desktop
