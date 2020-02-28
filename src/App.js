import React, { useEffect, useState } from 'react';
import { css } from 'emotion';
import axios from 'axios';
import './App.css';
import { Button, Dog } from './components';

const API_ENDPOINT = 'https://dog.ceo/api/breeds/image/random';

const subwrapperStyles = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 16px;
`;

function App() {
    const [dog, setDog] = useState('');

    useEffect(() => {
        getNewDogImage();
    }, []);

    const getNewDogImage = () => {
        axios.get(API_ENDPOINT).then(({ data }) => {
            setDog(data.message);
        });
    };

    return (
        <div className='App'>
            <header className='App-header'>
                <h3>Relieve some stress with these pups!</h3>
                {dog === '' ? <p>Please Wait...</p> : <Dog image={dog} />}
                <div className={subwrapperStyles}>
                    <p>Don't like what you see?</p>
                    <Button text='Change Dog!' onClick={getNewDogImage} />
                </div>
            </header>
        </div>
    );
}

export default App;
