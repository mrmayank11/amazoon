import React from 'react'
import './Checkout.css'
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import Product_checkout from './Product_checkout';

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className="checkout_left">
                <img className='checkout_ad' src='https://static.semrush.com/blog/uploads/media/c2/52/c2521160ece538cfdbfb218788caf9ea/mDWwN6GNJt_lE7-pGth6IXsdxvqVmPeaGHw-F_dHXiKN8p3FGgIVicwvbdShvLirF5slOvKUkxpfMkaVdne2a6do6vHWdLZSfy1i-lGmfZL9-FyS162K6P-QGbZbk1vKp9YjNSil%3Ds0.png'></img>

                <h2>Your Shopping Cart</h2>
                <div>
                    {basket.map(items => (
                        <Product_checkout image={items.image} title={items.title} price={items.price} rating={items.rating} />
                    ))}

                </div>

            </div>
            <div className="checkout_right">
                <div className="checkout_subtotal">
                    <div className="checkout_priceshow"><p>Subtotal({basket.length} Items):</p>

                        <strong>$ {(getBasketTotal(basket)).toFixed(2)}</strong>

                    </div>

                    <div className="checkout_box"><input type="checkbox"></input>
                        <p>This order contains gift </p></div>

                    <button className='checkout_button'>Proceed to checkout</button>
                </div>


            </div>
        </div>
    )
}

export default Checkout;