import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import BankersPage from '../pages/BankersPage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/dashboard' element={<BankersPage/>}/>
    </Routes>
  )
}

export default AppRoutes