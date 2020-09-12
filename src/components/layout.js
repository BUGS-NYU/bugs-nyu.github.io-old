import React from "react";
import { createGlobalStyle, keyframes } from "styled-components";

import NavBar from "./header";
import Footer from "./Footer";
import { ThemeProvider } from "./themeContext";

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <NavBar />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  );
};

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
`;

const GlobalStyle = createGlobalStyle`
  body {
    background: var(--color-body);
    display: grid;
    min-height: 100vh;
    background-size: 400% 400%;
    animation: ${gradient} 25s ease infinite;
    overflow-x: hidden;

    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default Layout;
