import { useState } from 'react';
import PropTypes from 'prop-types';
// import chair1 from '../../assets/short1.png'
import short1 from '../../assets/short1.png';
const ContactInformation = ({ formData, handleInputChange, errors }) => (
    <div className="bg-white rounded-lg shadow p-6 mb-8">
      <h2 className="text-lg font-medium mb-4">Contact Information</h2>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        onChange={handleInputChange}
        value={formData.firstName}
        className="w-full border rounded px-3 py-2 mb-2"
      />
      {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName}</span>}
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        onChange={handleInputChange}
        value={formData.lastName}
        className="w-full border rounded px-3 py-2 mb-2"
      />
      {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName}</span>}
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        onChange={handleInputChange}
        value={formData.phone}
        className="w-full border rounded px-3 py-2 mb-2"
      />
      {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        onChange={handleInputChange}
        value={formData.email}
        className="w-full border rounded px-3 py-2 mb-2"
      />
      {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
    </div>
  );

const ShippingAddress = ({ formData, handleInputChange, errors }) => {
    return (
        <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-lg font-medium mb-4">Shipping Address</h2>
            <input
                type="text"
                name="streetAddress"
                placeholder="Street Address"
                onChange={handleInputChange}
                value={formData.streetAddress}
                className="w-full border rounded px-3 py-2 mb-2"
            />
            {errors.streetAddress && <span className="text-red-500 text-sm">{errors.streetAddress}</span>}
            <input
                type="text"
                name="city"
                placeholder="City"
                onChange={handleInputChange}
                value={formData.city}
                className="w-full border rounded px-3 py-2 mb-2"
            />
            {errors.city && <span className="text-red-500 text-sm">{errors.city}</span>}
            <input
                type="text"
                name="state"
                placeholder="State"
                onChange={handleInputChange}
                value={formData.state}
                className="w-full border rounded px-3 py-2 mb-2"
            />
            {errors.state && <span className="text-red-500 text-sm">{errors.state}</span>}
            <input
                type="text"
                name="zip"
                placeholder="Zip Code"
                onChange={handleInputChange}
                value={formData.zip}
                className="w-full border rounded px-3 py-2 mb-2"
            />
            {errors.zip && <span className="text-red-500 text-sm">{errors.zip}</span>}
        </div>
    );
};

const PaymentMethod = ({ formData, handleInputChange, errors }) => {
    return (
        <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-lg font-medium mb-4">Payment Method</h2>
            <div className="mb-4">
                <label className="inline-flex items-center">
                    <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={formData.paymentMethod === 'card'}
                        onChange={handleInputChange}
                        className="form-radio h-5 w-5 text-blue-600"
                    />
                    <span className="ml-2">Pay by Card</span>
                </label>
            </div>
            <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                onChange={handleInputChange}
                value={formData.cardNumber}
                className="w-full border rounded px-3 py-2 mb-2"
            />
            {errors.cardNumber && <span className="text-red-500 text-sm">{errors.cardNumber}</span>}
            <div className="flex">
                <input
                    type="text"
                    name="expiryDate"
                    placeholder="MM/YY"
                    onChange={handleInputChange}
                    value={formData.expiryDate}
                    className="w-1/2 border rounded px-3 py-2 mr-2"
                />
                <input
                    type="text"
                    name="cvc"
                    placeholder="CVC"
                    onChange={handleInputChange}
                    value={formData.cvc}
                    className="w-1/2 border rounded px-3 py-2"
                />
            </div>
            {errors.cvc && <span className="text-red-500 text-sm">{errors.cvc}</span>}
        </div>
    );
};

const OrderItem = ({ item, onQuantityChange, onRemove }) => (
    <div className="flex items-center py-4 border-b border-gray-200">
      <div className="w-24 h-24 bg-gray-100 rounded mr-4 shadow-sm overflow-hidden">
        <div
          className="w-full h-full bg-cover overflow-hidden bg-center"
          style={{ backgroundImage: `url(${item.image || "https://via.placeholder.com/96"})` }}
        ></div>
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
      <div className="text-right font-medium text-gray-800">${(item.price * item.quantity).toFixed(2)}</div>
    </div>
  );


const OrderSummary = ({ orderSummary, calculateTotal, handleQuantityChange, handleRemove }) => {
    return (
      <div className="border border-[#6C7275] rounded-lg p-6 mb-8">
        <h2 className="text-[28px] text-[#121212] font-medium poppins-font mb-4">Order Summary</h2>
        {orderSummary.items.map((item) => (
          <OrderItem
            key={item.id}
            item={item}
            onQuantityChange={(id, newQuantity) => handleQuantityChange(id, newQuantity)}
            onRemove={(id) => handleRemove(id)}
          />
        ))}
        <div className="flex justify-between mt-4 border-t pt-4">
          <div>Shipping</div>
          <div>Free</div>
        </div>
        <div className="flex justify-between mt-4">
          <div>Discount</div>
          <div>${orderSummary.discount.toFixed(2)}</div>
        </div>
        <div className="flex justify-between mt-4 font-medium">
          <div>Total</div>
          <div>${calculateTotal(orderSummary).toFixed(2)}</div>
        </div>
      </div>
    );
  };

const DiscountCode = ({ formData, handleInputChange, handleDiscountApply }) => {
    return (
        <div className="mt-4 flex">
            <input
                type="text"
                name="discountCode"
                onChange={handleInputChange}
                value={formData.discountCode}
                placeholder="Discount Code"
                className="w-1/2 border rounded px-3 py-2 mr-2"
            />
            <button onClick={handleDiscountApply} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Apply</button>
        </div>
    );
};

const Checkout = () => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      streetAddress: '',
      city: '',
      state: '',
      zip: '',
      paymentMethod: 'card',
      cardNumber: '',
      expiryDate: '',
      cvc: '',
      discountCode: '',
    });
  
    const [orderSummary, setOrderSummary] = useState({
      items: [
        { id: 1, name: 'Tray Table', color: 'Black', price: 105, quantity: 1, image: short1 },
        { id: 2, name: 'Tray Table', color: 'Red', price: 105, quantity: 1, image: short1 },
        { id: 3, name: 'Table Lamp', color: 'Gold', price: 24, quantity: 1, image: short1 },
      ],
      shipping: 0,
      discount: 0,
    });
  
    const [errors, setErrors] = useState({});
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
  
    const validateForm = () => {
      const newErrors = {};
      if (!formData.firstName) newErrors.firstName = "First name is required";
      if (!formData.lastName) newErrors.lastName = "Last name is required";
      if (!formData.phone) newErrors.phone = "Phone number is required";
      if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid email is required";
      if (!formData.streetAddress) newErrors.streetAddress = "Street address is required";
      if (!formData.city) newErrors.city = "City is required";
      if (!formData.state) newErrors.state = "State is required";
      if (!formData.zip) newErrors.zip = "Zip code is required";
      if (!formData.cardNumber || formData.cardNumber.length !== 16) newErrors.cardNumber = "Valid card number is required";
      if (!formData.expiryDate || !/^\d{2}\/\d{2}$/.test(formData.expiryDate)) newErrors.expiryDate = "Expiry date must be MM/YY";
      if (!formData.cvc || formData.cvc.length !== 3) newErrors.cvc = "CVC must be 3 digits";
      return newErrors;
    };
  
    const calculateTotal = (orderSummary) => {
        const itemsTotal = orderSummary.items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
        return itemsTotal - orderSummary.discount + orderSummary.shipping;
      };
      
      const handleDiscountApply = () => {
        if (formData.discountCode.trim().toUpperCase() === 'JANKIA15') {
          setOrderSummary((prev) => ({ ...prev, discount: 25 }));
        } else {
          alert('Invalid discount code');
        }
      };
      
      const handleQuantityChange = (id, newQuantity) => {
        if (newQuantity < 1) return;
        setOrderSummary((prev) => ({
          ...prev,
          items: prev.items.map((item) =>
            item.id === id ? { ...item, quantity: newQuantity } : item
          ),
        }));
      };
      
      const handlePlaceOrder = () => {
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
          alert("Order placed successfully!");
          // Optionally reset form and order summary
          setFormData({
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            streetAddress: '',
            city: '',
            state: '',
            zip: '',
            paymentMethod: 'card',
            cardNumber: '',
            expiryDate: '',
            cvc: '',
            discountCode: '',
          });
          setOrderSummary((prev) => ({
            ...prev,
            items: prev.items.map((item) => ({ ...item, quantity: 1 })),
            discount: 0,
          }));
          setErrors({});
        } else {
          setErrors(formErrors);
        }
      };
      
  
    return (
      <div className="min-h-screen flex flex-col justify-between">
        <div className="container mx-auto p-8 w-full flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="w-full">
              <ContactInformation formData={formData} handleInputChange={handleInputChange} errors={errors} />
              <ShippingAddress formData={formData} handleInputChange={handleInputChange} errors={errors} />
              <PaymentMethod formData={formData} handleInputChange={handleInputChange} errors={errors} />
            </div>
            <div className="w-full">
              <OrderSummary
                orderSummary={orderSummary}
                calculateTotal={() => calculateTotal(orderSummary)}
                handleQuantityChange={(id, quantity) => handleQuantityChange(id, quantity)}
              />
              <DiscountCode formData={formData} handleInputChange={handleInputChange} handleDiscountApply={handleDiscountApply} />
              <button onClick={handlePlaceOrder} className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded mt-8">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };


  export default Checkout;

ContactInformation.propTypes = {
    formData: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        phone: PropTypes.string,
        email: PropTypes.string,
    }).isRequired,
    handleInputChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
};

ShippingAddress.propTypes = {
    formData: PropTypes.shape({
        streetAddress: PropTypes.string,
        city: PropTypes.string,
        state: PropTypes.string,
        zip: PropTypes.string,
    }).isRequired,
    handleInputChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
};

PaymentMethod.propTypes = {
    formData: PropTypes.shape({
        paymentMethod: PropTypes.string,
        cardNumber: PropTypes.string,
        expiryDate: PropTypes.string,
        cvc: PropTypes.string,
    }).isRequired,
    handleInputChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
};

OrderSummary.propTypes = {
    orderSummary: PropTypes.shape({
        items: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
                color: PropTypes.string,
                price: PropTypes.number,
                quantity: PropTypes.number,
                image: PropTypes.string,
            })
        ).isRequired,
        shipping: PropTypes.number,
        discount: PropTypes.number,
    }).isRequired,
    calculateTotal: PropTypes.func.isRequired,
    handleQuantityChange: PropTypes.func.isRequired,
    handleRemove: PropTypes.func.isRequired,
};

DiscountCode.propTypes = {
    formData: PropTypes.shape({
        discountCode: PropTypes.string,
    }).isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleDiscountApply: PropTypes.func.isRequired,
};


OrderItem.propTypes = {
    item: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      image: PropTypes.string,
    }).isRequired,
    onQuantityChange: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
  };
    

