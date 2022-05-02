import React from 'react';
import banner from '../../../images/image/robert-bye-tG36rvCeqng-unsplash.jpg';
import Navbar from '../../Shared/Navbar/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <img className="h-[90vh] w-full object-cover" src={banner} alt="" />
      </div>
    </div>
  );
};

export default Home;
