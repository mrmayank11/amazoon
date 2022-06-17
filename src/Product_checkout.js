import React from 'react'
import "./Product_checkout.css"
import { useStateValue } from './StateProvider';


function Product_checkout({ id, image, title, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const RemovefromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            item: {
                id: id,
                image: image,
                title: title,
                price: price,
                rating: rating,
            },
        })
    }

    return (
        <div className='checkout_temp'>
            <img src={image} className='checkout_img'></img>
            <div className="checkout_description">
                <strong>{title}</strong>
                <p className='product_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                    <div className="product_rating">
                        <p>{rating}</p>
                    </div>
                </p>
                <button className='image_button' onClick={RemovefromBasket} >Remove From Basket</button>
            </div>
        </div>
    )
}

export default Product_checkout