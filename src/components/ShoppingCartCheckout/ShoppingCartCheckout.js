import React from 'react';
import PropTypes from 'prop-types';
import './ShoppingCartCheckout.css';

const ShoppingCartCheckout = ({
  cartItems,
  clearCart,
  updateCheckout
}) => {

  const totalQuantity = () => {
    let sum = 0;
    const quantities = cartItems.map(item => item.quantity);
    quantities.forEach(item => sum += item);

    return sum;
  };

  const totalPayment = () => {
    let sum = 0;
    const prices = cartItems.map(item => item.price * item.quantity);
    prices.forEach(price => sum += price);

    return sum;
  };

  return (
    <div className='shopping-cart-checkout'>
      <p>Total Items</p>
      <h3>{totalQuantity()}</h3>
      <p>Total Payment</p>
      <h3>${totalPayment()}</h3>
      <div className='shopping-cart-checkout__buttons'>
        <button 
          className='shopping-cart-checkout__checkout-btn'
          onClick={() => updateCheckout()}
        >
          CHECKOUT
        </button>
        <button 
          className='shopping-cart-checkout__clear-btn'
          onClick={() => clearCart()}
        >
          CLEAR
        </button>
      </div>
    </div>
  );
};

ShoppingCartCheckout.propTypes = {
  cartItems: PropTypes.array,
  clearCart: PropTypes.func,
  setCheckout: PropTypes.func
};

export default ShoppingCartCheckout;
