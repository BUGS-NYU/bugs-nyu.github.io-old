import React from "react";
import HomePage from "./HomePage";
import ProjectsPage from "./ProjectsPage";
import TeamPage from "./TeamPage";
import NavBar from "./NavBar";
import Footer from "./Footer";
import AlumniPage from "./AlumniPage";
import { BrowserRouter as Router } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ContributorsPage from "./ContributorsPage";
import EventPage from "./EventPage";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";
import { useDarkMode } from "./useDarkMode";

const CurrentPage = ({ theme }) => {
  const currentPage = new URLSearchParams(useLocation().search).get("path");

  switch (currentPage) {
    case "projects":
      return (<ProjectsPage theme={theme}/>);
    case "teams":
      return (<TeamPage theme={theme}/>);
    case "alumni":
      return (<AlumniPage theme={theme}/>);
    case "contributors":
      return (<ContributorsPage theme={theme}/>);
    case "events":
      return (<EventPage theme={theme}/>);
    default:
      return (<HomePage theme={theme}/>);
  }
};

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
          <NavBar theme={theme}/>
          <CurrentPage theme={theme} />
          <Footer open={theme} setOpen={toggleTheme} />
        </Router>
      </>
    </ThemeProvider>
  );
};

export default App;
