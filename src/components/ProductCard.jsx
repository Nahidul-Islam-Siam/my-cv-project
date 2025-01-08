import React from 'react';

const ProductCard = ({ product }) => { // Destructure 'product' prop here
  return (
    <div className="product-card">
      <div className="product-header">
        <span className="badge">NEW</span>
        <button className="wishlist-btn">♡</button>
      </div>
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-details">
        <button className="add-to-cart-btn">Add to cart</button>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{product.price}</p>
        <div className="product-rating">★★★★★</div>
      </div>
    </div>
  );
};

export default ProductCard;
