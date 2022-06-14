import React from 'react'
import './Home.css'
import Products from './Products';
function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
                <img className='home_image' src='https://m.media-amazon.com/images/I/715lpDNhM1L._SX3000_.jpg'></img>
            </div>

            <div className="home_row">
                <Products id='1' title='The lean startup' price={5.99} rating='⭐️⭐️⭐️⭐️' image='https://images-na.ssl-images-amazon.com/images/I/81vvgZqCskL.jpg' />
                <Products id='4' title='Hot Wheels 20 Car Pack' price={21.99} rating='⭐️⭐️⭐️⭐️⭐️' image='https://m.media-amazon.com/images/I/71vT3TGwIzL._AC_SL1500_.jpg' />
                <Products id='5' title='OnePlus Nord N200 | 5G Unlocked Android Smartphone' price={209.99} rating='⭐️⭐️⭐️' image='https://m.media-amazon.com/images/I/71DCZOdq92S._AC_SL1500_.jpg' />
            </div>

            <div className="home_row">
                <Products id='2' title='Gamer Gift Funny T Shirt' price={7.8} rating='⭐️⭐️⭐️' image='https://m.media-amazon.com/images/I/71J7UawwfxL._AC_UL640_QL65_.jpg' />
                <Products id='6' title='2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 512GB SSD Storage)' price={1748.00} rating='⭐️⭐️⭐️⭐️⭐️' image='https://m.media-amazon.com/images/I/61uPJ7lbsvL._AC_SL1500_.jpg' />

            </div>

            <div className="home_row">
                <Products id='3' title='SAMSUNG 34-Inch Odyssey G5 Ultra-Wide Gaming Monitor with 1000R Curved Screen, 165Hz, ' price={449.99} rating='⭐️⭐️⭐️⭐️' image='https://m.media-amazon.com/images/I/61XDeaOrrKL._AC_UY436_QL65_.jpg' />

            </div>

        </div>
    )
}

export default Home;