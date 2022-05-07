import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import AlternativeNavbar from '../../Shared/AlternativeNavbar/AlternativeNavbar';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const [createUserWithEmailAndPassword, userInput, loadingInput, errorInput] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [user] = useAuthState(auth);
  const [updateProfile, updating, error] = useUpdateProfile(auth);

  const [userData, setUserData] = useState({
    email: '',
    pass: '',
    confirmPass: '',
    name: '',
  });
  const [errors, setErrors] = useState({
    emailError: '',
    passError: '',
    confirmPassError: '',
    nameError: '',
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
    const regex = /(?=.*[!#$%&?^*@~() "])/;
    if (regex.test(e.target.value)) {
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
  const handleConfirmPass = (e) => {
    if (e.target.value === userData.pass) {
      setUserData({ ...userData, confirmPass: e.target.value });
      setErrors({ ...errors, confirmPassError: '' });
    } else {
      setUserData({ ...userData, confirmPass: '' });
      setErrors({ ...errors, confirmPassError: 'Password does not match' });
    }
  };
  const handleName = (e) => {
    if (e.target.value) {
      setUserData({ ...userData, name: e.target.value });
      setErrors({ ...errors, nameError: '' });
    } else {
      setUserData({ ...userData, name: '' });
      setErrors({
        ...errors,
        nameError: 'Enter your name please.',
      });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userData.pass === userData.confirmPass) {
      await createUserWithEmailAndPassword(userData.email, userData.pass);
      await updateProfile({ displayName: userData.name });
      const { data } = await axios.post('http://localhost:5000/login', {
        email: userData.email,
      });
      localStorage.setItem('token', data.token);
      toast.success(
        `Congratulations ${user.displayName}. Account Created Successfully.`
      );
    } else {
      toast.error('Password does not match');
    }
  };

  useEffect(() => {
    if (user) {
      // console.log(user);
      if (
        user?.emailVerified ||
        user?.reloadUserInfo?.providerUserInfo[0]?.providerId !== 'password'
      ) {
        navigate(from, { replace: true });
      } else {
        toast.success('Email verification link sent to your email.');
        navigate('/verifyemail');
      }
    }
  }, [user]);

  useEffect(() => {
    const error = errorInput;
    if (error) {
      // console.log(error);
      if (error?.message.includes('auth/email-already-in-use')) {
        toast.error('This email is linked with another account');
      } else if (error?.message.includes('auth/invalid-email')) {
        toast.error('Email is invalid');
      }
    }
  }, [errorInput]);

  return (
    <div>
      <AlternativeNavbar />
      <div className="">
        <div className="w-full lg:w-1/2 mx-auto my-10">
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
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <label
                  htmlFor="full-name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Full Name
                </label>
                <input
                  onChange={handleName}
                  type="text"
                  id="full-name"
                  name="full-name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Your Name"
                  required
                />
                <p className="text-sm text-red-600 font-medium">
                  {errors?.nameError ? errors.nameError : ''}
                </p>
              </div>
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
                  required
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
                  required
                />
                <p className="text-sm text-red-600 font-medium">
                  {errors?.passError ? errors.passError : ''}
                </p>
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="confirm-password"
                  className="leading-7 text-sm text-gray-600"
                >
                  Confirm Password
                </label>
                <input
                  onChange={handleConfirmPass}
                  type="password"
                  name="confirm-password"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Confirm Password"
                  required
                />
                <p className="text-sm text-red-600 font-medium">
                  {errors?.confirmPassError ? errors.confirmPassError : ''}
                </p>
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
              <input
                type="submit"
                value="SignUp"
                className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg cursor-pointer mt-2 w-full"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
