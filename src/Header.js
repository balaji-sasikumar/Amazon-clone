import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';

function Header() {
    const [{basket}]=useStateValue();

    console.log(basket);

    return (
        <nav className="header">
            <Link to="/">
                <img className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="logo here" />
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchinput" />
                <SearchIcon className="header__searchicon" />
            </div>
            <div className="header__nav">
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionlineone">Hello Balaji</span>
                        <span className="header__optionlinetwo">Sign in</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionlineone">Returns</span>
                        <span className="header__optionlinetwo">& Orders</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionlineone">Your</span>
                        <span className="header__optionlinetwo">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionlinetwo header__basketcount">{basket?.length}</span>
                    </div>
                
                </Link>
            </div>

        </nav>
    )
}

export default Header
