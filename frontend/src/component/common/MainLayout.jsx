import React from 'react'
import Navbar from './../../pages/home/Navbar';
import { Outlet } from 'react-router-dom';

function MainLayout() {
    return (
        <>
            <Navbar />
            <Outlet />

        </>
    )
}

export default MainLayout