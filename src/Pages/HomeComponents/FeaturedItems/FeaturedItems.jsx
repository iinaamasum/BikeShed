import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import fech1 from '../../../images/image/chris-barbalis-Lpqg7ypu2B4-unsplash.jpg';
import fech2 from '../../../images/image/mac-blades-jpgJSBQtw5U-unsplash.jpg';
import fech3 from '../../../images/image/tiffany-nutt-0ClfreiNppM-unsplash.jpg';
import './FeaturedItems.css';

const FeaturedItems = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 bg-gray-700">
        <div
          data-aos="fade-up"
          style={{
            backgroundImage: `url(${fech1})`,
          }}
          className="h-60 md:h-96 bg-cover bg-center"
        >
          <div className="backdrop__blur w-full h-full pt-10 md:pt-24">
            <div className="pl-4 flex items-center">
              <div className="">
                <h3 className="text-5xl font-bold text-white mb-2">
                  Single track Speed
                </h3>
                <p className="text-gray-300 text-lg font-semibold">
                  The all new pro 29 series
                </p>
                <Link to="/products">
                  <button className="bg-purple-500 py-2 px-4 rounded text-white font-semibold">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          style={{
            backgroundImage: `url(${fech2})`,
          }}
          className="h-60 md:h-96 bg-cover bg-center"
        >
          <div className="backdrop__blur w-full h-full pt-10 md:pt-24">
            <div className="pl-4 flex items-center">
              <div className="">
                <h3 className="text-5xl font-bold text-orange-600 mb-2">
                  Trail Power
                </h3>
                <p className="text-gray-300 text-lg font-semibold">
                  25% Off trance
                </p>
                <Link to="/products">
                  <button className="bg-slate-50 py-2 px-4 rounded text-black font-semibold">
                    Discover More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          style={{
            backgroundImage: `url(${fech3})`,
          }}
          className="h-60 md:h-96 bg-cover bg-center"
        >
          <div className="backdrop__blur w-full h-full pt-10 md:pt-24">
            <div className="pl-4 flex items-center">
              <div className="">
                <h3 className="text-5xl font-bold text-green-700 mb-2">
                  Road Bikes
                </h3>
                <p className="text-gray-300 text-lg font-semibold">
                  New Style Just Got In
                </p>
                <Link to="/products">
                  <button className="bg-purple-500 py-2 px-4 rounded text-white font-semibold">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItems;
