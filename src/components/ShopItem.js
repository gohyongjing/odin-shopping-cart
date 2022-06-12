import React, { useState } from 'react';

const ShopItem = (props) => {

    const [quantity, setQuantity] = useState(0);

    const changeHandler = (event) => {
        const newValue = event.target.value;
        setQuantity(Math.max(0, newValue));
        props.setCart((cart) => {
            const newCart = { ...cart};
            if (newValue > 0) {
                newCart[props.name] = newValue;
            } else {
                delete newCart[props.name];
            }
            return newCart;
        });
    }

    return (
        
        <div className='shop-item'>
            <h2>{props.name}</h2>
            <img src={props.imageSrc} alt={props.name}></img>
            <div>Price: ${props.price}</div>
            <input type='number' value={quantity} onChange={changeHandler}></input>
        </div>
    );
};

export default ShopItem;