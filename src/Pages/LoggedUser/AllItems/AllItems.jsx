import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { MdOutlinePublishedWithChanges } from 'react-icons/md';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Navbar from '../../Shared/Navbar/Navbar';

const AllItems = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);
  // const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const url = `http://localhost:5000/items?email=${user.email}`;
    axios.get(url).then((res) => {
      setItems(res.data);
    });
  }, []);

  const handleDelete = (id) => {
    const url = `http://localhost:5000/item/${id}`;

    fetch(url, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const left = items.filter((item) => item._id !== id);
          setItems(left);
          // console.log(data);
        }
      });
  };

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
                    <tbody key={item._id}>
                      <tr className="border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900">
                          <img
                            className="h-20 w-20 rounded-full"
                            src={item.img}
                            alt=""
                          />
                        </td>
                        <td className="text-md text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                          {item.name}
                        </td>
                        <td className="text-md text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                          {item.sup_name}
                        </td>
                        <td className="text-md text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                          {item.price}
                        </td>
                        <td className="text-md text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                          {item.quantity}
                        </td>
                        <td className="text-md text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                          <div className="flex">
                            <MdOutlinePublishedWithChanges
                              onClick={() => navigate(`/item/${item._id}`)}
                              size={30}
                              className="mr-2 cursor-pointer text-green-600"
                            />
                            <RiDeleteBin2Fill
                              onClick={() => handleDelete(item._id)}
                              size={30}
                              className="cursor-pointer text-red-600"
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
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
