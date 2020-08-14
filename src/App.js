import React from "react";
import HomePage from "./HomePage";
import styled, {keyframes} from "styled-components";
import ProjectsPage from "./ProjectsPage";
import TeamPage from "./TeamPage";
import NavBar from "./NavBar";
import Footer from "./Footer";
import AlumniPage from './AlumniPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContributorsPage from "./ContributorsPage";
import EventPage from './EventPage';

const Container = styled.div`
  min-height: 100vh;
  display: grid;
  background-color: #f2f2f2;
`;

const slideleft = keyframes`
  100%{
    transform: translateY(2000%) rotate(720deg);
  }
`


const RotatedBlock = styled.div`
  width: 50px;
  height: 50px;
  background-color: black;
  transform: translateY(0%);
  animation: ${slideleft} 7s forwards linear infinite;
`

const App = () => {
  return (
    <Container>
      <NavBar />
      {/* <RotatedBlock />
      <RotatedBlock />
      <RotatedBlock />
      <RotatedBlock />
      <RotatedBlock /> */}
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/projects" component={ProjectsPage} />
          <Route path="/teams" component={TeamPage} />
          <Route path="/alumni" component={AlumniPage} />
          <Route path="/contributors" component={ContributorsPage} />
          <Route path="/events" component={EventPage} />
        </Switch>
      </Router>
      <Footer />
    </Container>
  );
};

export default App;
