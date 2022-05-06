import React from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { MdOutlinePublishedWithChanges } from 'react-icons/md';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useProducts from '../../hooks/useProducts.js';
import Navbar from '../Shared/Navbar/Navbar';

const AllProducts = () => {
  const [products, setProducts] = useProducts([]);
  const navigate = useNavigate();

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
    const url = `http://localhost:5000/product/${id}`;

    fetch(url, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const left = products.filter((product) => product._id !== id);
          setProducts(left);
          toast.success('Deleted the item successfully...');
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
                    <tbody key={product._id}>
                      <tr className="border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900">
                          <img
                            className="h-20 w-20 rounded-full"
                            src={product.img}
                            alt=""
                          />
                        </td>
                        <td className="text-md text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                          {product.name}
                        </td>
                        <td className="text-md text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                          {product.sup_name}
                        </td>
                        <td className="text-md text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                          {product.price}
                        </td>
                        <td className="text-md text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                          {product.quantity}
                        </td>
                        <td className="text-md text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                          <div className="flex">
                            <MdOutlinePublishedWithChanges
                              onClick={() =>
                                navigate(`/productUpdate/${product._id}`)
                              }
                              size={30}
                              className="mr-2 cursor-pointer text-green-600"
                            />
                            <RiDeleteBin2Fill
                              onClick={() => deletion(product._id)}
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

export default AllProducts;
