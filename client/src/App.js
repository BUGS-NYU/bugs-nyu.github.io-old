import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Link, Route, NavLink} from 'react-router-dom'
import TeamPage from './pages/TeamPage';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import styled from 'styled-components';
import bugslogo from './img/bugslogo.jpg';
import githublogo from './img/GitHub-Mark-32px.png';

const Wrapper = styled.section`
  padding: 1.5em;
  background: white;
`;

const NavBar = styled.header`
  background-color: white;
`

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: row wrap;
  justify-content: space-between;
`

const Links = styled.nav`
  padding-right: 0.5em;
  padding-left: 0.5em;
`

const Header = styled.div`
  padding-right: 0.5em;
  padding-left: 0.5em;
  margin-right: auto;
`

const Footer = styled.footer`
  padding: 1.5em;
  background-color: lightgray;
`

const App = () => {
  return(
    <Router>
      <div className="App">
        <Wrapper>
          <NavBar>
            <NavList>
              <Header>
                <Link to="/"> 
                  {/* <Logo src = {bugslogo} /> */}
                  BUGS
                 </Link>
              </Header>
              <Links>
                <NavLink to = "/team"> Team </NavLink>
              </Links>
              <Links>
                <NavLink to = "/events"> Events </NavLink>
              </Links>
            </NavList>
          </NavBar>
        </Wrapper>
      <Switch>
        <Route exact path = "/" component = {HomePage}></Route>
        <Route path = "/team" component = {TeamPage}></Route>
        <Route exact path = "/events" component = {EventsPage}></Route>
      </Switch>
      <Footer>
          <NavList>
              <Header>
                NYU BUGS, Courant Institute of Mathematical Sciences
              </Header>
              <Links>
                  bugsnyu@gmail.com
              </Links>
          </NavList>
      </Footer>
      </div>
    </Router>
  )
}

export default App;
