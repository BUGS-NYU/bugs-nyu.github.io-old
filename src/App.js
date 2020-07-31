import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage'
import styled from 'styled-components'
import bugs from './bugs.png'

const NavBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 5.5vh;
    width: 100vw;
    background-color: black;
`

const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:flex-end;
  margin-left: auto;
`

const RightElement = styled.div`
  font-family: Source Sans Pro;
  font-style: normal;
  font-size: 1.25rem;
  font-weight: 400;
  color: white;
  margin: auto;
  padding-left: 1vw;
  padding-right: 1vw;
`
const Container = styled.div``

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  font-family: Source Sans Pro;
  font-style: normal;
  font-size: 1.25rem;
  font-weight: 400;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  padding-left: 1vw;
  padding-right: 1vw;
  opacity:0;
  &:hover {
    opacity:1;
    -webkit-transition: opacity .25s ease-in-out .0s;
    transition: opacity .25s ease-in-out .0s;
  }
`

const App = () => {
  return (
    <Container>
      <NavBarContainer>
        <HomeContainer> BUGS@NYU </HomeContainer>
        <RightContainer>
          <RightElement> Our Team </RightElement>
          <RightElement> Projects </RightElement>
          <RightElement> Events </RightElement>
        </RightContainer>
      </NavBarContainer>
      <HomePage />
    </Container>
  );
}

export default App;
