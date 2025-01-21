import { useState, useEffect } from "react";

const useBestSellers = () => {
  const [bestSellers, setBestSellers] = useState([]);
  const [error, setError] = useState(null);

  const fetchBestSellers = async () => {
    try {
      const response = await fetch('/Products.json'); // Adjust URL if necessary
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
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
