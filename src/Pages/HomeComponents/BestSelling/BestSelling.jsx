import React from 'react';
import { BiRightArrow } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import SellingCard from '../SellingCard/SellingCard';

const BestSelling = () => {
  const navigate = useNavigate();
  const [products] = useProducts();
  return (
    <div
      style={{ maxWidth: '1300px' }}
      className="my-10 md:my-20 mx-auto container px-4"
    >
      <h4 className="text-center text-lg font-normal text-red-500 my-2">
        CHECK IT OUT
      </h4>
      <h1 className="text-center text-4xl md:text-5xl font-mono tracking-wide font-bold">
        Our Stock
      </h1>

      <div className="flex flex-wrap w-full my-10">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            The Best Products in the Stock
          </h1>
          <div className="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-600">
          This stock house will be a great place for your next cycle shop. It
          provides all the necessary equipment and supplies to get you through
          your cycle shop. It will also help you to get the most out of your
          cycle shop. You want to be able to shop at your cycle shop? Then you
          need to buy this stock house.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.slice(0, 6).map((product) => (
          <SellingCard key={product._id} product={product} />
        ))}
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => navigate('/products')}
          className="px-10 py-2 hover:bg-[#0e6188] bg-[#08475f] rounded my-5 font-semibold tracking-wide flex justify-center items-center text-white transition-all duration-200 "
        >
          See All Collections
          <BiRightArrow className="ml-2 text-xl" />
        </button>
      </div>
    </div>
  );
};

export default BestSelling;
