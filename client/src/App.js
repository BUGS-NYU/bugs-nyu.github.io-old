import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Team from './components/Team';
import Events from './components/Events'
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import TeamPage from './pages/TeamPage';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';

const App = () => {
  return(
    <Router>
      <Switch>
        <Route exact path = "/" component = {HomePage}></Route>
        <Route path = "/team" component = {TeamPage}></Route>
        <Route exact path = "/events" component = {EventsPage}></Route>
      </Switch>
    </Router>
  )
}

export default App;
