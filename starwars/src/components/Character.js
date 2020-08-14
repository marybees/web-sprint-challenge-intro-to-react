import React from 'react'
// import styled from 'styled-components'
// import { Button } from 'reactstrap';

const Character = (props) => {
    return (
    <div className='character-card'>
        <h4 className='name'>{props.name}</h4>
        <h5 className='short-description'>{props.gender} | Born: {props.birth_year} in {props.homeworld}</h5>
        <button className='button'onClick={props.toggleDescription}>{props.buttonText}</button>
        <h5 className='description'>
            <p>{props.description}</p>
        </h5>
    </div>
    );
};

export default Character;