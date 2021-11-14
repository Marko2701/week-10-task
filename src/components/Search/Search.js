import React from 'react';
import PropTypes from 'prop-types';
import './Search.css';

const Search = ({
  products,
  setValue
}) => {

  return (
    <div className="search">
      {products.length === 1 ?
        <p className='search__number'>{products.length} Product</p>
        :
        <p className='search__number'>{products.length} Products</p>
      }

      <div className='search__input'>
        <span className='search__input-icon'>
          <i className="fas fa-search"></i>
        </span>
        <input 
          type='text' 
          placeholder='Start searching...'
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
};

Search.propTypes = {
  products: PropTypes.array,
  setValue: PropTypes.func
};

export default Search;
