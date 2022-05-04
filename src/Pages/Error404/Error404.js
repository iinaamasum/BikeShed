import React from 'react';
import Error from '../../images/image/error404.jpg';
import Navbar from '../Shared/Navbar/Navbar';

const Error404 = () => {
  return (
    <div>
      <Navbar />
      <img className="object-cover" src={Error} alt="" />
    </div>
  );
};

export default Error404;
