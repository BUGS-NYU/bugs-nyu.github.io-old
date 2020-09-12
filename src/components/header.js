import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import styled, { keyframes } from "styled-components";

import Burger from "./Burger";
import Menu from "./Menu";

import BugsLogo from "../svgs/bugs.svg";
import githublogo from "../images/logo/GitHub-Mark-Light-32px.png";
import maillogo from "../images/logo/mail-32.png";

const NavBar = () => {
  const CUTOFF = 768;

  const isServer = typeof window === "undefined";
  const [width, setWidth] = useState(isServer ? CUTOFF : window.innerWidth);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
      <Header>
        <HeaderWrapper open={open}>
          <ContentContainer>
            <Content>
              <LeftContentContainer>
                <ImageContainer to="/">
                  <LogoImage title="Bugs Logo" />
                </ImageContainer>
              </LeftContentContainer>
              <RightContentContainer>
                {width <= CUTOFF ? (
                  <Burger open={open} setOpen={setOpen} />
                ) : (
                  <>
                    <HeaderNavWrapper>
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
                    </HeaderNavWrapper>
                    <LogosContainer>
                      <Logo href="https://github.com/BUGS-NYU">
                        <img src={githublogo} alt="github logo" />
                      </Logo>
                      <Logo href="mailto:bugsnyu@gmail.com">
                        <img src={maillogo} alt="mail logo" />
                      </Logo>
                    </LogosContainer>
                  </>
                )}
              </RightContentContainer>
            </Content>
          </ContentContainer>
        </HeaderWrapper>
      </Header>
      {width <= CUTOFF && <Menu open={open} />}
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

const LeftContentContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex: 1
  align-items: center;
`;

const RightContentContainer = styled.div`
  width: 100%;
  justify-content: flex-end;
  flex-grow: 0;
  flex-shrink: 1;
  display: inline-flex;
  align-items: center;
`;

const HeaderNavWrapper = styled.div`
  width: 100%;
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
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;

  &.active {
    font-weight: 900;
  }
`;

const OffSiteLink = styled.a`
  color: white;
  text-decoration: none;
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
    width: 30vw;
  }
`;

const Logo = styled.a`
  margin: 0 5px 0 0;
  display: block;
  padding: 3px;
  border-radius: 50%;
`;

const ImageContainer = styled(Link)`
  position: relative;
  height: auto;
  outline: none;
  box-shadow: inset 0 0 0 1px rgba(128, 128, 128, 0);
  border-radius: 50px;
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
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
