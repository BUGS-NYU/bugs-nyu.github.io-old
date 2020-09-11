import React from "react";
import styled from "styled-components";

import { ThemeContext } from "./themeContext";
import Toggle from "./toggle";

const Footer = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  return (
    <FooterContainer>
      <FooterSectionContainer>
        <Toggle
          theme={colorMode}
          onToggle={ev => {
            setColorMode(ev.target.checked ? "dark" : "light");
          }}
        />
      </FooterSectionContainer>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  margin-top: auto;
  position: relative;
`;

const FooterSectionContainer = styled.section`
  align-items: center;
  height: 50px;
  max-width: 300px;
  margin: 10px 0 10px 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export default Footer;
