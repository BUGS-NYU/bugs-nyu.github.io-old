import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage'
import styled from 'styled-components'
import ProjectPage from './ProjectPage';
import TeamPage from './TeamPage';
import NavBar from './NavBar';
import Footer from './Footer';

const Container = styled.div`
  min-height: 100vh;
  background-color: #f2f2f2 ;
  display: flex;
  flex-direction: column;
`

const App = () => {
  return (
    <Container>
      <NavBar />
      <HomePage />
      <Footer />
      {/* <ProjectPage /> */}
      {/* <TeamPage /> */}
    </Container>
  );
}

export default App;
