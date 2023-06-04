import React from 'react';
import AdHome from '../pages/Admin/Home/AdHome';
import { Outlet } from 'react-router-dom';
import SideBar from '../pages/Admin/SideBar/SideBar';
import AdNavBar from '../pages/Admin/AdNavBar/AdNavBar';

const AdminPanel = () => {
    return (
        <div className='container mx-auto'>
            <AdNavBar></AdNavBar>
            <div className='grid grid-cols-12 container mx-auto gap-8'>
                <div className='col-span-3'>
                    <SideBar></SideBar>
                </div>
                <div className='col-span-9'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;