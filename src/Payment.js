import React, { useState, useEffect } from 'react'
import './Payment.css'
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import Product_checkout from './Product_checkout';
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { useHistory } from 'react-router-dom';
import axios from './axios';
import { db } from './firebase';



function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();
    const totalPrice = (getBasketTotal(basket)).toFixed(2);
    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);
    const [success, setSuccess] = useState(false);

    useEffect(() => {

        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${totalPrice * 100}`
            })
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();

    }, [basket])

    console.log('secret is >> ', clientSecret);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {

            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })

            setSuccess(true);
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_THE BASKET',
            })

            history.replace("/orders")
        })
    }

    const handleChange = event => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details

        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");

    }
    return (
        <div className='payment'>
            <div className="checkout_items">
                <h1>Checkout total Items : {basket.length}</h1>
            </div>
            <div className="payment_section">
                <div className="payment_heading">
                    <h3>Delivery Address</h3>
                </div>
                <div className="delivery_details">
                    <p>{user?.email.slice(0, -10)}</p>
                    <p>{user?.email}</p>
                </div>
            </div>
            <hr />
            <div className="payment_section">
                <div className="payment_heading">
                    <h3>Review items and delivery </h3>
                </div>
                <div className="review_items">
                    {
                        basket.map(items => (<Product_checkout
                            id={items.id}
                            image={items.image}
                            title={items.title}
                            price={items.price}
                            rating={items.rating}
                        />))
                    }
                </div>


            </div>
            <hr />
            <div className="payment_section">
                <div className="payment_heading">
                    <h3>Payment details</h3>
                </div>
                <div className="payment_details">
                    {/* stripe magic */}
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange} />
                        <div className="final_payment">
                            <p><strong>Total: $ {totalPrice}</strong></p>
                            <button className='fbutton' disabled={processing || disabled || success}>
                                <span>{processing ? <p>processing</p> : "Buy now"}</span>
                            </button>
                        </div>
                    </form>
                </div>

                {error && <div>{error} </div>}
            </div >
        </div >
    )
}

export default Payment