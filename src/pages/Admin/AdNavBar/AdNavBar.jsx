import React from 'react';
import logo from '../../../assets/logo/cardio-care.png'
import { Link } from 'react-router-dom';

const AdNavBar = () => {
    return (
        <div className="navbar bg-base-100 container mx-auto">
            <div className='flex flex-1 items-center'>
                <img className='w-10' src={logo} alt="" />
                <Link to='/' className="font-bold normal-case text-xl"><span className='text-red-600'>Cardio</span><span className='text-cyan-600'>Care</span> Admin</Link>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdNavBar;