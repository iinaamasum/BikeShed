import React from 'react';

const SellingCard = (props) => {
  const { img, name, price, quantity, sup_name, des } = props.product;
  return (
    <>
      <div class="bg-slate-50">
        <div class="p-3 rounded">
          <img
            class="h-60 rounded w-full object-cover object-center mb-6"
            src="https://dummyimage.com/722x402"
            alt="content"
          />
          <h3 class="tracking-widest text-red-500 text-xs font-medium title-font">
            Suplier: {sup_name}
          </h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
            {name}
          </h2>
          <div className="relative bottom-0">
            <p class="leading-relaxed text-base mb-2 flex-1">{des}</p>
            <div className="flex justify-between items-center relative bottom-0">
              <p>Price: {price}</p>
              <p>Items Left: {quantity}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellingCard;
