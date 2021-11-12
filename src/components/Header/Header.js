import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({
  cartQuantity
}) => {
  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src='https://cutt.ly/tzoGJtp' />
      </Link>
      
      <Link to='/shoppingCart'>
        <p className='header__icon-wrapper'>
          <span className='header__cart-image'>
            <i className="fas fa-shopping-cart"></i>
          </span>
          Cart({cartQuantity})
        </p>
      </Link>
    </header>
  );
};

Header.propTypes = {
  cartQuantity: PropTypes.number
};

export default Header;

