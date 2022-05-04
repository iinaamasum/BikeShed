import { useEffect, useState } from 'react';

const useSingleProduct = (id) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [product]);
  // console.log(product);

  return [product, setProduct];
};

export default useSingleProduct;
