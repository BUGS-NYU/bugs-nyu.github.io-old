import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage'
import styled from 'styled-components'
import ProjectPage from './ProjectPage';
import TeamPage from './TeamPage';

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

const ListElement = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  max-height: 0px;
  opacity: 0;
  overflow: hidden;
  transition: opacity 300ms ease;
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
  &:hover ${ListElement} {
    max-height: inherit;
    opacity: 1;
  }
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
`

const App = () => {
  return (
    <Container>
      <NavBarContainer>
        <HomeContainer> BUGS@NYU </HomeContainer>
        <RightContainer>
          <RightElement> 
            Our Team 
            <ListElement>
              <li> Eboard </li>
              <li> Alumni </li>
              <li> Faculty </li>
            </ListElement>
          </RightElement>
          <RightElement> Projects </RightElement>
          <RightElement> Events </RightElement>
        </RightContainer>
      </NavBarContainer>
      {/* <HomePage /> */}
      <ProjectPage />
      {/* <TeamPage /> */}
    </Container>
  );
}

export default App;
