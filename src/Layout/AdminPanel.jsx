import React from 'react';
import AdHome from '../pages/Admin/Home/AdHome';
import { Outlet } from 'react-router-dom';
import SideBar from '../pages/Admin/SideBar/SideBar';
import AdNavBar from '../pages/Admin/AdNavBar/AdNavBar';

const AdminPanel = () => {
    return (
        <div>
            <AdNavBar></AdNavBar>
            <div className='grid grid-cols-12 container mx-auto gap-8'>
                <SideBar></SideBar>
                <div className='col-span-10'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;