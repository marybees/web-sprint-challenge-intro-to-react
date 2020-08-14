import React, { useState, useEffect } from 'react'
import axios from 'axios'

function CharacterList() {

    const [characters, setCharacters] = useState([]);

    const starWarsUrl = 'https://swapi.dev/api/people/'

    useEffect(() => {
        axios.get(starWarsUrl)
            .then(response => {
                setCharacters([response.data])
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
        const description = descriptionOn ? character.description : ''
        return (
            <Character
            key = {character.name}
            name = {character.name}
            gender = {character.gender}
            birth_year = {character.birth_year}
            homeworld = {character.homeworld}
            description = {description}
            buttonText = {buttonText}
            toggleDescription = {toggleDescription}
            hair_color = {character.hair_color}
            skin_color = {character.skin_color}
            eye_color = {character.eye_color}
            />
        )
    })
    return (
        <div className='characters'>
            {charactersComponents}
        </div>
    );

}

export default CharacterList

const Character = props => {
    return {
        <div className='character-card'>
            <h4 className='name'>{props.name}</h4>
            <h5 className='short-description'>{props.gender} | Born: {props.birth_year} in {props.homeworld}</h5>
            <button className='button'onClick={props.toggleDescription}>{props.buttonText}</button>
            <p className='description'>{props.hair_color} | {props.skin_color} | {props.eye_color}</p>
        </div>
    };
};

export default Character;