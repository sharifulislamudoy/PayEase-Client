import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='relative'>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default MainLayout;