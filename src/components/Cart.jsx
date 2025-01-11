import React, { useState, useEffect } from 'react';
import { Step, StepLabel, Stepper } from '@mui/material';

const steps = ['Shopping cart', 'Checkout details', 'Order complete'];

const CartStepper = ({ activeStep }) => {
  return (
    <div className="container mx-auto p-4 pb-8">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      <Stepper activeStep={activeStep} alternativeLabel className="w-full">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel
              className={`
                ${activeStep === index ? 'text-black font-medium' : 'text-gray-400'}
                ${index < activeStep ? 'text-green-500' : ''}
              `}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className="w-full h-[1px] bg-gray-300 relative bottom-3"></div>
    </div>
  );
};

const CartItem = ({ name, color, price, quantity, onQuantityChange, onRemove }) => {
  return (
    <div className="flex items-center py-4 border-b border-gray-200">
      <div className="w-24 h-24 bg-gray-100 rounded mr-4">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(https://via.placeholder.com/96)` }}
        ></div>
      </div>
      <div className="flex-grow">
        <h3 className="font-medium">{name}</h3>
        <p className="text-sm text-gray-500">Color: {color}</p>
        <div className="flex items-center mt-2">
          <button
            onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
            className="px-2 py-1 bg-gray-200 rounded"
          >
            -
          </button>
          <span className="mx-2">{quantity}</span>
          <button
            onClick={() => onQuantityChange(quantity + 1)}
            className="px-2 py-1 bg-gray-200 rounded"
          >
            +
          </button>
          <span
            className="ml-4 text-gray-500 cursor-pointer"
            onClick={onRemove}
          >
            Remove
          </span>
        </div>
      </div>
      <div className="text-right">
        <p>${price * quantity}</p>
      </div>
    </div>
  );
};

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [shipping, setShipping] = useState('free');
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [activeStep, setActiveStep] = useState(0);




  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cartItems'));
    if (savedCart && savedCart.length > 0) {
      setCartItems(savedCart);
    } else {
      const initialCartItems = [
        { name: 'Item 1', color: 'Red', price: 20, quantity: 1 },
        { name: 'Item 2', color: 'Blue', price: 15, quantity: 2 },
        { name: 'Item 3', color: 'Green', price: 30, quantity: 1 },
      ];
      setCartItems(initialCartItems);
    }
  }, []);
  

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleQuantityChange = (index, newQuantity) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = newQuantity;
    setCartItems(updatedCartItems);
  };

  const handleRemoveItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const calculateShipping = () => {
    if (shipping === 'express') return 15;
    if (shipping === 'pickup') return 21;
    return 0;
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const shippingCost = calculateShipping();
    return subtotal + shippingCost - discount;
  };

  const handleApplyCoupon = () => {
    if (couponCode === 'DISCOUNT10') {
      setDiscount(10);
      alert('Coupon applied! $10 off.');
    } else {
      alert('Invalid coupon code.');
    }
  };

  const handleProceedToCheckout = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    setActiveStep(1); // Move to the "Checkout details" step
  };

  return (
    <div className="container mx-auto p-8">
      <CartStepper activeStep={activeStep} />
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty!</p>
      ) : (
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3 md:mr-8">
            {cartItems.map((item, index) => (
              <CartItem
                key={index}
                name={item.name}
                color={item.color}
                price={item.price}
                quantity={item.quantity}
                onQuantityChange={(newQuantity) =>
                  handleQuantityChange(index, newQuantity)
                }
                onRemove={() => handleRemoveItem(index)}
              />
            ))}
            <div className="mt-6">
              <h2 className="text-lg font-medium mb-2">Have a coupon?</h2>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="border border-gray-300 rounded px-4 py-2 flex-grow mr-2"
                />
                <button
                  onClick={handleApplyCoupon}
                  className="bg-gray-800 text-white rounded px-6 py-2"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 bg-gray-100 p-6 rounded">
            <h2 className="text-lg font-medium mb-4">Cart Summary</h2>
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="free"
                  checked={shipping === 'free'}
                  onChange={(e) => setShipping(e.target.value)}
                  className="mr-2"
                />
                Free shipping
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="express"
                  checked={shipping === 'express'}
                  onChange={(e) => setShipping(e.target.value)}
                  className="mr-2"
                />
                Express shipping (+$15)
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="pickup"
                  checked={shipping === 'pickup'}
                  onChange={(e) => setShipping(e.target.value)}
                  className="mr-2"
                />
                Pick Up (+$21)
              </label>
            </div>
            <div className="border-t border-gray-300 pt-4">
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${calculateSubtotal()}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Discount</span>
                <span>-${discount}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>${calculateShipping()}</span>
              </div>
              <div className="flex justify-between">
                <span>Total</span>
                <span className="font-medium">${calculateTotal()}</span>
              </div>
              <button
                onClick={handleProceedToCheckout}
                className="bg-black text-white rounded w-full py-3 mt-6"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
