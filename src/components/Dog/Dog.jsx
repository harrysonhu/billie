import React from 'react';
import { dogWrapperStyles, imageStyles } from './Dog.css';

export const Dog = ({ image }) => {
    return (
        <div className={dogWrapperStyles}>
            <img className={imageStyles} src={image} alt='Dog not found :(' />
        </div>
    );
};
