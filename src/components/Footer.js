import React from "react";
import styled from "styled-components";
import "../styles/ToggleButton.css";

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

const Footer = ({ open, setOpen }) => {
  const theme = open === "dark";
  return (
    <FooterContainer>
      <FooterSectionContainer>
        <input
          type="checkbox"
          id="switch"
          checked={theme}
          onChange={() => setOpen(!open)}
        />
        <label htmlFor="switch">Toggle</label>
      </FooterSectionContainer>
    </FooterContainer>
  );
};

export default Footer;
