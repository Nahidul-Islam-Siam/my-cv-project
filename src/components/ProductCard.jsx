import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-header">
        <span className="badge new">NEW</span>
        <button className="wishlist-btn" aria-label="Add to wishlist">
          <svg
            className="wishlist-icon"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 21.667L10.5 20.167C4.167 15.833 0 8.5 0 3.16667C0 1.73333 0.833333 0.5 2 0.5C3.16667 0.5 4 1.33333 4.5 2.5L12 10.8333L19.5 2.5C20.1667 1.33333 21 0.5 22 0.5C23.1667 0.5 24 1.73333 24 3.16667C24 8.5 19.8333 15.833 13.5 20.167L12 21.667Z"
              fill="currentColor"
            />
          </svg>
        </button>
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