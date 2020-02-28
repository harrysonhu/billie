import { css } from 'emotion';

export const buttonStyles = css`
    background-color: lightgrey;
    border-radius: 8px;
    cursor: pointer;
    color: black;
    font-size: 20px;
    padding: 6px 2px;
    transition: background-color 0.5s, opacity 0.5s, transform 0.5s;
    width: 200px;

    :hover {
        background-color: #dcdcdc;
        transform: scale(0.98);
    }

    :active {
        background-color: #dcdcdc;
        transform: scale(0.96);
    }
`;
