import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const ColorSelector = ({ colors, selectedColor, onColorSelect }) => (
  <div className="flex items-center">
    {colors.map((color) => (
      <div
        key={color}
        className={`w-6 h-6 rounded-full cursor-pointer ${selectedColor === color ? 'border-2 border-black' : ''} ${color.toLowerCase() === 'black' ? 'bg-black' : 'bg-white'}`}
        onClick={() => onColorSelect(color)}
      ></div>
    ))}
  </div>
);

const QuantitySelector = ({ quantity, onIncrement, onDecrement }) => (
  <div className="flex items-center border border-gray-300 px-3 py-2">
    <button onClick={onDecrement} className="p-1">
      <FaMinus />
    </button>
    <span className="mx-2">{quantity}</span>
    <button onClick={onIncrement} className="p-1">
      <FaPlus />
    </button>
  </div>
);

const ProductDetail = ({ colors, selectedColor, onColorSelect, quantity, onIncrement, onDecrement }) => (
  <div>
    <ColorSelector colors={colors} selectedColor={selectedColor} onColorSelect={onColorSelect} />
    <QuantitySelector quantity={quantity} onIncrement={onIncrement} onDecrement={onDecrement} />
  </div>
);

export default ProductDetail;