import React from 'react';
import AdHome from '../pages/Admin/Home/AdHome';
import { Outlet } from 'react-router-dom';

const AdminPanel = () => {
    return (
        <div>
           
            <Outlet></Outlet>
        </div>
    );
};

export default AdminPanel;