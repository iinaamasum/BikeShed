import React from 'react';

const SellingCard = (props) => {
    const { img, name, price, quantity, sup_name, des } = props.product;
    return (
        <>
            <div>
                <div
                    style={{ height: '500px' }}
                    className="rounded relative shadow-sm"
                >
                    <img
                        className="h-60 rounded w-full object-cover object-center mb-6"
                        src="https://dummyimage.com/722x402"
                        alt="content"
                    />
                    <h3 className="tracking-widest text-red-500 text-xs font-medium title-font">
                        Suplier: {sup_name}
                    </h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                        {name}
                    </h2>
                    <p className="leading-relaxed text-base mb-2 flex-1">
                        {des.slice(0, 150)}
                    </p>
                    <div className="absolute bottom-0 w-full">
                        <div className="flex justify-between items-center relative bottom-0 text-red-600 text-lg font-bold mb-2">
                            <p>Price: {price}</p>
                            <p>Items Left: {quantity}</p>
                        </div>
                        <button className="w-full text-center bg-blue-600 py-2 rounded text-white font-bold hover:bg-blue-800">
                            Update This Product
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SellingCard;
