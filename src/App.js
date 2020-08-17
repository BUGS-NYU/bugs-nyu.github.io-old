import React from "react";
import HomePage from "./HomePage";
import ProjectsPage from "./ProjectsPage";
import TeamPage from "./TeamPage";
import NavBar from "./NavBar";
import Footer from "./Footer";
import AlumniPage from "./AlumniPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContributorsPage from "./ContributorsPage";
import EventPage from "./EventPage";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";
import { useDarkMode } from "./useDarkMode";

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
        <NavBar theme={theme}/>
        <Router>
          <Switch>
            <Route exact path="/" component={() => <HomePage theme={theme}/>} />
            <Route path="/projects" component={() => <ProjectsPage theme={theme} />} />
            <Route path="/teams" component={TeamPage} />
            <Route path="/alumni" component={AlumniPage} />
            <Route path="/contributors" component={() => <ContributorsPage theme={theme}/>} />
            <Route path="/events" component={EventPage} />
          </Switch>
        </Router>
        <Footer open={theme} setOpen={toggleTheme} />
      </>
    </ThemeProvider>
  );
};

export default App;
