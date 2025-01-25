import { useState, useEffect } from "react";

import axios from "axios";

const useBestSellers = () => {
  const [bestSellers, setBestSellers] = useState([]);
  const [error, setError] = useState(null);

  const fetchBestSellers = async () => {
    try {
      const response = await axios.get('/Products.json'); // Adjust the URL if necessary
      const data = response.data; // Accessing response data directly
      const bestSellersProducts = data.filter((product) =>
        product.categories.includes("Best Sellers")
      );
      setBestSellers(bestSellersProducts);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchBestSellers();
  }, []);

  return { bestSellers, error };
};

export default useBestSellers;
