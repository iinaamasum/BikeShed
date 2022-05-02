import React from 'react';
import ban1 from '../../../images/image/ban2.jpg';
import ban2 from '../../../images/image/viktor-keri-0gLH1kqRldc-unsplash.jpg';
import Service from '../Service/Service';

const Services = () => {
  return (
    <>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div
            style={{
              backgroundImage: `url(${ban1})`,
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
                  <button className="bg-purple-500 py-2 px-4 rounded text-white font-semibold">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${ban2})`,
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
                  <button className="bg-purple-500 py-2 px-4 rounded text-white font-semibold">
                    Learn More
                  </button>
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
