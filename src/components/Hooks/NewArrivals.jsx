import { useState, useEffect } from "react";

const useNewArrivals = () => {
  const [newArrivals, setNewArrivals] = useState([]);
  const [error, setError] = useState(null);

  const fetchNewArrivals = async () => {
    try {
      const response = await fetch('/Products.json'); // Adjust URL if necessary
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const newArrivalProducts = data.filter((product) =>
        product.categories.includes("New Arrivals")
      );
      setNewArrivals(newArrivalProducts);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchNewArrivals();
  }, []);

  return { newArrivals, error };
};

export default useNewArrivals;
