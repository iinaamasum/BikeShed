import React, { useEffect, useState } from 'react';
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import AlternativeNavbar from '../../Shared/AlternativeNavbar/AlternativeNavbar';
import SocialLogin from '../SocialLogin/SocialLogin';

const LogIn = () => {
  // redirect to desired or home page if user is logged in
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const [signInWithEmailAndPassword, userLogin, loadingLogin, errorLogin] =
    useSignInWithEmailAndPassword(auth);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: '',
    pass: '',
  });
  const [errors, setErrors] = useState({
    emailError: '',
    passError: '',
  });

  const handleEmail = (e) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(e.target.value)) {
      setUserData({ ...userData, email: e.target.value });
      setErrors({ ...errors, emailError: '' });
    } else {
      setErrors({ ...errors, emailError: 'Invalid Email' });
      setUserData({ ...userData, email: '' });
    }
  };

  const handlePass = (e) => {
    if (e.target.value.length >= 6) {
      setUserData({ ...userData, pass: e.target.value });
      setErrors({ ...errors, passError: '' });
    } else {
      setUserData({ ...userData, pass: '' });
      setErrors({
        ...errors,
        passError:
          'Please Enter a password of six character with an special char!!!',
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.email === '') {
      setErrors({ ...errors, emailError: 'Email is required' });
    } else if (userData.pass === '') {
      setErrors({ ...errors, passError: 'Password is required' });
    } else {
      signInWithEmailAndPassword(userData.email, userData.pass);
    }
  };

  useEffect(() => {
    if (user) {
      toast.success(`Welcome ${user.displayName}`);
      navigate(from, { replace: true });
    }
  }, [user]);

  useEffect(() => {
    const error = errorLogin;
    if (error) {
      if (error.message.includes('auth/invalid-password')) {
        toast('Wrong password. Intruder!!');
      }
    }
  }, [errorLogin]);
  return (
    <div>
      <AlternativeNavbar />
      <div
        style={{ maxWidth: '1300px' }}
        className="container mx-auto px-4 my-20"
      >
        <div className="w-full lg:w-1/2 mx-auto">
          <div className="bg-slate-200 px-3 sm:px-8 flex flex-col md:ml-auto w-full py-14">
            <h2 className="text-4xl text-center font-medium text-red-600 title-font mb-3">
              Log In
            </h2>
            <div className="">
              <p className="text-center font-semibold text-slate-400 mb-1">
                Social login
              </p>
              <SocialLogin />
              <div className="flex w-full justify-between items-center mt-2">
                <div className="border-b-2 border-red-600 w-1/3"></div>
                <p className="w-1/3 mx-auto text-center text-slate-400 font-semibold">
                  Or login with credentials
                </p>
                <div className="border-b-2 border-red-600 w-1/3"></div>
              </div>
            </div>
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  onChange={handleEmail}
                  type="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Your Email"
                />
                <p className="text-sm text-red-600 font-medium">
                  {errors?.emailError ? errors.emailError : ''}
                </p>
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Password
                </label>
                <input
                  onChange={handlePass}
                  type="password"
                  name="password"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Password"
                />
                <p className="text-sm text-red-600 font-medium">
                  {errors?.passError ? errors.passError : ''}
                </p>
              </div>
              <p className="">
                Don't have an account?{' '}
                <Link
                  className="text-blue-600 underline font-semibold"
                  to="/signup"
                >
                  Sign Up Now
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
                value="Login"
                className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg cursor-pointer mt-2 w-full"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
