import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage'
import styled from 'styled-components'
import ProjectsPage from './ProjectsPage';
// import TeamPage from './TeamPage';
import NavBar from './NavBar';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Container = styled.div`
  min-height: 100vh;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
`

const App = () => {
  return (
      <Container>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/projects" component={ProjectsPage}/>
          {/* <Route path="/teams">
            <TeamsPage />
          </Route> */}
        </Switch>
        </Router>
      <Footer />
    </Container>
  );
}

export default App;
