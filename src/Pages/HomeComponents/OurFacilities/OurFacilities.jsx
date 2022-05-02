import React from 'react';
import fac1 from '../../../images/facilitoes/fac1.png';
import fac2 from '../../../images/facilitoes/fac2.png';
import fac3 from '../../../images/facilitoes/fac3.png';

const OurFacilities = () => {
  return (
    <div>
      <div
        style={{ maxWidth: '1300px' }}
        className="container mx-auto px-4 my-10 md:my-20"
      >
        <h4 className="text-center font-serif text-red-500 ">
          YOUR RIDE START HERE.
        </h4>
        <h1 className="text-3xl md:text-5xl text-center font-semibold tracking-wide mb-8">
          Our Facilities & Features
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          <div className="mx-auto md:border-r-2 mt-5">
            <div className="w-full mb-5">
              <img className="h-40 mx-auto" src={fac1} alt="" />
            </div>
            <h4 className="font-semibold text-2xl mb-5">Complete Overhaul</h4>
            <p className="text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              fugit sint officiis excepturi distinctio dignissimos ipsam
              doloremque esse modi ex.
            </p>
          </div>
          <div className="mx-auto lg:border-r-2 mt-5">
            <div className="w-full mb-5">
              <img className="h-40 mx-auto" src={fac2} alt="" />
            </div>
            <h4 className="font-semibold text-2xl mb-5">
              Bike Fitting & Fast Delivery
            </h4>
            <p className="text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              fugit sint officiis excepturi distinctio dignissimos ipsam
              doloremque esse modi ex.
            </p>
          </div>
          <div className="mx-auto mt-5">
            <div className="w-full mb-5">
              <img className="h-40 mx-auto" src={fac3} alt="" />
            </div>
            <h4 className="font-semibold text-2xl mb-5">
              Custom Parts & Accessories
            </h4>
            <p className="text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              fugit sint officiis excepturi distinctio dignissimos ipsam
              doloremque esse modi ex.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFacilities;
