import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../images/image/banner.jpg';
import Navbar from '../../Shared/Navbar/Navbar';
import BestSelling from '../BestSelling/BestSelling';
import FeaturedItems from '../FeaturedItems/FeaturedItems';
import OurFacilities from '../OurFacilities/OurFacilities';
import Services from '../Services/Services';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{ backgroundImage: `url(${banner})` }}
        className="bg-cover bg-center"
      >
        <div
          style={{
            backdropFilter: 'brightness(.35)',
            height: '90vh',
          }}
          className="flex
            items-center"
        >
          <div className="container px-5 lg:px-10">
            <p className="text-md text-green-500">
              Remember the freedom, fun, and sense of accomplishment
            </p>
            <h1 className="text-white font-bold uppercase text-4xl md:text-6xl mb-4">
              The house of dream
            </h1>

            <h2 className="text-md text-red-600 font-medium">
              Why are you waiting for? <br /> Want to see all Stock?{' '}
              <Link to="/products">
                <span className="text-blue-700 text-3xl underline">
                  Click Here
                </span>
              </Link>
            </h2>
          </div>
        </div>
      </div>
      <OurFacilities />
      <FeaturedItems />
      <BestSelling />
      <Services />
    </div>
  );
};

export default Home;
