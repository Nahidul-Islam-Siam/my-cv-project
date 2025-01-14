import short1 from '../assets/short1.png';
const OrderCompletePage = () => {
    const products = [
      { imgSrc: short1, alt: 'Black Table', quantity: 2 },
      { imgSrc: short1 , alt: 'Red Table', quantity: 2 },
      { imgSrc: short1 , alt: 'Gold Lamp', quantity: 1 },
    ];
  
    const orderDetails = [
      { label: 'Order code', value: '#0123_45678' },
      { label: 'Date', value: 'October 19, 2023' },
      { label: 'Total', value: '$1,345.00' },
      { label: 'Payment method', value: 'Credit Card' },
    ];
  
    return (
      <div className="flex justify-center p-6 items-center min-h-screen bg-gray-100">
        <div className="bg-white rounded-lg p-6 max-w-md shadow-lg text-center">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Thank you! 🎉</h2>
            <p>Your order has been received</p>
          </div>
  
          <div className="mb-6">
            <div className="flex justify-center gap-4 mb-4">
              {products.map(({ imgSrc, alt, quantity }, index) => (
                <div className="relative" key={index}>
                  <img src={imgSrc} alt={alt} className="max-w-[80px] h-auto" />
                  <span className="absolute top-[-5px] right-[-5px] bg-black text-white rounded-full px-2 py-1 text-xs">
                    {quantity}
                  </span>
                </div>
              ))}
            </div>
  
            <div className="text-left">
              {orderDetails.map(({ label, value }, index) => (
                <div className="flex justify-between mb-2" key={index}>
                  <span className="font-bold">{label}:</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>
  
          <button
            className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800"
            onClick={() => console.log('Go to Purchase History')}
          >
            Purchase history
          </button>
        </div>
      </div>
    );
  };
  
  export default OrderCompletePage;
  