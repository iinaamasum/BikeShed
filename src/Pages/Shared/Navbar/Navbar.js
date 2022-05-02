import React, { useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../images/logo/logo.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const navLinksOne = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'All Products', path: '/products' },
    { id: 3, name: 'About', path: '/about' },
    { id: 4, name: 'Contact', path: '/contact' },
  ];
  const navLinksTwo = [
    { id: 1, name: 'Manage Items', path: '/manage-items' },
    { id: 2, name: 'Add Items', path: '/add-items' },
    { id: 3, name: 'My Items', path: '/my-items' },
  ];
  return (
    <>
      <nav className="flex flex-wrap items-center justify-between px-2 bg-slate-200 sticky top-0 z-50">
        <div
          style={{ maxWidth: '1300px' }}
          className="container px-4 lg:px-0 mx-auto flex flex-wrap items-center justify-between"
        >
          <div className="w-full relative flex justify-between lg:w-auto lg:block lg:items-center">
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
          <div className="lg:flex lg:items-center lg:w-2/3 justify-end">
            <div
              className={`lg:flex flex-grow items-between
              ${open ? 'block' : 'hidden'}`}
            >
              <div className="lg:flex lg:items-center lg:justify-between w-full lg:w-auto">
                <div className="w-full lg:w-auto">
                  {navLinksOne.map((link) => (
                    <Link
                      className="block my-2 lg:my-0 w-full lg:w-auto lg:inline-block mr-0 md:mr-6 font-semibold hover:text-red-800"
                      to={link.path}
                      key={link.id}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div
              className={`lg:flex flex-grow items-between
              ${open ? 'block' : 'hidden'}`}
            >
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
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
