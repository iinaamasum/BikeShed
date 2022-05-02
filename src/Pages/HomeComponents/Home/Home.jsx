import React from 'react';
import banner from '../../../images/image/robert-bye-tG36rvCeqng-unsplash.jpg';
import Navbar from '../../Shared/Navbar/Navbar';
import BestSelling from '../BestSelling/BestSelling';
import FeaturedItems from '../FeaturedItems/FeaturedItems';
import OurFacilities from '../OurFacilities/OurFacilities';
import Services from '../Services/Services';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <img className="h-[95vh] w-full object-cover" src={banner} alt="" />
      </div>
      <OurFacilities />
      <FeaturedItems />
      <BestSelling />
      <Services />
    </div>
  );
};

export default Home;
