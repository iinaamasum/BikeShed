import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo/logo.png';

const AlternativeNavbar = () => {
  return (
    <div className="w-full">
      <div className="container inline-flex justify-center px-5 bg-gray-300">
        <Link className="" to="/">
          <img className="h-20" src={logo} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default AlternativeNavbar;
