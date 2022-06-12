import React, {useState} from 'react';
import ShopHeader from './ShopHeader';
import ShopItem from './ShopItem';
import ElixirCollectorImg from '../images/ElixirCollectorCard.webp';
import Level10WallImg from '../images/Wall10.webp';
import PhantomImg from '../images/Phantom.webp';
import RabadonsDeathcapImg from '../images/Rabadons_Deathcap.webp';

const Shop = () => {
  const [cart, setCart] = useState({});
  const items = [{name: 'Elixir Collector', price: 60, imageSrc: ElixirCollectorImg},
                  {name: 'Level 10 Wall', price: 20, imageSrc: Level10WallImg},
                  {name: 'Phantom', price: 29, imageSrc: PhantomImg},
                  {name: "Rabadon's Deathcap", price: 36, imageSrc: RabadonsDeathcapImg},];

    return (
      <div className='shop'>
        <ShopHeader cart={cart} />
        {
          items.map((item) => {
            return <ShopItem key={item.name} name={item.name} price={item.price} imageSrc={item.imageSrc} setCart={setCart}/>
          })
        }
      </div>
    );
  };
  
  export default Shop;