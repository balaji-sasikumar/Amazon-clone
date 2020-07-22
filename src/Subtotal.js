import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';


function Subtotal() {

    const [{ basket }] = useStateValue();
    return (
        <div className="subtotal">

            <p>Subtotal({basket.length} items):$ {getBasketTotal(basket)}</p>
            <p>
                <input type="checkbox" />
                This order contains a gift
            </p>
            <button>Proceed to checkout</button>
            
        </div>
    )
}

export default Subtotal
