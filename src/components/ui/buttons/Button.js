import React from 'react';
import './Button.css';

const Button = ({children, cls, onClick}) => {
    return (
        <button className={'btn ' + cls} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;