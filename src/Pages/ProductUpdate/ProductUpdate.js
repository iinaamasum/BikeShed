import React from 'react';
import { useParams } from 'react-router-dom';
import useSingleProduct from '../../hooks/useSingleProduct';
import userImg from '../../images/image/user.png';
import Navbar from '../Shared/Navbar/Navbar';

const ProductUpdate = () => {
  const { productId } = useParams();
  const [product] = useSingleProduct(productId);
  const { _id, name, img, des, price, quantity, sup_name } = product;
  return (
    <div>
      <Navbar />
      ProductUpdate: {product.name}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src={img}
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <img src={userImg} alt="" />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    <span>Supplier:</span> {sup_name}
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">{des}</p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <h2>{name}</h2>
                <h4>{price}</h4>
                <h4>{quantity}</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductUpdate;
