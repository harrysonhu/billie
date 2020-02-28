import React from 'react';
import {
    BRAND_COLORS,
    dogWrapperStyles,
    imageStyles,
    overlayTextWrapper,
    overlayTextStyles
} from './Dog.css';

const message = [
    'W',
    'e',
    ' ',
    '❤️',
    ' ',
    'l',
    'o',
    'v',
    'e',
    ' ',
    'o',
    'u',
    'r',
    ' ',
    'p',
    'u',
    'p',
    's',
    '!'
];

export const Dog = ({ image }) => (
    <div className={dogWrapperStyles}>
        <img className={imageStyles} src={image} alt='Dog not found :(' />
        <span className={overlayTextWrapper}>{renderOverlayMessage()}</span>
    </div>
);

const renderOverlayMessage = () => {
    return message.map((char, index) => {
        return (
            <span className={overlayTextStyles(index % BRAND_COLORS.length)}>
                {char}
            </span>
        );
    });
};
