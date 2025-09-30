import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DashBoard from './Components/Admin/AdminDashBoard'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import AdminDashBoard from './Components/Admin/AdminDashBoard.jsx'
import StoreDashBoard from './Components/Store Owner/StoreDashBoard.jsx'
import UserDashBoard from './Components/User/UserDashBoard.jsx'
import HomePage from './Components/Home Page/HomePage.jsx'
import LoginUser from './Components/Login And Register/LoginUser.jsx'
import RegisterUser from './Components/Login And Register/RegisterUser.jsx'
import UpdatePassword from './Components/Login And Register/UpdatePassword.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/admin/dashboard' element={<AdminDashBoard/>}/>
          <Route path='/user-login' element={<LoginUser/>}/>
          <Route path='/store/dashboard' element={<StoreDashBoard/>}/>
          <Route path='/user/dashboard' element={<UserDashBoard/>}/>
          <Route path='/user-register' element={<RegisterUser/>}/>
          <Route path='/update-password' element={<UpdatePassword/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
