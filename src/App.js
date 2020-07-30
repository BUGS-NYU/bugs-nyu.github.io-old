import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage'
import styled from 'styled-components'

const NavBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 5.5vh;
    width: 100vw;
    background-color: black;
`

const App = () => {
  return (
    <>
      <NavBarContainer />
      <HomePage />
    </>
  );
}

export default App;
