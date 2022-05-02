import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import ban1 from '../../../images/image/ban2.jpg';
import ban2 from '../../../images/image/viktor-keri-0gLH1kqRldc-unsplash.jpg';
import Service from '../Service/Service';

const Services = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="bg-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div
            data-aos="fade-up"
            style={{
              backgroundImage: `url(${ban1})`,
            }}
            className="h-60 md:h-96 bg-cover bg-center hover:-translate-x-10 transition-all duration-100"
          >
            <div className="backdrop__blur w-full h-full pt-3">
              <div className="pl-4 flex items-center">
                <div className="">
                  <h3 className="text-5xl font-bold text-white mb-2">
                    Mens Bike
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            style={{
              backgroundImage: `url(${ban2})`,
            }}
            className="h-60 md:h-96 bg-cover bg-center hover:-translate-x-10 transition-all duration-100"
          >
            <div className="backdrop__blur w-full h-full pt-3">
              <div className="pl-4 flex items-center">
                <div className="">
                  <h3 className="text-5xl font-bold text-white mb-2">
                    Accessories
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Service />
      </div>
    </>
  );
};

export default Services;
