import React from 'react';

const ShopHeader = (props) => {
    
    return (
      <div className='shop-header'>
          <span>Cart items: {Object.keys(props.cart).length}</span>
          <button>Check out and pay</button>
      </div>
    );
  };
  
  export default ShopHeader;