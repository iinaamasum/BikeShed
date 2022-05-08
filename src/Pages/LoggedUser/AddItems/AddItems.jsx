import axios from 'axios';
import React, { useState } from 'react';
import FileBase64 from 'react-file-base64';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';
import Navbar from '../../Shared/Navbar/Navbar';

const AddItems = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user] = useAuthState(auth);
  const { register, handleSubmit, errors, reset } = useForm();
  const [image, setImage] = useState({
    img: '',
  });
  const onSubmit = (data) => {
    const url = 'https://boiling-savannah-80856.herokuapp.com/item';
    setIsLoading(true);
    axios
      .post(url, {
        ...data,
        img: image.img,
        email: user.email,
        sup_name: user.displayName,
      })
      .then((res) => {
        if (res.data.acknowledged) {
          setIsLoading(false);
          toast('Item Added Successfully...');
          reset();
        }
      });
  };
  return (
    <>
      <Navbar />
      {errors && toast(errors)}
      <>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div
              style={{ maxWidth: '1300px' }}
              className="container mx-auto px-4"
            >
              <div className="bg-slate-200 my-10 lg:my16 w-full md:w-3/4 lg:w-3/5 mx-auto px-5 md:px-20 pt-5 pb-10 rounded">
                <h2 className="text-center font-bold text-2xl md:text-3xl text-purple-700 mb-2">
                  Add Desired Items for Sell
                </h2>
                <h5 className="text-sm text-slate-600 my-2">
                  The Deller will help you to sell the products as soon as
                  possible for 2% of charge. So why are you waiting for. Please,
                  fill up the form quickly.
                </h5>
                <form onSubmit={handleSubmit(onSubmit)} className="">
                  <div className="flex items-center w-full">
                    <div className="w-1/2 mr-3">
                      <label
                        className="text-sm font-medium mt-1"
                        htmlFor="sup_name"
                      >
                        Supplier Name(Can't change)
                      </label>
                      <br />
                      <input
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-red-600 font-medium text-semibold py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        readOnly
                        disabled
                        value={user?.displayName}
                      />
                    </div>
                    <div className="w-1/2">
                      <label
                        className="text-sm font-medium mt-1"
                        htmlFor="sup_name"
                      >
                        Supplier Email(Can't change)
                      </label>
                      <br />
                      <input
                        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-red-600 font-medium text-semibold py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        readOnly
                        disabled
                        value={user.email}
                      />
                    </div>
                  </div>
                  <div>
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
                      <label
                        className="text-sm font-medium mt-1"
                        htmlFor="price"
                      >
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
                      <label
                        className="text-sm font-medium mt-1"
                        htmlFor="quantity"
                      >
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
                      Picture of the item(Not Mandatory)
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
        )}
      </>
    </>
  );
};

export default AddItems;
