import React, { useEffect, useState } from 'react';
import { css } from 'emotion';
import axios from 'axios';
import './App.css';
import { Button, Dog, Dropdown } from './components';

const API_ENDPOINT_RANDOM = 'https://dog.ceo/api/breeds/image/random';
const getApiEndpointByBreed = breed => {
    if (breed.indexOf(' ') > -1) {
        const parts = breed.split(' ');
        return `https://dog.ceo/api/breed/${parts[1]}/${parts[0]}/images/random`;
    } else {
        return `https://dog.ceo/api/breed/${breed}/images/random`;
    }
};

const subwrapperStyles = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 16px;

    :last-child {
        margin-bottom: 8px;
    }
`;

const marginBottom = css`
    margin-bottom: 8px;
`;

function App() {
    const [dog, setDog] = useState('');
    const [dogBreeds, setDogBreeds] = useState([]);
    const [currBreed, setCurrBreed] = useState('affenpinscher');

    useEffect(() => {
        getNewDogImage();
    }, []);

    useEffect(() => {
        axios.get('https://dog.ceo/api/breeds/list/all').then(({ data }) => {
            const breeds = Object.keys(data.message);
            let allBreeds = [];
            for (let breed of breeds) {
                allBreeds.push(breed);
                if (data.message[breed]) {
                    for (let subBreed of data.message[breed]) {
                        allBreeds.push(`${subBreed} ${breed}`);
                    }
                }
            }
            allBreeds.sort((a, b) => a.localeCompare(b));
            setDogBreeds(allBreeds);
        });
    }, []);

    const getNewDogImage = () => {
        axios.get(API_ENDPOINT_RANDOM).then(({ data }) => {
            setDog(data.message);
        });
    };

    const getNewDogImageByBreed = () => {
        axios.get(getApiEndpointByBreed(currBreed)).then(({ data }) => {
            setDog(data.message);
        });
    };

    const handleOnBreedChange = event => {
        setCurrBreed(event.target.value);
    };

    return (
        <div className='App'>
            <header className='App-header'>
                <h3>Relieve some stress with these pups!</h3>
                {dog === '' ? <p>Please Wait...</p> : <Dog image={dog} />}
                <div className={subwrapperStyles}>
                    <p>Don't like what you see?</p>
                    <div className={marginBottom}>
                        <Button
                            text='Get a Random Dog!'
                            onClick={getNewDogImage}
                        />
                    </div>
                    <div className={marginBottom}>
                        <Button
                            text='Want a Custom Breed?'
                            onClick={getNewDogImageByBreed}
                        />
                    </div>
                    <Dropdown
                        options={dogBreeds}
                        onChange={handleOnBreedChange}
                    />
                </div>
            </header>
        </div>
    );
}

export default App;
