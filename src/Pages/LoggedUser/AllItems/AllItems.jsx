import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import ProductsTable from '../../ProductsTable/ProductsTable';
import Navbar from '../../Shared/Navbar/Navbar';

const AllItems = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/items?email=${user.email}`;
    axios.get(url).then((res) => {
      setItems(res.data);
    });
  }, [user, items]);

  return (
    <div>
      <Navbar />
      <div
        style={{ maxWidth: '1300px', minHeight: '50vh' }}
        className="container px-4 mx-auto"
      >
        <h2 className="text-4xl text-center text-purple-500 my-5 lg:my-10 font-bold">
          Products of the user{': '}
          <span className="text-red-600">{user.displayName}</span>
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
                  {items?.map((item) => (
                    <ProductsTable key={item._id} product={item} />
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

export default AllItems;
