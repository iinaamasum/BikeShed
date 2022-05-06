import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import loadingImg from '../../../images/logo/cupertino_activity_indicator.gif';

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return (
      <>
        <div className="h-[100vh] flex items-center justify-center">
          <img className="bg-white h-40" src={loadingImg} alt="" />
        </div>
      </>
    );
  }
  if (error) {
    return toast('Error...');
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
