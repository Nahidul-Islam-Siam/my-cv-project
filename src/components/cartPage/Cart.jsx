import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import s1 from '../assets/short1.png'

const CartItem = ({ item, onQuantityChange, onRemove }) => (
  <div className="flex items-center py-4 border-b border-gray-200">
    <div className="w-24 h-24 bg-gray-100 rounded mr-4 shadow-sm overflow-hidden">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="flex-grow">
      <h3 className="font-semibold text-gray-800">{item.name}</h3>
      <p className="text-sm text-gray-500">Color: {item.color}</p>
      <div className="flex items-center mt-2">
        <button
          onClick={() => onQuantityChange(item.id, Math.max(1, item.quantity - 1))}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
        >
          -
        </button>
        <span className="mx-3">{item.quantity}</span>
        <button
          onClick={() => onQuantityChange(item.id, item.quantity + 1)}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
        >
          +
        </button>
        <span
          className="ml-4 text-red-500 cursor-pointer hover:underline"
          onClick={() => onRemove(item.id)}
        >
          Remove
        </span>
      </div>
    </div>
    <div className="text-right font-medium text-gray-800">${item.price * item.quantity}</div>
  </div>
);

const Cart = () => {
  const initialCartItems = [
    {
      id: 1,
      name: 'Tray Table',
      color: 'Black',
      price: 19,
      quantity: 2,
      image: s1,
    },
    {
      id: 2,
      name: 'Tray Table',
      color: 'Red',
      price: 19,
      quantity: 2,
      image: s1
    },
    {
      id: 3,
      name: 'Table Lamp',
      color: 'Gold',
      price: 39,
      quantity: 1,
      image: s1
    },
  ];

  const [cartItems, setCartItems] = useState(initialCartItems);
  const [shipping, setShipping] = useState('free');
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)));
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const calculateSubtotal = () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const calculateShipping = () => {
    switch (shipping) {
      case 'express':
        return 15;
      case 'pickup':
        return 21;
      default:
        return 0;
    }
  };

  const calculateTotal = () => calculateSubtotal() + calculateShipping() - discount;

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
    // Navigate to checkout page
  };

  return (
    <div className="container mx-auto p-8">
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty!</p>
      ) : (
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemoveItem}
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
                  className="border border-gray-300 rounded px-4 py-2 flex-grow mr-2 focus:ring-2 focus:ring-gray-300"
                />
                <button
                  onClick={handleApplyCoupon}
                  className="bg-black text-white rounded px-6 py-2 hover:bg-gray-700 transition"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 bg-gray-50 p-6 rounded-md border border-gray-300 shadow-md">
            <h2 className="text-lg font-medium mb-4">Cart Summary</h2>
            <div className="mb-4 space-y-2">
              <label className="flex items-center rounded-md border border-gray-300 p-4">
                <input
                  type="radio"
                  value="free"
                  checked={shipping === 'free'}
                  onChange={(e) => setShipping(e.target.value)}
                  className="mr-2"
                />
                Free shipping
              </label>
              <label className="flex items-center rounded-md border border-gray-300 p-4">
                <input
                  type="radio"
                  value="express"
                  checked={shipping === 'express'}
                  onChange={(e) => setShipping(e.target.value)}
                  className="mr-2"
                />
                Express shipping (+$15)
              </label>
              <label className="flex items-center rounded-md border border-gray-300 p-4">
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
                <span className="font-medium text-xl">${calculateTotal()}</span>
              </div>
              <button
                onClick={handleProceedToCheckout}
                className="bg-black text-white rounded w-full py-3 mt-6 hover:bg-gray-700 transition"
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

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onQuantityChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};
