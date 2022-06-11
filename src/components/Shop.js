import React, {useState} from 'react';
import ShopHeader from './ShopHeader';

const Shop = () => {


    const [cart, setCart] = useState({});

    return (
      <div className='shop'>
        <ShopHeader cart={cart} />
      </div>
    );
  };
  
  export default Shop;