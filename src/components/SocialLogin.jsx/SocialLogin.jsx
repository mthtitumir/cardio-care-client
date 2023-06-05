import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';

const SocialLogin = () => {
    const {googleSignIn} = useAuth();
    const handleGoogleAuth = () =>{
        googleSignIn()
        .then(()=>{
            
        })
    }
    return (
        <div className='text-center'>
            <h2 className='text-sm font-semibold mb-3 text-gray-600'>Continue With</h2>
            <div className="flex w-1/2 mx-auto">
                <FaGoogle onClick={handleGoogleAuth} className='mx-auto text-4xl text-white bg-red-600 border rounded-[50%] p-2' />
                <FaGoogle className='mx-auto text-4xl text-white bg-red-600 border rounded-[50%] p-2' />
                <FaGoogle className='mx-auto text-4xl text-white bg-red-600 border rounded-[50%] p-2' />
                <FaGoogle className='mx-auto text-4xl text-white bg-red-600 border rounded-[50%] p-2' />
            </div>
        </div>
    );
};

export default SocialLogin;