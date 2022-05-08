import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Navbar from '../../Shared/Navbar/Navbar';
import UserDataCard from '../UserDataCard/UserDataCard';

const ManageItems = () => {
  const [items, setItems] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const url = `https://boiling-savannah-80856.herokuapp.com/items?email=${user.email}`;
    try {
      axios
        .get(url, {
          headers: {
            author: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        .then((res) => {
          setItems(res.data);
        });
    } catch (error) {}
  }, [user]);
  // console.log(items);
  return (
    <>
      <Navbar />
      <div style={{ maxWidth: '1300px' }} className="container px-4 mx-auto">
        <h2 className="text-center text-4xl text-purple-600 font-bold mt-5 mb-2">
          Your All Product:{' '}
          <span className="text-red-600">{user.displayName}</span>
        </h2>
        <p className="text-sm text-center font-medium text-slate-500">
          This products are added by you to sell via Me as a dealer. You can
          update any kind of information from the updated section clicking the
          update button.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 my-14">
          {items.map((item) => (
            <UserDataCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ManageItems;
