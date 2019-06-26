import React from 'react';
import logo from './logo.svg';
import './style.scss';

const Header = () => {
    return (
        <header className="header">
            <img alt="logo" className="header__logo" src={logo} />
        </header>
    );
};

export default Header;
