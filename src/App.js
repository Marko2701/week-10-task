import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import MainPage from './Pages/MainPage/MainPage';
import ShoppingCartPage from './Pages/ShoppingCartPage/ShoppingCartPage';

import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('cartItems');
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    let sum = 0;
    const quantities = cartItems.map(item => item.quantity);
    quantities.forEach(item => sum += item);

    setTotalQuantity(sum);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
  }, [cartItems]);

  return (
    <div className='app'>
      <Header cartQuantity={totalQuantity} />
      <Switch>

        <Route path='/shoppingCart'>
          <ShoppingCartPage
            setCartItems={setCartItems}
            cartItems={cartItems}
            setTotalQuantity={setTotalQuantity}
          />
        </Route>

        <Route path='/'>
          <MainPage
            setCartItems={setCartItems}
            cartItems={cartItems}
          />
        </Route>

      </Switch>
    </div>
  );
};

export default App;
