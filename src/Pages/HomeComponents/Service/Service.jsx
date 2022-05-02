import React from 'react';
import ban from '../../../images/image/ban4.jpg';

const Service = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${ban})`,
        }}
        className="h-[80vh] bg-cover bg-center"
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
  );
};

export default Service;
