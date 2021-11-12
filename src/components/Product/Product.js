import React from 'react';
import PropTypes from 'prop-types';
import './Product.css';

function Product({
  addToCart,
  product
}) {

  return (
    <li className='product'>
      <img className='product__img' src={product.image} />
      <p className='product__name'>{product.name}</p>
      <h2 className='product__price'>${product.price}</h2>
      <button
        className='product__button'
        onClick={() => addToCart(product)}>
        Add to Cart
      </button>  
    </li>
  );
}

Product.propTypes = {
  addToCart: PropTypes.func,
  product: PropTypes.object
};

export default Product;
