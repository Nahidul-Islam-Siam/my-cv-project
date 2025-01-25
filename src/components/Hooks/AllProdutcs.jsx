import { useState, useEffect } from "react";

import axios from "axios";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/Products.json'); // Adjust the URL if necessary
      setProducts(response.data); // Response data is accessed directly
    } catch (err) {
      setError(err.message); // Handling error
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, error };
};

export default useProducts;
