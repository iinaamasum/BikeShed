import React from 'react';
import useProducts from '../../hooks/useProducts';
import ProductsTable from '../ProductsTable/ProductsTable';
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
        <div className="flex flex-col mb-10">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-xl font-semibold text-gray-900 px-6 py-4 text-left"
                      >
                        Photo
                      </th>
                      <th
                        scope="col"
                        className="text-xl font-semibold text-gray-900 px-6 py-4 text-left"
                      >
                        Product Name
                      </th>
                      <th
                        scope="col"
                        className="text-xl font-semibold text-gray-900 px-6 py-4 text-left"
                      >
                        Supplier
                      </th>
                      <th
                        scope="col"
                        className="text-xl font-semibold text-gray-900 px-6 py-4 text-left"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="text-xl font-semibold text-gray-900 px-6 py-4 text-left"
                      >
                        In Stock
                      </th>
                      <th
                        scope="col"
                        className="text-xl font-semibold text-gray-900 px-6 py-4 text-left"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  {products.slice(0, 6).map((product) => (
                    <ProductsTable key={product._id} product={product} />
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
