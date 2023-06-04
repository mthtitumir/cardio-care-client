import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); // You can perform your registration logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Create an account</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
              placeholder="Name"
              {...register("name")}
            />
            {errors.name && <p className="mt-2 text-sm text-red-600">Please enter your name</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="photo-url" className="block text-gray-700">Photo URL</label>
            <input
              type="text"
              name="photoUrl"
              id="photo-url"
              autoComplete="photo-url"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
              placeholder="Photo URL"
              {...register("photoUrl")}
            />
            {errors.photoUrl && <p className="mt-2 text-sm text-red-600">Please enter a valid photo URL</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email-address" className="block text-gray-700">Email address</label>
            <input
              type="email"
              name="email"
              id="email-address"
              autoComplete="email"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
              placeholder="Email address"
              {...register("email")}
            />
            {errors.email && <p className="mt-2 text-sm text-red-600">Please enter a valid email address</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="new-password"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
              placeholder="Password"
              {...register("password")}
            />
            {errors.password && <p className="mt-2 text-sm text-red-600">Please enter a password</p>}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="py-2 px-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            >
              Register
            </button>
          </div>
        </form>
        <div className="mt-4 text-center text-sm text-gray-600">
          Already have an account? <Link to="/login" className="text-cyan-600 hover:text-cyan-500">Please Login.</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
