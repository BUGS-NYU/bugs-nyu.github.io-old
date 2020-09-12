import React, { useState } from "react";
import { Link } from "gatsby";
import styled, { keyframes } from "styled-components";

import Burger from "./Burger";

import BugsLogo from "../svgs/bugs.svg";
import githublogo from "../images/logo/GitHub-Mark-Light-32px.png";
import maillogo from "../images/logo/mail-32.png";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header>
        <HeaderWrapper open={open}>
          <ContentContainer>
            <Content>
              <RightContentContainer>
                <MobileHeaderButtonsContainer>
                  <ImageContainerMobile to="/">
                    <LogoImage title="Bugs Logo" />
                  </ImageContainerMobile>
                  <Burger open={open} setOpen={setOpen} />
                </MobileHeaderButtonsContainer>

                <HeaderNavWrapper open={open}>
                  <ImageContainer to="/">
                    <LogoImage title="Bugs Logo" />
                  </ImageContainer>
                  <NavList>
                    <NavItem>
                      <NavLink to="/team" activeClassName="active">
                        Team
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink to="/contributors" activeClassName="active">
                        Contributors
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink to="/alumni" activeClassName="active">
                        Alumni
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink to="/projects" activeClassName="active">
                        Projects
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink to="/events" activeClassName="active">
                        Events
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <OffSiteLink href="http://bit.ly/bugsnewsletter">
                        Join Us
                      </OffSiteLink>
                    </NavItem>
                  </NavList>
                  <LogosContainer>
                    <Logo href="https://github.com/BUGS-NYU">
                      <img src={githublogo} alt="github logo" />
                    </Logo>
                    <Logo href="mailto:bugsnyu@gmail.com">
                      <img src={maillogo} alt="mail logo" />
                    </Logo>
                  </LogosContainer>
                </HeaderNavWrapper>
              </RightContentContainer>
            </Content>
          </ContentContainer>
        </HeaderWrapper>
      </Header>
    </>
  );
};

const scalein = keyframes`
  from {
    transform: scale(0.9)
  }
  to {
    transform: scale(1)
  }
`;

const Header = styled.header`
  z-index: 10;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  line-height: 1;
  pointer-events: none;
  font-weight: 300;
  font-style: normal;
  letter-spacing: 0em;
  text-transform: none;
  padding: 10px 10px 0px 10px;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

const HeaderWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  box-sizing: border-box;
  padding-top: 3vw;
  padding-bottom: 3vw;
  padding-left: 3vw;
  padding-right: 3vw;
  pointer-events: auto;
  transition: background 300ms ease-in-out 0s, padding 140ms ease-in-out,
    transform 140ms ease-in-out 140ms;
  background-color: transparent !important;
  padding: ${({ open }) => (open ? "0 0 50px 0" : "0")};

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

const ContentContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: inherit;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: center;
`;

const RightContentContainer = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: flex-end;
  flex-grow: 0;
  flex-shrink: 1;
  align-items: center;
  position: relative;
`;

const HeaderNavWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    transform: ${({ open }) =>
      open ? "translateY(40%)" : "translateY(-100%)"};
    height: 100vh;
    min-width: 100%;
    position: absolute;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    transition: transform 0.3s ease-in-out;
    background-color: #121212;
    z-index: 2;
    padding-top: 9vh;
  }
`;

const NavList = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  font-weight: 500;
  font-style: normal;
  letter-spacing: 0em;
  text-transform: none;
  line-height: 1.4em;
  font-size: calc(0vw + 1.2rem);
  color: #330662;
  padding: 0px 0px 0px 20px;

  @media screen and (max-width: 768px) {
    flex-wrap: none;
    padding: 0;
    flex-direction: column;
    align-items: baseline;
    width: 100%;
    height: 80vh;
  }
`;

const NavItem = styled.div`
  margin-right: 2.2vw;
  position: relative;
  display: inline-block;
  // animation: ${scalein} 1s;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--color-home-border);
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }

  &:hover::before {
    visibility: visible;
    transform: scaleX(1);
  }

  @media screen and (max-width: 768px) {
    margin-right: 0;
    position: static;
    display: block;
    width: 100%;
    text-align: center;
    font-weight: 400;
    letter-spacing: 0.01em;
    line-height: 1.6em;
    font-size: 1.8rem;

    &::before {
      display: none;
    }
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;

  &.active {
    font-weight: 900;
  }

  @media screen and (max-width: 768px) {
    display: block;
    color: #fff;
    text-decoration: none;
    padding: 2vw 4vw;

    &.active {
      font-weight: 400;
    }
  }
`;

const OffSiteLink = styled.a`
  color: white;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    display: block;
    color: #fff;
    text-decoration: none;
    padding: 2vw 4vw !important;
  }
`;

const LogosContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 0;
  flex-shrink: 1;
  line-height: 1;
  font-size: calc(0vw + 0.9rem);

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    line-height: 1.6em;
    padding: 2vw 0 0 0;
  }
`;

const Logo = styled.a`
  margin: 0 5px 0 0;
  display: block;
  padding: 3px;
  border-radius: 50%;

  @media screen and (max-width: 768px) {
    margin: 0 10px 0 0;
  }
`;

const ImageContainer = styled(Link)`
  position: relative;
  height: auto;
  outline: none;
  box-shadow: inset 0 0 0 1px rgba(128, 128, 128, 0);
  border-radius: 50px;
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileHeaderButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 100;
  padding: 10px;

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const ImageContainerMobile = styled(Link)`
  position: relative;
  height: auto;
  outline: none;
  box-shadow: inset 0 0 0 1px rgba(128, 128, 128, 0);
  border-radius: 50px;
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  display: none;

  @media screen and (max-width: 768px) {
    top: 0;
    left: 0;
    display: block;
  }
`;

const LogoImage = styled(BugsLogo)`
  float: left;
  width: 100px;
  height: 100px;
  border: 0;

  fill: var(--color-home-border);

  @media screen and (max-width: 768px) {
    width: 70px;
    height: 70px;
  }
`;

export default NavBar;
