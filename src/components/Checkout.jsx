import { useState } from 'react';
import PropTypes from 'prop-types';

const ContactInformation = ({ formData, handleInputChange, errors }) => {
    return (
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
};

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

const OrderSummary = ({ orderSummary, calculateTotal, handleQuantityChange }) => {
    return (
        <div className=" border border-[#6C7275] rounded-lg  p-6 mb-8">
            <h2 className="text-[28px] text-[#121212] font-medium  poppins-font mb-4">Order Summary</h2>
            {orderSummary.items.map((item, index) => (
                <div key={index} className="flex justify-between mb-2">
                    <div className="flex items-center">
                        <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                        <div>{item.name} ({item.color})</div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            className="bg-gray-200 p-2 rounded-full"
                            onClick={() => handleQuantityChange(index, -1)}
                            disabled={item.quantity <= 1}
                        >
                            -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                            className="bg-gray-200 p-2 rounded-full"
                            onClick={() => handleQuantityChange(index, 1)}
                        >
                            +
                        </button>
                    </div>
                    <div>${item.price * item.quantity}</div>
                </div>
            ))}
            <div className="flex justify-between mt-4 border-t pt-4">
                <div>Shipping</div>
                <div>Free</div>
            </div>
            <div className="flex justify-between mt-4">
                <div>Discount</div>
                <div>${orderSummary.discount}</div>
            </div>
            <div className="flex justify-between mt-4 font-medium">
                <div>Total</div>
                <div>${calculateTotal(orderSummary)}</div>
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
        paymentMethod: 'card', // 'card' or 'paypal'
        cardNumber: '',
        expiryDate: '',
        cvc: '',
        discountCode: '',
    });

    const [orderSummary, setOrderSummary] = useState({
        items: [
            { name: 'Tray Table', color: 'Black', price: 105, quantity: 1, imageUrl: 'https://via.placeholder.com/150' },
            { name: 'Tray Table', color: 'Red', price: 105, quantity: 1, imageUrl: 'https://via.placeholder.com/150' },
            { name: 'Table Lamp', color: 'Gold', price: 24, quantity: 1, imageUrl: 'https://via.placeholder.com/150' },
        ],
        shipping: 0,
        discount: 0,
    });

    const [errors, setErrors] = useState({});
    const calculateTotal = (orderSummary) => {
        const itemTotal = orderSummary.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        return itemTotal + orderSummary.shipping - orderSummary.discount;
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
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
        if (!formData.cardNumber || formData.cardNumber.length < 16) newErrors.cardNumber = "Valid card number is required";
        if (!formData.expiryDate) newErrors.expiryDate = "Expiry date is required";
        if (!formData.cvc || formData.cvc.length !== 3) newErrors.cvc = "CVC is required";
        return newErrors;
    };

    const handleDiscountApply = () => {
        if (formData.discountCode === 'JANKIA15') {
            setOrderSummary({ ...orderSummary, discount: 25 });
        }
    };

    const handleQuantityChange = (index, change) => {
        const updatedItems = [...orderSummary.items];
        const updatedItem = { ...updatedItems[index] };
        updatedItem.quantity = Math.max(updatedItem.quantity + change, 1); // Prevent quantity from going below 1
        updatedItems[index] = updatedItem;
        setOrderSummary({ ...orderSummary, items: updatedItems });
    };

    const handlePlaceOrder = () => {
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            alert("Order placed successfully!");
            // You can make an API call here to submit the order
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
                        <OrderSummary orderSummary={orderSummary} calculateTotal={calculateTotal} handleQuantityChange={handleQuantityChange} />
                        <DiscountCode formData={formData} handleInputChange={handleInputChange} handleDiscountApply={handleDiscountApply} />
                        <button onClick={handlePlaceOrder} className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded mt-8">Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
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
                imageUrl: PropTypes.string,
            })
        ).isRequired,
        shipping: PropTypes.number,
        discount: PropTypes.number,
    }).isRequired,
    calculateTotal: PropTypes.func.isRequired,
    handleQuantityChange: PropTypes.func.isRequired,
};

DiscountCode.propTypes = {
    formData: PropTypes.shape({
        discountCode: PropTypes.string,
    }).isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleDiscountApply: PropTypes.func.isRequired,
};


export default Checkout;
