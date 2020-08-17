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


const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
  }
`
const Container = styled.div`
  min-height: 100vh;
  display: grid;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
  animation: ${gradient} 25s ease infinite;
  overflow-x: hidden;
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
          <Route path="/events" component={EventPage} />
        </Switch>
      </Router>
    </Container>
  );
};

export default App;
