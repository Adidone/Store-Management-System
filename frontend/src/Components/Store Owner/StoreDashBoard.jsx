import React from 'react'
import Navbar from '../pages/Navbar'
import StoreSideNav from './StoreSideNav'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';  

function StoreDashBoard() {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/user-login', { replace: true });
        }
    }, [navigate]);
    return (
        <>
            <Navbar />
            <StoreSideNav />
        </>
    )
}

export default StoreDashBoard