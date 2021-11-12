import React from 'react';
import PropTypes from 'prop-types';
import ShoppingCartProduct from '../ShoppingCartProduct/ShoppingCartProduct';

const ShoppingCartLIst = ({
  cartItems,
  incrementItem,
  decrementItem,
  handleRemove
}) => {

  return (
    <ul className='shopping-cart-list'>
      {cartItems.map(product =>
        <ShoppingCartProduct
          key={product.id}
          product={product}
          incrementItem={incrementItem}
          decrementItem={decrementItem}
          handleRemove={handleRemove} />)}
    </ul>
  );
};

ShoppingCartLIst.propTypes = {
  cartItems: PropTypes.array,
  incrementItem: PropTypes.func,
  decrementItem: PropTypes.func,
  handleRemove: PropTypes.func
};

export default ShoppingCartLIst;
