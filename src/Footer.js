import React from "react";
import styled from "styled-components";
import githublogo from "./GitHub-Mark-32px.png";
import maillogo from "./mail_icon.png";

const FooterContainer = styled.footer`
  margin-top: auto;
  position: relative;
`;

const FooterSectionContainer = styled.section`
  align-items: center;
  min-height: 12vh;
  display: flex;
  background-color: #311432;
  justify-content: center;
  border-top: 1px solid;
  flex-wrap: wrap;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const FirstItem = styled.a`
  padding-top: 10px;
  padding-bottom: 7px;
  color: black;
`;

const OtherItem = styled.a`
  padding-top: 10px;
  padding-bottom: 7px;
  padding-left: 13px;
`;

const FooterText = styled.p`
  color: white;
  font-family: var(--header-font);
  width: 100%;
  text-align: center;
  margin-top: 0;
  margin-bottom: 6px;
  font-size: 13px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSectionContainer>
        <FirstItem href="https://github.com/BUGS-NYU">
          <img src={githublogo} alt="github logo" />
        </FirstItem>
        <OtherItem href="mailto:bugsnyu@gmail.com">
          <img src={maillogo} alt="mail logo" />
        </OtherItem>
        <FooterText>
          {/* Style this */}
          Made with love from BUGS
        </FooterText>
      </FooterSectionContainer>
    </FooterContainer>
  );
};

export default Footer;
