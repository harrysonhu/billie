import React from 'react';
import { buttonStyles } from './Button.css';

export const Button = ({ text, onClick }) => {
    return (
        <div role='button' onClick={onClick} className={buttonStyles}>
            {text}
        </div>
    );
};
