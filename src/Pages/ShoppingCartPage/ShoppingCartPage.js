import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ShoppingCartList from '../../components/ShoppingCartList/ShoppingCartList';
import ShoppingCartCheckout from '../../components/ShoppingCartCheckout/ShoppingCartCheckout';
import './ShoppingCartPage.css';

const ShoppingCartPage = ({
  cartItems,
  setCartItems,
  setTotalQuantity
}) => {
  const [checkout, setCheckout] = useState(false);

  const incrementItem = (id) => {
    const updatedCartItems = cartItems.map(item => {
      let cartItem = item;

      if (item.id === id) {
        cartItem = {
          ...item,
          quantity: item.quantity + 1
        };
      }

      return cartItem;
    });

    setCartItems(updatedCartItems);
  };

  const decrementItem = (id) => {
    const updatedCartItems = cartItems.map(item => {
      let cartItem = item;

      if (item.id === id && item.quantity > 1) {
        cartItem = {
          ...item,
          quantity: item.quantity - 1
        };
      }

      return cartItem;
    });

    setCartItems(updatedCartItems);
  };

  const handleRemove = (productId) => {
    const newList = cartItems.filter(item => item.id !== productId);
    setCartItems(newList);

    if (cartItems.length === 1) {
      setTotalQuantity(0);
    }
  };

  const updateQuantity = (totalItems) => {
    setTotalQuantity(totalItems);
  };

  const updateCheckout = () => {
    setCheckout(true);
    setCartItems([]);
    setTotalQuantity(0);
  };

  const clearCart = () => {
    setCartItems([]);
    setTotalQuantity(0);
  };

  return (
    <div className='shopping-cart-page'>
      {checkout && 
        <div className='shopping-cart-page__checkout'>
          <p>Your checkout was successfull!</p>    
          <Link to='/'>BUY MORE</Link>  
        </div>}
      {cartItems.length === 0 && !checkout &&
        <div className='shopping-cart-page__empty-cart'>
          Your Cart is empty!
        </div>}
      {cartItems.length > 0 && !checkout &&
        <div className='shopping-cart-page__content'>
          <ShoppingCartList
            cartItems={cartItems}
            incrementItem={incrementItem}
            decrementItem={decrementItem}
            handleRemove={handleRemove}
          />
          <ShoppingCartCheckout
            cartItems={cartItems}
            updateQuantity={updateQuantity}
            clearCart={clearCart}
            updateCheckout={updateCheckout}
          />
        </div>
      }
    </div>
  );
};

ShoppingCartPage.propTypes = {
  cartItems: PropTypes.array,
  setCartItems: PropTypes.func,
  setTotalQuantity: PropTypes.func
};

export default ShoppingCartPage;
