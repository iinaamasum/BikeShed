import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';

const Blog = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{ maxWidth: '1300px' }}
        className="container px-5 md:px-0 mx-auto"
      >
        <h1 className="text-4xl text-center font-bold text-indigo-600 mt-10">
          Important Question & Answer
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 my-10">
          <div className="bg-gray-50 rounded-lg p-5 md:p-10">
            <h2 className="text-2xl text-blue-500 font-medium">
              What is the purpose of jwt and how does it work?
            </h2>
            <p className="text-md font-normal text-slate-600 mt-3">
              JWT is the abbreviation of JSON Web Token. It is used to secure
              api. If we don't use jwt for securing the api it is high chance to
              hack all of the important data by the hackers. JWT is usually
              issued when the user is created as a secret token which is stored
              in localStorage or httpOnly cookies which is required for every
              api call and the backend code verify the token is valid or not. If
              valid then give the data as response otherwise logout the user and
              navigate to the login page.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-5 md:p-10">
            <h2 className="text-2xl text-blue-500 font-medium">
              When should you use nodejs and when should you use mongodb?
            </h2>
            <p className="text-md font-normal text-slate-600 mt-3">
              MongoDB is a server service provider which provide us storage to
              store data securely. When the user want to create, delete, update,
              read the data it provides it. On the other side, nodejs is a cross
              platform backend javascript runtime environment that helps us to
              communicate the client side to the server side to do such CRUD
              operations. It is not mandatory to use nodejs for MongoDB server.
              We can use other server side language also. But mongodb is a nosql
              database which use JSON to store data. so we can use nodejs to
              remain same test of javascript in both to client side and the
              server side.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-5 md:p-10 mb-10">
          <h2 className="text-2xl text-blue-500 font-medium text-center">
            Differences between sql and nosql databases
          </h2>
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-xl font-semibold text-gray-900 px-6 py-4 text-center"
                      >
                        SQL
                      </th>
                      <th
                        scope="col"
                        className="text-xl font-semibold text-gray-900 px-6 py-4 text-center"
                      >
                        NoSQL
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900">
                        1) It is relational database
                      </td>
                      <td className="text-md text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                        1) It is non-relational database
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900">
                        2) use structured query language and have a predefined
                        type.
                      </td>
                      <td className="text-md text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                        2) NoSQL databases have dynamic type for unstructured
                        data. mostly use JSON
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900">
                        3) these databases are table based{' '}
                      </td>
                      <td className="text-md text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                        3) these databases are document, key-value such as JSON
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-5 md:p-10 mb-10">
          <h2 className="text-2xl text-blue-500 font-medium text-center">
            Differences between sql and nosql databases
          </h2>
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-xl font-semibold text-gray-900 px-6 py-4 text-center"
                      >
                        Javascript
                      </th>
                      <th
                        scope="col"
                        className="text-xl font-semibold text-gray-900 px-6 py-4 text-center"
                      >
                        NodeJS
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900">
                        1) javascript is a single thread programming language
                      </td>
                      <td className="text-md text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                        1) NodeJS is a Javascript runtime environment
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900">
                        2) Only runs in the browser type.
                      </td>
                      <td className="text-md text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                        2) can be run outside the browser
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900">
                        3) It is used for front-end development
                      </td>
                      <td className="text-md text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                        3) It is used in server-side to connect client side to
                        the database
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
