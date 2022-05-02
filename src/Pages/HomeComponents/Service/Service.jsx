import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import ban from '../../../images/image/ban4.jpg';

const Service = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <div
        data-aos="fade-up"
        style={{
          backgroundImage: `url(${ban})`,
        }}
        className="bg-cover bg-center"
      >
        <div className="backdrop__blur w-full h-full pt-10 md:pt-24 pb-10">
          <div className="pl-4 flex items-center">
            <div className="text-white ml-2 lg:ml-5">
              <h1 className="text-red-500 text-md">YOUR RIDE START HERE.</h1>
              <h4 className="text-5xl text-orange-600 font-bold  mb-5">
                Bike Services & Repair
              </h4>
              <div className="grid grid-cols-2 w-full lg:w-2/3 gap-10">
                <div className="">
                  <h2 className="font-semibold text-lg mb-3">
                    <span className="text-red-600 font-bold">01.</span> Tunner -
                    up & Builds
                  </h2>
                  <p className="mb-5 text-gray-400 font-medium">
                    Vel illum dolore eu feugiat nulla facilisis at vero eros et
                    accu qui blandit
                  </p>
                </div>

                <div className="">
                  <h2 className="font-semibold text-lg mb-3">
                    <span className="text-red-600 font-bold">02.</span> Adjust
                    and install
                  </h2>
                  <p className="mb-5 text-gray-400 font-medium">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod
                  </p>
                </div>
                <div className="">
                  <h2 className="font-semibold text-lg mb-3">
                    <span className="text-red-600 font-bold">03.</span> Personal
                    Bike Fit
                  </h2>
                  <p className="mb-5 text-gray-400 font-medium">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris
                  </p>
                </div>
                <div className="">
                  <h2 className="font-semibold text-lg mb-3">
                    <span className="text-red-600 font-bold">04.</span> Free
                    Delivery
                  </h2>
                  <p className="mb-5 text-gray-400 font-medium">
                    Vel illum dolore eu feugiat nulla facilisis at vero eros et
                    accu qui blandit
                  </p>
                </div>
              </div>
              <button className="bg-purple-500 py-2 px-4 rounded text-white font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
