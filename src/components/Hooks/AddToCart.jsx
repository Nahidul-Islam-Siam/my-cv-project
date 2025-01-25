import React, { useEffect, useReducer } from "react";
import PropTypes from "prop-types";

// Create the context
const CartContext = React.createContext();

// Reducer function to manage cart actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      // Check if the product already exists in the cart
      const existingProductIndex = state.findIndex((item) => item.id === action.payload.id);

      if (existingProductIndex !== -1) {
        const existingProduct = state[existingProductIndex];
        if (existingProduct.quantity < 3) {
          // If the product exists and the quantity is less than 3, increment the quantity
          const updatedCart = [...state];
          updatedCart[existingProductIndex].quantity += 1; // Increment the quantity of the existing product
          console.log(`Product ID ${action.payload.id} quantity increased.`);
          return updatedCart; // Return the updated cart
        } else {
          console.warn(`Cannot add more than 3 of product ID ${action.payload.id}`);
          return state; // Return the unchanged cart if quantity is 3 or more
        }
      }

      // If the product doesn't exist, add it with quantity 1
      console.log(`Product added to cart: ID ${action.payload.id}`);
      return [...state, { ...action.payload, quantity: 1 }]; // Add new product with quantity 1
    }

    case "REMOVE_FROM_CART":
      console.log(`Product removed from cart: ID ${action.payload.id}`);
      return state.filter((item) => item.id !== action.payload.id);

    default:
      console.warn(`Unhandled action type: ${action.type}`);
      return state;
  }
};

// CartProvider component
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, [], (initial) => {
    const persistedCart = localStorage.getItem('cart');
    return persistedCart ? JSON.parse(persistedCart) : initial;
  });

  useEffect(() => {
    // Save the cart state to localStorage whenever it changes
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]); // Add cart as a dependency

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// PropTypes validation
CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartContext;
