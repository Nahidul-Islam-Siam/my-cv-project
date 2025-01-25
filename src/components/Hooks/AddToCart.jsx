import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

// Create the context
const CartContext = createContext();

// Reducer function to manage cart actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // Check if the product already exists in the cart
      const existingProductIndex = state.findIndex((item) => item.id === action.payload.id);

      if (existingProductIndex !== -1) {
        // If the product exists, increment the quantity
        const updatedCart = [...state];
        updatedCart[existingProductIndex].quantity += 1; // Increment the quantity of the existing product
        console.log(`Product ID ${action.payload.id} quantity increased.`);
        return updatedCart; // Return the updated cart
      }

      // If the product doesn't exist, add it with quantity 1
      console.log(`Product added to cart: ID ${action.payload.id}`);
      return [...state, { ...action.payload, quantity: 1 }]; // Add new product with quantity 1

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
  const [cart, dispatch] = useReducer(cartReducer, []);

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
