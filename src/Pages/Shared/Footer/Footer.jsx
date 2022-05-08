import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import { GrTwitter } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo/logo.png';

const Footer = () => {
  const navLinksOne = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'All Products', path: '/products' },
    { id: 3, name: 'Add Product', path: '/addProduct' },
    { id: 4, name: 'Blog', path: '/blog' },
    { id: 5, name: 'Contact Us', path: '/contact' },
  ];
  const navLinksTwo = [
    { id: 1, name: 'Manage Items', path: '/manage-items' },
    { id: 2, name: 'Add Items', path: '/add-items' },
    { id: 3, name: 'My Items', path: '/my-items' },
  ];
  return (
    <footer className="bg-gray-800 text-white">
      <div
        style={{ maxWidth: '1300px' }}
        className="container px-5 py-10 mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 md:text-left  order-first justify-between">
          <div className="flex justify-between">
            <div className="w-1/2 px-4">
              <h2 className="title-font font-medium text-blue-600 tracking-wide text-xl mb-3">
                Important Links
              </h2>
              <nav className="">
                {navLinksOne.map((link) => (
                  <Link
                    className="block text-slate-300 hover:text-red-600"
                    to={link.path}
                    key={link.id}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="w-1/2 px-4">
              <h2 className="font-medium text-blue-600 tracking-wide text-xl mb-3">
                User Section
              </h2>
              <nav className="list-none">
                {navLinksTwo.map((link) => (
                  <Link
                    className="block text-slate-300 hover:text-red-600"
                    to={link.path}
                    key={link.id}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          <div className="w-full px-4">
            <h2 className="text-center font-medium text-blue-600 tracking-wide text-xl mb-3">
              Contact Us
            </h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start w-full">
              <div className="w-full lg:w-2/3 ml-auto">
                <p>Your Advice</p>
                <textarea
                  className="w-full  bg-opacity-50 rounded border border-gray-500 focus:border-red-500 outline-none text-slate-600 text-lg font-semibold py-2 px-3 transition-all duration-200 ease-in-out"
                  name=""
                  id=""
                  cols="30"
                  rows="3"
                  placeholder="Enter your opinion..."
                ></textarea>
                <label
                  htmlFor="footer-field"
                  className="leading-7 text-sm text-slate-300"
                >
                  Email
                </label>
                <div className="flex">
                  <input
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    className="w-full  bg-opacity-50 rounded-l-full border border-gray-500 focus:border-red-500 outline-none text-slate-600 text-lg font-semibold py-2 px-3 transition-all duration-200 ease-in-out"
                    placeholder="Enter Your Email..."
                  />
                  <input
                    className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded-r-full"
                    type="submit"
                    value="Submit"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-600">
        <div
          style={{ maxWidth: '1300px' }}
          className="container px-5 mx-auto flex items-center sm:flex-row flex-col"
        >
          <Link to="/">
            <img className="h-20" src={logo} alt="" />
          </Link>

          <p className="text-lg text-slate-100 sm:ml-6 sm:mt-0 mt-4">
            &copy; 2022 bikeshed —
            <a
              href="https://github.com/iinaamasum"
              rel="noopener noreferrer"
              className="ml-1 text-red-500"
              target="_blank"
            >
              @iinaamasum
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a
              href="https://www.facebook.com/iinaamasum"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFacebook
                size={40}
                className="mr-3 cursor-pointer hover:text-slate-300"
              />
            </a>
            <a
              href="https://github.com/iinaamasum"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub
                size={40}
                className="mr-3 cursor-pointer hover:text-slate-300"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/iinaamasum"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin
                size={40}
                className="mr-3 cursor-pointer hover:text-slate-300"
              />
            </a>
            <a
              href="https://twitter.com/iinaamasum"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrTwitter
                size={40}
                className="mr-3 cursor-pointer hover:text-slate-300"
              />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
