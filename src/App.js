import React from "react";
import HomePage from "./HomePage";
import ProjectsPage from "./ProjectsPage";
import TeamPage from "./TeamPage";
import NavBar from "./NavBar";
import Footer from "./Footer";
import AlumniPage from "./AlumniPage";
import ContributorsPage from "./ContributorsPage";
import EventPage from "./EventPage";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { createGlobalStyle, keyframes, ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { useDarkMode } from "./useDarkMode";

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

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: grid;
    min-height: 100vh;
    background-size: 400% 400%;
    animation: ${gradient} 25s ease infinite;
    overflow-x: hidden;
  }`

const App = () => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return (<div />);
  }

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Router>
          <NavBar theme={theme} />
          <Switch>
            <Route exact path="/" render={() => <HomePage theme={theme} />} />
            <Route exact path="/projects" render={() => <ProjectsPage theme={theme} />} />
            <Route exact path="/team" component={TeamPage} />
            <Route exact path="/alumni" component={AlumniPage} />
            <Route
              exact
              path="/contributors"
              render={() => <ContributorsPage theme={theme} />}
            />
            <Route exact path="/events" render={EventPage} />
            <Route render={() => <HomePage theme={theme} />} />
          </Switch>
        </Router>
        <Footer open={theme} setOpen={toggleTheme} />
      </>
    </ThemeProvider>
  );
};

export default App;
