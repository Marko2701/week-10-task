import React from 'react';
import PropTypes from 'prop-types';
import './ShoppingCartProduct.css';

const ShoppingCartProduct = ({
  product,
  incrementItem,
  decrementItem,
  handleRemove
}) => {

  return (

    <li className='shopping-cart-product'>
      <img src={product.image} />

      <div className='shopping-cart-product__name-and-price'>
        <h3 className='shopping-cart-product__name'>{product.name}</h3>
        <p className='shopping-cart-product__price'>Price: ${product.price}</p>
      </div>

      <p className='shopping-cart-product__quantity'>Qty: {product.quantity}</p>

      <div className='shopping-cart-product__buttons'>
        <button
          onClick={() => incrementItem(product.id)}
        >
          <i className="fas fa-plus-circle"></i>
        </button>

        <button onClick={() => decrementItem(product.id)}
        >
          <i className="fas fa-minus-circle"></i>
        </button>

        <button className='shopping-cart-product__delete-btn'
          onClick={() => handleRemove(product.id)}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </li>

  );
};

ShoppingCartProduct.propTypes = {
  product: PropTypes.object,
  incrementItem: PropTypes.func,
  decrementItem: PropTypes.func,
  handleRemove: PropTypes.func
};

export default ShoppingCartProduct;
