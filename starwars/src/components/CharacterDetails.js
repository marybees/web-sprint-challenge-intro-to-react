import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'

function CharacterDetails() {

    const [characters, setCharacters] = useState([]);
    
    const starWarsUrl = 'https://swapi.dev/api/people/'

    useEffect(() => {
        axios.get(starWarsUrl)
            .then(response => {
                console.log(response.data.results)
                setCharacters(response.data.results)
            })
            .catch(error => {
                console.log('The data was not returned', error)
            })
    }, [])

    const [ descriptionOn, setDescriptionOn ] = useState(true);

    const buttonText = descriptionOn ? 'Hide Description' : 'Show Description'

    const toggleDescription = () => {
        return setDescriptionOn(!descriptionOn)
    };

    const charactersComponents = 
    characters.map((character) => {
        const description = descriptionOn ? 'Eye Color: ' + character.eye_color : ''
        return (
            <Character
            key = {character.name}
            name = {character.name}
            gender = {character.gender}
            birth_year = {character.birth_year}
            homeworld = {character.homeworld}
            buttonText = {buttonText}
            toggleDescription = {toggleDescription}
            description = {description}/>
        )
}) 
    return (
        <div className='characters'>
            {charactersComponents}
        </div>
    );

}

export default CharacterDetails