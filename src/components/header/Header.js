import React from 'react';
import './Header.css';
import logo from './pokeapi_256.888baca4.png';

const Header = () => {
    return (
        <header className={'top-bar'}>
            <div className="wrapper top-bar_grid">
                <div className="top-bar_logo">
                    <img src={logo} alt="Logo"/>
                </div>
            </div>
        </header>
    )
}

export default Header;