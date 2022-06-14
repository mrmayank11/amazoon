import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { NavLink } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { auth } from './firebase';

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuth = () => {
        if (user) {
            auth.signOut();
        }
    };

    // const name = user.email;
    // // console.log({ name });
    // if (user) {
    let username11 = user?.email.slice(0, -10);
    console.log({ username11 });
    // }

    return (

        <div className='header'>
            <NavLink to="/">

                <img className='header_logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMXl_zkdU92_MYc2tqty6pIjvG4JMAtJoQ5yA0dE4UfbS2R5l-RUiMczSNtQ1OAKcv-ZU&usqp=CAU'></img>

            </NavLink>

            <div className='header_search'>
                <input type={'text'} className='header_searchText'>
                </input>
                <SearchIcon className='header_serachicon' />
            </div>

            <div className='header_nav'>
                <div className='header_options'>
                    <span className='header_lineone'>
                        Hello {user ? user.email.slice(0, -10) : 'Guest'}
                    </span>
                    <NavLink to={!user && "/login"}>
                        <span onClick={handleAuth} className='header_linetwo'>
                            {user ? 'Sign out' : 'Sign In'}
                        </span>
                    </NavLink>


                </div>
                <div className='header_options'>
                    <span className='header_lineone'>
                        Returns
                    </span>
                    <span className='header_linetwo'>
                        & Orders
                    </span>
                </div>
                <div className='header_options'>
                    <span className='header_lineone'>
                        Yours
                    </span>
                    <span className='header_linetwo'>
                        Prime
                    </span>
                </div>
                <NavLink Redirect to="checkout">
                    <div className='header_optionBasket'>
                        <ShoppingBasketIcon />
                        <span className='header_linetwo header_basketCount'>
                            {basket.length}
                        </span>
                    </div>
                </NavLink>

            </div>
        </div>
    )
}

export default Header;