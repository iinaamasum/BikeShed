import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo/logo.png';

const AlternativeNavbar = () => {
  return (
    <div className="w-full bg-gray-300 sticky top-0 z-40">
      <div className="container flex justify-center px-5">
        <Link className="" to="/">
          <img className="h-20" src={logo} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default AlternativeNavbar;
