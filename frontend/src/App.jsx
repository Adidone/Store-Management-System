import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DashBoard from './Components/Admin/AdminDashBoard'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import AdminDashBoard from './Components/Admin/AdminDashBoard.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AdminDashBoard/>}/>
          <Route path='/admin/dashboard' element={<AdminDashBoard/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
