import { useState } from 'react';

const ContactInformation = ({ formData, handleInputChange }) => {
    return (
        <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-lg font-medium mb-4">Contact Information</h2>
            <input type="text" name="firstName" placeholder="First Name" onChange={handleInputChange} value={formData.firstName} className="w-full border rounded px-3 py-2 mb-2" />
            <input type="text" name="lastName" placeholder="Last Name" onChange={handleInputChange} value={formData.lastName} className="w-full border rounded px-3 py-2 mb-2" />
            <input type="tel" name="phone" placeholder="Phone Number" onChange={handleInputChange} value={formData.phone} className="w-full border rounded px-3 py-2 mb-2" />
            <input type="email" name="email" placeholder="Email Address" onChange={handleInputChange} value={formData.email} className="w-full border rounded px-3 py-2 mb-2" />
        </div>
    );
};

const ShippingAddress = ({ formData, handleInputChange }) => {
    return (
        <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-lg font-medium mb-4">Shipping Address</h2>
            <input type="text" name="streetAddress" placeholder="Street Address" onChange={handleInputChange} value={formData.streetAddress} className="w-full border rounded px-3 py-2 mb-2" />
            <input type="text" name="city" placeholder="City" onChange={handleInputChange} value={formData.city} className="w-full border rounded px-3 py-2 mb-2" />
            <input type="text" name="state" placeholder="State" onChange={handleInputChange} value={formData.state} className="w-full border rounded px-3 py-2 mb-2" />
            <input type="text" name="zip" placeholder="Zip Code" onChange={handleInputChange} value={formData.zip} className="w-full border rounded px-3 py-2 mb-2" />
        </div>
    );
};

const PaymentMethod = ({ formData, handleInputChange }) => {
    return (
        <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-lg font-medium mb-4">Payment Method</h2>
            <div className="mb-4">
                <label className="inline-flex items-center">
                    <input type="radio" name="paymentMethod" value="card" checked={formData.paymentMethod === 'card'} onChange={handleInputChange} className="form-radio h-5 w-5 text-blue-600" />
                    <span className="ml-2">Pay by Card</span>
                </label>
            </div>
            <input type="text" name="cardNumber" placeholder="Card Number" onChange={handleInputChange} value={formData.cardNumber} className="w-full border rounded px-3 py-2 mb-2" />
            <div className="flex">
                <input type="text" name="expiryDate" placeholder="MM/YY" onChange={handleInputChange} value={formData.expiryDate} className="w-1/2 border rounded px-3 py-2 mr-2" />
                <input type="text" name="cvc" placeholder="CVC" onChange={handleInputChange} value={formData.cvc} className="w-1/2 border rounded px-3 py-2" />
            </div>
        </div>
    );
};

const OrderSummary = ({ orderSummary, calculateTotal }) => {
    return (
        <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-lg font-medium mb-4">Order Summary</h2>
            {orderSummary.items.map((item, index) => (
                <div key={index} className="flex justify-between mb-2">
                    <div className="flex items-center">
                        <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                        <div>{item.name} ({item.color}) x {item.quantity}</div>
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
            <input type="text" name="discountCode" onChange={handleInputChange} value={formData.discountCode} placeholder="Discount Code" className="w-1/2 border rounded px-3 py-2 mr-2" />
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

    const calculateTotal = (orderSummary) => {
        const itemTotal = orderSummary.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        return itemTotal + orderSummary.shipping - orderSummary.discount;
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleDiscountApply = () => {
        if (formData.discountCode === 'JANKIA15') {
            setOrderSummary({ ...orderSummary, discount: 25 });
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
            <div className="container mx-auto p-8 w-full flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="w-full">
                        <ContactInformation formData={formData} handleInputChange={handleInputChange} />
                        <ShippingAddress formData={formData} handleInputChange={handleInputChange} />
                        <PaymentMethod formData={formData} handleInputChange={handleInputChange} />
                    </div>
                    <div className="w-full">
                        <OrderSummary orderSummary={orderSummary} calculateTotal={calculateTotal} />
                        <DiscountCode formData={formData} handleInputChange={handleInputChange} handleDiscountApply={handleDiscountApply} />
                        <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded mt-8">Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
