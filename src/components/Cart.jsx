import React from 'react';

const Cart = (props) => {
    const { quantity = 0,
        handleBasketShow = Function.prototype
    } = props
    return (
        <div className='cart brown darken-1 white-text' onClick={handleBasketShow} >
            <i className="material-icons">local_grocery_store</i>
            {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
        </div>
    );
};

export default Cart; 