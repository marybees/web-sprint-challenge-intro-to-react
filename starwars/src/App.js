import React from 'react';
import './App.css';
import CharacterDetails from './components/CharacterDetails'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';

const Title = styled.div`
font-family: 'Monoton', cursive;
font-size: 100px;
padding: 1% 0 0 0;
color: white;
`
;

const SubTitle = styled.div`
font-family: 'Saira', sans-serif;
font-size: 50px;
padding: 0 0 3% 0;
color: white;
`
;

const App = () => {
  return (
    <div className="App">
      <Title className='header'>Star Wars</Title>
      <SubTitle className='sub-header'>Meet the Characters</SubTitle>
      <CharacterDetails/>
    </div>
  );
}

export default App;
