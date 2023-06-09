import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className='col-span-2 pt-5'>
            <div>
                <h2 className='text-4xl ml-3 mb-5 font-semibold'>Admin</h2>
            </div>
            <div>
                <Link to='dashboard'><button className="btn block w-full rounded mb-1 btn-outline btn-success">Dashboard</button></Link>
                <Link to='doctors'><button className="btn block w-full rounded mb-1 btn-outline btn-success">Doctors</button></Link>
                <Link to='problems'><button className="btn block w-full rounded mb-1 btn-outline btn-success">Problems</button></Link>
                <Link to='services'><button className="btn block w-full rounded mb-1 btn-outline btn-success">Services</button></Link>
                <Link to='services'><button className="btn block w-full rounded mb-1 btn-outline btn-success">Users</button></Link>
                <div className='divider'></div>
                  
            </div>
        </div>
    );
};

export default SideBar;