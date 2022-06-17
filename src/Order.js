import React from 'react'
import Product_checkout from './Product_checkout'
import moment from "moment";

function Order({ order }) {

    console.log(order.data);
    return (
        <div className='order'>
            <p className="order_id">


                <div className="past_order">
                    <div className="detail">
                        <strong>Order_id: </strong>
                        <span>{order.id}</span>
                    </div>

                    <small>{moment.unix(order.data.created).format(" MMMM Do  YYYY, h:mm a")}</small>
                    {order.data.basket?.map(items => (
                        <Product_checkout
                            image={items.image} title={items.title} price={items.price} rating={items.rating}
                        />
                    ))}

                    <strong>Total: {order.data.amount / 100} </strong>

                </div>


            </p>


        </div>
    )
}

export default Order