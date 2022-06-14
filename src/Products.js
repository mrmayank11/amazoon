import React from 'react'
import './Products.css'
import { useStateValue } from './StateProvider';

function Products({ id,title, price, rating, image }) {

    const [{ basket }, dispatch] = useStateValue();


    const AddtoBasket = () => {
        // dispatch the item into the data layer

        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        })
    }

    return (
        <div className='product'>
            <div className="products_info">
                <p>{title}</p>
                <p className='product_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                    <div className="product_rating">
                        <p>{rating}</p>
                    </div>
                </p>
            </div>


            <img className='product_image' src={image}></img>


            <button className='image_button' onClick={AddtoBasket}>Add to Basket</button>
        </div>
    )
}

export default Products