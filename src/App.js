import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import TeamPage from "./pages/TeamPage";
import AlumniPage from "./pages/AlumniPage";
import ContributorsPage from "./pages/ContributorsPage";
import EventPage from "./pages/EventPage";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import { lightTheme, darkTheme } from "./utils/theme";
import { GlobalStyles } from "./utils/global";
import { useDarkMode } from "./utils/useDarkMode";

const App = () => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Router>
          <NavBar theme={theme} />
          <Switch>
            <Route exact path="/" render={() => <HomePage theme={theme} />} />
            <Route
              exact
              path="/projects"
              render={() => <ProjectsPage theme={theme} />}
            />
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
