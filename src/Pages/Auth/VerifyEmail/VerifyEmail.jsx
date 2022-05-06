import React from 'react';
import {
  useAuthState,
  useSendEmailVerification,
} from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import loadingImg from '../../../images/logo/cupertino_activity_indicator.gif';
import Navbar from '../../Shared/Navbar/Navbar';

const VerifyEmail = () => {
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  if (sending) {
    return (
      <>
        <div className="h-[100vh] flex items-center justify-center">
          <img className="bg-white h-20" src={loadingImg} alt="" />
        </div>
      </>
    );
  }
  if (error) {
    toast(error);
  }
  if (user.emailVerified) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <Navbar />
      <div
        style={{ minHeight: '35vh' }}
        className="w-full md:w-1/2 mx-auto my-20 text-center"
      >
        <h2 className="text-red-700 text-4xl font-bold">
          Your email is not verified
        </h2>
        <button
          onClick={async () => {
            await sendEmailVerification();
            toast('Email verification link has been sent again.');
          }}
          className="px-5 py-2 bg-indigo-500 text-xl text-white rounded mt-2"
        >
          Resent Verification Link
        </button>
      </div>
    </div>
  );
};

export default VerifyEmail;
