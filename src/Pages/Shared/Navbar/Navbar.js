import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { CgClose } from 'react-icons/cg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ActiveLink from '../../../ActiveLink';
import auth from '../../../firebase.init';
import userImg from '../../../images/image/user.png';
import logo from '../../../images/logo/logo.png';

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const navLinksOne = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'All Products', path: '/products' },
    { id: 3, name: 'Add Product', path: '/add-items' },
    { id: 4, name: 'Blog', path: '/blog' },
  ];
  const navLinksTwo = [
    { id: 1, name: 'My Items', path: '/my-items' },
    { id: 2, name: 'Add Items', path: '/add-items' },
    { id: 3, name: 'Manage Items', path: '/manage-items' },
  ];
  return (
    <>
      <nav className="flex flex-wrap items-center justify-between px-2 bg-slate-200 sticky top-0 z-50 w-full">
        <div
          style={{ maxWidth: '1300px' }}
          className="container px-4 lg:px-0 mx-auto flex flex-wrap items-center justify-between"
        >
          <div className="w-full relative flex justify-between lg:w-auto lg:block lg:items-center my-1">
            <Link to="/home" className="lg:w-1/3">
              <img className="h-14" src={logo} alt="" />
            </Link>
            <button
              className="cursor-pointer px-3 py-1 border border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setOpen(!open)}
            >
              {!open ? <GiHamburgerMenu size={30} /> : <CgClose size={30} />}
            </button>
          </div>
          <div className="lg:flex lg:items-center lg:w-4/5 justify-end">
            <div
              className={`lg:flex flex-grow items-between
              ${open ? 'block' : 'hidden'}`}
            >
              <div className="lg:flex lg:items-center lg:justify-between w-full lg:w-auto">
                <div className="w-full lg:flex lg:w-auto lg:ml-auto">
                  {navLinksOne.map((link) => (
                    <div
                      key={link.id}
                      className="lg:flex lg:items-center mr-0 lg:mr-5 text-gray-500 hover:text-red-500"
                    >
                      <ActiveLink
                        className="block my-2 lg:my-0 w-full lg:w-auto lg:inline-block font-bold"
                        to={link.path}
                      >
                        {link.name}
                      </ActiveLink>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              className={`lg:flex flex-grow items-between
              ${open ? 'block' : 'hidden'}`}
            >
              {user ? (
                <>
                  <div className="lg:flex lg:items-center lg:justify-between w-full lg:w-auto ml-auto">
                    <div className="w-full lg:flex lg:w-auto lg:ml-auto">
                      {navLinksTwo.map((link) => (
                        <div
                          key={link.id}
                          className="lg:flex lg:items-center mr-0 lg:mr-5 text-gray-500 hover:text-red-500"
                        >
                          <ActiveLink
                            className="block my-2 lg:my-0 w-full lg:w-auto lg:inline-block font-bold"
                            to={link.path}
                          >
                            {link.name}
                          </ActiveLink>
                        </div>
                      ))}
                    </div>
                  </div>
                  {user?.reloadUserInfo?.photoUrl ? (
                    <>
                      <img
                        title={user.displayName}
                        className="h-10 w-10 rounded-full mr-2 cursor-pointer"
                        src={user?.reloadUserInfo?.photoUrl}
                        alt=""
                      />
                    </>
                  ) : (
                    <>
                      <img
                        title={user?.displayName}
                        className="h-10 w-10 rounded-full mr-2 cursor-pointer"
                        src={userImg}
                        alt=""
                      />
                    </>
                  )}
                  <button
                    onClick={() => {
                      signOut(auth);
                      navigate('/');
                      toast.success('Successfully logged out');
                    }}
                    className="text-black my-2 lg:my-0 font-sans tracking-wider font-semibold text-md mr-3 hover:bg-gray-100 px-5 py-1 rounded-full hover:text-red-700 shadow hover:shadow outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150 lg:w-auto"
                    type="button"
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <div className="ml-auto">
                  <button
                    onClick={() => navigate('/login')}
                    className="text-black my-2 lg:my-0 font-sans tracking-wider font-semibold text-md mr-3 hover:bg-gray-100 px-5 py-1 rounded-full hover:text-red-700 shadow hover:shadow outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150 lg:w-auto"
                    type="button"
                  >
                    Log In
                  </button>
                  <button
                    onClick={() => navigate('/signup')}
                    className="bg-purple-600 my-2 lg:my-0 text-white active:bg-purple-800
                  hover:bg-purple-800 font-bold  text-md px-5 py-1 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150 lg:w-auto tracking-wider mr-3"
                    type="button"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
