import axios from 'axios';
import React, { useState } from 'react';
import FileBase64 from 'react-file-base64';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Navbar from '../Shared/Navbar/Navbar';

const AddProduct = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit, errors, reset } = useForm();
  const [image, setImage] = useState({
    img: '',
  });
  const onSubmit = (data) => {
    const url = 'https://boiling-savannah-80856.herokuapp.com/productUp';
    axios
      .post(url, {
        ...data,
        img: image.img,
      })
      .then((res) => {
        if (res.data.acknowledged) {
          toast('Item Added Successfully...');
          reset();
        }
      });
  };
  return (
    <>
      <Navbar />
      {errors && toast(errors)}
      <div style={{ maxWidth: '1300px' }} className="container mx-auto px-4">
        <div className="bg-slate-200 my-10 lg:my16 w-full md:w-3/4 lg:w-3/5 mx-auto px-5 md:px-20 py-10 rounded">
          <h2 className="text-center font-bold text-2xl md:text-3xl text-purple-700 mb-2">
            Add Desired Product to Global
          </h2>

          <h4 className="text-center text-2xl font-semibold mb-5">
            Want to add new item for specific logged user only?{' '}
            <Link className="underline text-blue-600" to="/add-items">
              Click here
            </Link>
          </h4>
          <form onSubmit={handleSubmit(onSubmit)} className="py-5">
            <div className="flex items-center w-full">
              <div className="w-1/2 mr-3">
                <label className="text-sm font-medium mt-1" htmlFor="name">
                  Product Name
                </label>
                <br />
                <input
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Product Name"
                  {...register('name', { required: true })}
                />
              </div>
              <div className="w-1/2">
                <label className="text-sm font-medium mt-1" htmlFor="name">
                  Supplier Name
                </label>
                <br />
                <input
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Supplier Name"
                  {...register('sup_name', { required: true })}
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mt-1" htmlFor="des">
                Description
              </label>
              <br />
              <textarea
                cols="30"
                rows="3"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Description"
                {...register('des', { required: true })}
              ></textarea>
            </div>
            <div className="flex w-full">
              <div className="w-1/2 mr-2">
                <label className="text-sm font-medium mt-1" htmlFor="price">
                  Price
                </label>
                <br />
                <input
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Enter the price..."
                  type="number"
                  {...register('price', { required: true, min: 0 })}
                />
              </div>
              <div className="w-1/2">
                <label className="text-sm font-medium mt-1" htmlFor="quantity">
                  Quantity
                </label>
                <br />
                <input
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Enter the quantity to sell..."
                  type="number"
                  {...register('quantity', { required: true, min: 0 })}
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mt-1" htmlFor="img">
                Image of the product(optional)
              </label>
              <br />
              <FileBase64
                multiple={false}
                onDone={({ base64 }) => setImage({ img: base64 })}
              />
            </div>
            <input
              className="w-full bg-purple-500 hover:bg-purple-700 text-center font-semibold text-white py-2 px-2 mt-3 rounded cursor-pointer"
              type="submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
