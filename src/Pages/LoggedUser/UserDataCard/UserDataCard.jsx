import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserDataCard = (props) => {
  const { img, name, price, quantity, sup_name, des, _id } = props.item;
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <div>
        <div
          data-aos="fade-up"
          style={{ height: '500px' }}
          className="rounded relative shadow-sm"
        >
          <img
            className="h-60 rounded w-full object-cover object-center mb-6"
            src="https://dummyimage.com/722x402"
            alt="content"
          />
          <h3 className="tracking-w_idest text-red-500 text-xs font-medium title-font px-2">
            Suplier: {sup_name}
          </h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4 px-2">
            {name}
          </h2>
          <p className="leading-relaxed text-base mb-2 flex-1 px-2">
            {des.slice(0, 150)}
          </p>
          <div className="absolute bottom-0 w-full">
            <div className="flex justify-between items-center relative bottom-0 text-red-600 text-lg font-bold mb-2 px-2">
              <p>Price: ${price}</p>
              <p>Items Left: {quantity}</p>
            </div>
            <button
              onClick={() => navigate(`/item/${_id}`)}
              className="w-full text-center bg-blue-600 py-2 rounded text-white font-bold hover:bg-blue-800"
            >
              Update The Item
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDataCard;
