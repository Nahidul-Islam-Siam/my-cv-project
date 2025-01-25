import axios from "axios";
import { useState, useEffect } from "react";

const useNewArrivals = () => {
  const [newArrivals, setNewArrivals] = useState([]);
  const [error, setError] = useState(null);

  const fetchNewArrivals = async () => {
    try {
    
      const response = await axios.get('/Products.json'); // Adjust the URL if necessary
      setNewArrivals(response.data); // Response data is accessed directly
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
