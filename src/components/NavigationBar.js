import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
      <nav className='nav-bar'>
          <Link to="/">Home</Link>
          <Link to="shop">Shop</Link>
      </nav>
    );
  };
  
  export default NavigationBar;