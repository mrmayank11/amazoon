import React, { useState, useEffect } from 'react'
import { db } from './firebase';
import Order from './Order';
import './Orders.css'
import { useStateValue } from './StateProvider';

function Orders() {

    const [{ user, basket }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {

        if ({ user }) {
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => (
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    }

                    )))
                )

                )
        }


        else {
            setOrders([]);
        }

    }, [user])

    console.log(orders);
    return (
        <div className='orders' >
            <h1 style={{ 'font-weight': 'bold', "padding": "20px 0 0 30px" }}>YOUR ORDERS</h1>
            <div className="prev_orders">
                {orders?.map(o => (
                    <Order order={o} />
                ))}
            </div>
        </div >
    )
}

export default Orders;