import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import SocialLogin from '../../components/SocialLogin.jsx/SocialLogin';

const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { signIn } = useAuth();

    const onSubmit = (data) => {
        console.log(data); // You can perform your login logic here
        signIn(data.email, data.password)
            .then(data => {
                reset();
                Swal.fire(
                    'Successful!',
                    'You logged in successfully!',
                    'success'
                )
            })
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-8">
            <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Log in</h2>
                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="email"
                            required
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
                            placeholder="Email"
                            {...register("email")}
                        />
                        {errors.email && <p className="mt-2 text-sm text-red-600">Please enter a valid email</p>}
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            autoComplete="current-password"
                            required
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
                            placeholder="Password"
                            {...register("password")}
                        />
                        {errors.password && <p className="mt-2 text-sm text-red-600">Please enter your password</p>}
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="py-2 px-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 w-full"
                        >
                            Log in
                        </button>
                    </div>
                </form>
                <div className="mt-4 text-center text-sm text-gray-600">
                    Don't have an account? <Link to="/register" className="text-cyan-600 hover:text-cyan-500">Please register.</Link>
                </div>
                <div className="divider"></div>
                <SocialLogin />
            </div>
        </div>
    );
};

export default Login;
