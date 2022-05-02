import React from 'react';
import useProducts from '../../hooks/useProducts';
import SellingCard from '../HomeComponents/SellingCard/SellingCard';
import Navbar from '../Shared/Navbar/Navbar';

const AllProducts = () => {
  const [products] = useProducts();
  return (
    <div>
      <Navbar />
      <div style={{ maxWidth: '1300px' }} className="container px-4 mx-auto">
        <h2 className="text-4xl text-center text-rose-500 my-5 lg:my-10 font-bold">
          Available Products for Whole Sell
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {products.map((product) => (
            <SellingCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
