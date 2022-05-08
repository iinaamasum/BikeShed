import { useEffect, useState } from 'react';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = `https://boiling-savannah-80856.herokuapp.com/products`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return [products, setProducts];
};

export default useProducts;
