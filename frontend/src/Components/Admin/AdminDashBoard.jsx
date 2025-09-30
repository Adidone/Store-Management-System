import React from 'react'
import AdminSidenav from "./AdminSidenNav";;
import Navbar from '../pages/Navbar';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const DashBoard = () =>{
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/user-login', { replace: true });
    }
  }, [navigate]);
  return(
    <>
    
      <Navbar/>
      <AdminSidenav/>
    </>
  )
}

export default DashBoard;