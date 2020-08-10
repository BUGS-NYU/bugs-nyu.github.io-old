import React from "react";
import HomePage from "./HomePage";
import styled from "styled-components";
import ProjectsPage from "./ProjectsPage";
import TeamPage from "./TeamPage";
import NavBar from "./NavBar";
import Footer from "./Footer";
import AlumniPage from './AlumniPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContributorsPage from "./ContributorsPage";

const Container = styled.div`
  min-height: 100vh;
  background-color: #f2f2f2;
  display: grid;
`;

const App = () => {
  return (
    <Container>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/projects" component={ProjectsPage} />
          <Route path="/teams" component={TeamPage} />
          <Route path="/alumni" component={AlumniPage} />
          <Route path="/contributors" component={ContributorsPage} />
        </Switch>
      </Router>
      <Footer />
    </Container>
  );
};

export default App;
