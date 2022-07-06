import axios from 'axios';
import { useEffect, useState } from 'react';

const useProducts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    const url = `https://boiling-savannah-80856.herokuapp.com/products`;
    axios
      .get(url)

      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      });
  }, []);

  return [products, setProducts];
};

export default useProducts;
