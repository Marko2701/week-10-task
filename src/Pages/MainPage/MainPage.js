import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Search from '../../components/Search/Search';
import ProductsList from '../../components/ProductsList/ProductsList';
import products from '../../data';
import './MainPage.css';

const MainPage = ({
  cartItems,
  setCartItems,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const results =
      products.filter(product => {
        return product.name.toLowerCase().includes(searchTerm);
      });
    setFilteredProducts(results);

  }, [searchTerm]);

  const addToCart = (product) => {
    const exist = cartItems.find(item => item.id === product.id);

    if (exist) {
      setCartItems([...cartItems]);
    }
    else {
      setCartItems([...cartItems, product]);
    }
  };

  return (
    <div className='main-page'>
      <Search products={filteredProducts} setValue={setSearchTerm} />
      <ProductsList products={filteredProducts} addToCart={addToCart} />
    </div>
  );
};

MainPage.propTypes = {
  cartItems: PropTypes.array,
  setCartItems: PropTypes.func
};

export default MainPage;

