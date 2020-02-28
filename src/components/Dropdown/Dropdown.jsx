import React from 'react';

export const Dropdown = ({ options, onChange }) => {
    return (
        <select onChange={onChange} id='dog-breed' name='dog-breed'>
            {options.map((option, index) => (
                <option key={`${option}-${index}`}>{option}</option>
            ))}
        </select>
    );
};
