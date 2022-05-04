import { useEffect, useState } from 'react';

const useSingleProduct = (id) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  // console.log(product);

  return [product];
};

export default useSingleProduct;
