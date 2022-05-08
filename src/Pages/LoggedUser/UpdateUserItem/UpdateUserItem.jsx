import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import userImg from '../../../images/image/user.png';
import Navbar from '../../Shared/Navbar/Navbar';

const UpdateUserItem = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState({});
  const { _id, name, img, des, price, quantity, sup_name } = product;
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  useEffect(() => {
    const url = `https://boiling-savannah-80856.herokuapp.com/item/${itemId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const handleSubmit = (id, e) => {
    e.preventDefault();
    let add = parseInt(e.target.updateamount.value);
    if (isNaN(add)) {
      return toast.error('Please enter the quantity to add');
    }

    const url = `https://boiling-savannah-80856.herokuapp.com/item/${id}`;
    const q = parseInt(product.quantity) + add;

    axios
      .put(url, {
        quantity: q,
      })
      .then((res) => {
        setProduct({ ...product, quantity: q });
        toast.success(`Quantity increased: ${add} Successfully!!!`, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  const handleRemoveOne = (id, e) => {
    const q = product.quantity - 1;
    const url = `https://boiling-savannah-80856.herokuapp.com/item/${id}`;

    // updating by fetch :))))
    fetch(url, {
      method: 'PUT',
      body: JSON.stringify({
        quantity: q,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct({ ...product, quantity: q });
        toast.error('One item Removed!!!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <div>
      <Navbar />

      <section className="text-gray-600 body-font">
        <div className="container px-5 pt-10 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src={img}
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/2 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <img
                    className="w-20 h-20 rounded-full"
                    src={
                      user?.reloadUserInfo?.photoUrl
                        ? user?.reloadUserInfo?.photoUrl
                        : userImg
                    }
                    alt=""
                  />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    <span>Supplier:</span> {sup_name}
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">{des}</p>
                </div>
              </div>
              <div className="sm:w-1/2 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <h2 className="text-center text-purple-700 text-2xl md:text-4xl font-bold my-4">
                  Product: {name}
                </h2>
                <div className="flex text-md text-red-600 font-semibold justify-between items-center">
                  <h4>Price: {price}</h4>
                  <h4>Quantity: {quantity}</h4>
                </div>
                <button
                  onClick={() => handleRemoveOne(_id)}
                  className="w-full px-4 py-2 mt-2 bg-red-500 rounded text-white"
                >
                  Delivered
                </button>
                <form
                  onSubmit={(e) => {
                    handleSubmit(_id, e);
                  }}
                  className="mt-3 flex w-full items-center justify-center"
                >
                  <input
                    name="updateamount"
                    className="w-full bg-white rounded-l border border-gray-300 focus:border-indigo-500 outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="Enter the quantity..."
                    type="number"
                  />
                  <input
                    type="submit"
                    value="Restock Items"
                    className="px-4 py-2 bg-green-600 rounded-r text-white cursor-pointer border-y-2 border-green-600 mx-auto"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-3/4 mx-auto md:w-1/3 block">
        <button
          onClick={() => navigate(`/manage-items`)}
          className="bg-purple-600 px-5 py-2 rounded text-white hover:bg-purple-800 font-semibold w-full mt-3 mb-10  transition-all duration-200 ease-in-out"
        >
          Manage Own items
        </button>
      </div>
    </div>
  );
};

export default UpdateUserItem;
