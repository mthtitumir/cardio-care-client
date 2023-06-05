import React from 'react';
import logo from '../../../assets/logo/cardio-care.png'
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';

const NavBar = () => {
    const { user, logOut } = useAuth();
    const handleLogout = () =>{
        logOut()
        .then(() =>{
            Swal.fire(
                'You logged out successfully!',
                'success'
            )
        })
    }
    return (
        <div className='fixed z-50 top-0 w-full bg-cyan-50 drop-shadow-lg'>
            <div className=" navbar container mx-auto rounded-lg border">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="text-gray-600 font-semibold menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/' >Home</Link></li>
                            <li><a>Services</a></li>
                            <li><a>Blog</a></li>
                        </ul>
                    </div>
                    <div className='flex items-center'>
                        <img className='w-10' src={logo} alt="" />
                        <Link to='/' className="font-bold normal-case text-xl"><span className='text-red-600'>Cardio</span><span className='text-cyan-600'>Care</span></Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="text-gray-600 font-semibold menu menu-horizontal px-1">
                        <li><Link to='/' >Home</Link></li>
                        <li><a>Services</a></li>
                        <li><a>Blog</a></li>
                    </ul>
                </div>
                <div className='navbar-end gap-2 items-center'>
                    <div className="">
                        <Link to='/appointment' className="bg-cyan-500 py-2 px-3 rounded-lg text-sm text-white uppercase font-semibold">Book Appointment</Link>
                    </div>
                    {
                        user ?

                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li><Link>Profile</Link></li>
                                    <li><a>Settings</a></li>
                                    <li onClick={handleLogout}><Link>Logout</Link></li>
                                </ul>
                            </div>
                            :
                            <Link to='/login'>Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;