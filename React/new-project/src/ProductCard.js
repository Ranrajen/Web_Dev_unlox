import React from 'react';
import './ProductCard.css';

function ProductInfo() {
  //no id and className
  return (
    <div className="productstyle" style={{ backgroundColor: 'lightblue' }}>
      <img
        src="https://images.pexels.com/photos/33158968/pexels-photo-33158968.jpeg"
        alt=""
      />
      <h2>Product name </h2>
      <p>Product description </p>
      <p>Price:- 999</p>
    </div>
  );
}
export default ProductInfo;
