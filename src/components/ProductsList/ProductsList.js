import React from 'react';
import PropTypes from 'prop-types';
import Product from '../Product/Product';
import './ProductsList.css';

function ProductsList({
  products,
  addToCart
}) {

  return (
    <ul className='products-list'>
      {products.map(product =>
        <Product
          key={product.id}
          product={product}
          addToCart={addToCart}
        />)}
    </ul>
  );
}

ProductsList.propTypes = {
  products: PropTypes.array,
  addToCart: PropTypes.func
};

export default ProductsList;
