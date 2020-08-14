import React from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

const WrapperDiv = styled.div`
font-family: 'Saira', sans-serif;
background-color: rgba(0, 0, 0, .3);
color: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 0 25% 5% 25%;
padding: 1%;
`
;



const Character = (props) => {
    return (
    <WrapperDiv className='character-card'>
        <div>
        <h4 className='name'>{props.name}</h4>
        <h5 className='short-description'>Gender: {props.gender} | Born: {props.birth_year}</h5>
        </div>
        <Button className='button'onClick={props.toggleDescription}>{props.buttonText}</Button>
        <h5 className='description'>
            <p>{props.description}</p>
        </h5>
    </WrapperDiv>
    );
};

export default Character;