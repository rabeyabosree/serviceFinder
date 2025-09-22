import React from 'react'
import Navbar from './../../pages/home/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './../../pages/home/Footer';

function MainLayout() {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>

            <Footer />

        </>
    )
}

export default MainLayout