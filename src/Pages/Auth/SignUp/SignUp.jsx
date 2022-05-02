import React from 'react';
import { Link } from 'react-router-dom';
import AlternativeNavbar from '../../Shared/AlternativeNavbar/AlternativeNavbar';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <AlternativeNavbar />
      <div className="">
        <form onSubmit={handleSubmit} className="w-full lg:w-1/2 mx-auto my-10">
          <div className="bg-gray-100 rounded-lg px-3 sm:px-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 py-14">
            <h2 className="text-gray-900 text-2xl text-center font-medium title-font mb-3">
              Sign Up
            </h2>
            <div className="">
              <p className="text-center font-semibold text-slate-400 mb-1">
                Social Sign Up
              </p>
              <SocialLogin />
              <div className="flex w-full justify-between items-center mt-2">
                <div className="border-b-2 border-red-600 w-1/3"></div>
                <p className="w-1/3 mx-auto text-center text-slate-400 font-semibold">
                  Or sign up with credentials
                </p>
                <div className="border-b-2 border-red-600 w-1/3"></div>
              </div>
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="full-name"
                className="leading-7 text-sm text-gray-600"
              >
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Your Name"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Your Email"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Password"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="confirm-password"
                className="leading-7 text-sm text-gray-600"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="confirm-password"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Confirm Password"
              />
            </div>
            <p className="">
              Already have an account?{' '}
              <Link
                className="text-blue-600 underline font-semibold"
                to="/login"
              >
                login Now
              </Link>
            </p>
            <p>
              Forgot Password?{' '}
              <Link
                className="text-blue-600 underline font-semibold"
                to="/resetPass"
              >
                Click here to reset
              </Link>
            </p>
            <input
              type="submit"
              value="SignUp"
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg cursor-pointer mt-2"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
