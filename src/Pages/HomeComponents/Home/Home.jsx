import React from 'react';
import banner from '../../../images/image/robert-bye-tG36rvCeqng-unsplash.jpg';
import Navbar from '../../Shared/Navbar/Navbar';
import OurFacilities from '../OurFacilities/OurFacilities';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <img className="h-[90vh] w-full object-cover" src={banner} alt="" />
      </div>
      <OurFacilities />
    </div>
  );
};

export default Home;
