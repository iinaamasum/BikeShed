import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { useAuthState } from 'react-firebase-hooks/auth';
import { MdOutlinePublishedWithChanges } from 'react-icons/md';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Navbar from '../../Shared/Navbar/Navbar';

const AllItems = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);
  // const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const url = `http://localhost:5000/items?email=${user.email}`;
    const getItems = async () => {
      try {
        await axios
          .get(url, {
            headers: {
              author: `Bearer ${localStorage.getItem('token')}`,
            },
          })
          .then((res) => {
            setItems(res.data);
          });
      } catch (err) {
        toast.error(err.response.data.message);
        signOut(auth);
        navigate('/login');
      }
    };
    getItems();
  }, []);

  const deletion = (id) => {
    confirmAlert({
      title: (
        <span className="text-3xl text-semibold text-red-600">
          Confirm Deletion
        </span>
      ),
      message: (
        <span className="text-md">Are you sure to delete the item?</span>
      ),
      buttons: [
        {
          label: <span className="mr-2 w-1/2">No</span>,
          onClick: () => toast.error('Canceled by you'),
        },
        {
          label: <span className=" w-1/2">Yes, Delete it!</span>,
          onClick: () => handleDelete(id),
        },
      ],
    });
  };

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
          toast.success('Deleted the item successfully...');
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
        <h4 className="text-center text-2xl font-semibold mb-5">
          Want to add new item?{' '}
          <Link className="underline text-blue-600" to="/add-items">
            Click here
          </Link>
        </h4>
        <div className="flex flex-col mb-10 bg-gray-50 rounded-lg p-5">
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
                              title="Update The Product"
                              onClick={() => navigate(`/item/${item._id}`)}
                              size={30}
                              className="mr-2 cursor-pointer text-green-600"
                            />
                            <RiDeleteBin2Fill
                              title="Delete The Product"
                              onClick={() => deletion(item._id)}
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
