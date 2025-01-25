import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams(); // Get the id from the route parameters
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Fetch all products from the JSON file
        const response = await axios.get('/Products.json');
        
        // Find the product with the matching id
        const foundProduct = response.data.find((item) => item.id === parseInt(id));

        if (foundProduct) {
          setProduct(foundProduct); // Set the product in the state
        } else {
          console.error('Product not found!');
        }
      } catch (error) {
        console.error('Error fetching product details:', error);
      } finally {
        setLoading(false); // Set loading to false after the fetch completes
      }
    };

    fetchProduct();
  }, [id]); // Dependency array makes this effect run when 'id' changes

  // Display loading message while the product is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  // Display message if no product is found
  if (!product) {
    return <div>Product not found!</div>;
  }

  // Display the product details once loaded
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Stock: {product.name}</p>
    </div>
  );
};

export default ProductDetails;
