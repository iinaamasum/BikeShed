import React from 'react';
import { MdOutlinePublishedWithChanges } from 'react-icons/md';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { useNavigate, useParams } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';

const ProductsTable = (props) => {
  const [products, setProducts] = useProducts();
  const navigate = useNavigate();
  const { _id, img, name, sup_name, quantity, price } = props.product;
  const { productId } = useParams();
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
          console.log(data);
        }
      });
  };
  return (
    <tbody>
      <tr className="border-b">
        <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900">
          <img className="h-20 w-20 rounded-full" src={img} alt="" />
        </td>
        <td className="text-md text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
          {name}
        </td>
        <td className="text-md text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
          {sup_name}
        </td>
        <td className="text-md text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
          {price}
        </td>
        <td className="text-md text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
          {quantity}
        </td>
        <td className="text-md text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
          <div className="flex">
            <MdOutlinePublishedWithChanges
              onClick={() => navigate(`/productUpdate/${_id}`)}
              size={30}
              className="mr-2 cursor-pointer text-green-600"
            />
            <RiDeleteBin2Fill
              onClick={() => handleDelete(_id)}
              size={30}
              className="cursor-pointer text-red-600"
            />
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default ProductsTable;
