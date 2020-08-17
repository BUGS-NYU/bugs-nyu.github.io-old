import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Burger from "./Burger";
import Menu from "./Menu";
import bugslogo from "./logo/bugs.png";

const scalein = keyframes`
  from {
    transform: scale(0.9)
  },
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
  flex: 1 0 20%;
  align-items: center;
`;

const RightContentContainer = styled.div`
  width: 80%;
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
`;

const FirstNavItem = styled.div`
  margin-right: 2.2vw;
  position: relative;
  display: inline-block;
  animation: ${scalein} 1s;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: purple;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }

  &:hover::before {
    visibility: visible;
    transform: scaleX(1);
  }
`;

const OtherNavItem = styled.div`
  animation: ${scalein} 1s;
  margin-right: 2.2vw;
  position: relative;
  display: inline-block;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: purple;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }

  &:hover::before {
    visibility: visible;
    transform: scaleX(1);
  }
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
`;

const JoinUsContainer = styled.div`
  width: 25%;
  justify-content: flex-end;
  flex-grow: 0;
  flex-shrink: 1;
  display: inline-flex;
  margin: 0 5px 0 0;
  align-items: center;
  line-height: 1;
  font-size: calc(0vw + 0.9rem);
  @media screen and (max-width: 768px) {
    width: 30vw;
  }
`;

const JoinUsButtonContainer = styled.div`
  margin: 0 0 0 0;
`;

const JoinUs = styled.a`
  color: #fff;
  background-color: #311432;
  border-color: #311432;
  text-decoration: None;
  font-weight: 450;
  font-style: normal;
  letter-spacing: 0.02em;
  text-transform: none;
  line-height: 1.2em;
  padding: 1.12em 1.8704em;
  transition: 0.3s;
  &:hover {
    opacity: 0.6;
  }

  @media screen and (max-width: 768px) {
    padding: 0.5em 0.5em;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: auto;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  outline: none;
  box-shadow: inset 0 0 0 1px rgba(128, 128, 128, 0);
  border-radius: 50px;
  transition: all 0.3s ease-in-out 0s;

  &::before {
    position:absolute; 
    background-color:#D4D37F; 
    opacity:0.5; 
    content:''; 
    width:0rem; 
    height:0rem; 
    left:50%; 
    margin-left:0; 
    bottom:0rem; 
    border-radius: 50%; 
    transition: all .2s ease-in-out;
    z-index:-1;
  }

  &:hover::before {
    width:15rem; 
    height:15rem; 
    margin-left:-7.5rem; 
    bottom:-2.5rem; 
  }

  @media screen and (max-width: 768px) {
    margin: 0px 0px 0px 0px;
  }
`;

const Image = styled.img`
  float: left;
  width: 100px;
  height: 100px;
  border: 0;
  @media screen and (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

const NavBar = () => {
  const width = window.innerWidth;
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Header>
      <HeaderWrapper open={open}>
        <ContentContainer>
          <Content>
            <LeftContentContainer>
              <ImageContainer>
                <a href="/">
                  <Image src={bugslogo} />
                </a>
              </ImageContainer>
            </LeftContentContainer>
            <RightContentContainer>
              {width <= 768 ? (
                <Burger open={open} setOpen={setOpen} />
              ) : (
                <>
                  <HeaderNavWrapper>
                    {width <= 768 ? (
                      <Burger open={open} setOpen={setOpen} />
                    ) : (
                      <NavList>
                        <FirstNavItem>
                          {/* Change to use react router Link instead */}
                          <Link href="/teams">Teams</Link>
                        </FirstNavItem>
                        <OtherNavItem>
                          <Link href="/contributors">Contributors</Link>
                        </OtherNavItem>
                        <OtherNavItem>
                          <Link href="/alumni">Alumni</Link>
                        </OtherNavItem>
                        <OtherNavItem>
                          <Link href="/projects">Projects</Link>
                        </OtherNavItem>
                        <OtherNavItem>
                          <Link href="/events">Events</Link>
                        </OtherNavItem>
                      </NavList>
                    )}
                  </HeaderNavWrapper>
                  <JoinUsContainer>
                    <JoinUsButtonContainer>
                      <JoinUs href="http://bit.ly/bugsnewsletter">
                        JOIN US
                      </JoinUs>
                    </JoinUsButtonContainer>
                  </JoinUsContainer>
                </>
              )}
            </RightContentContainer>
          </Content>
        </ContentContainer>
      </HeaderWrapper>
    </Header>
    <Menu open={open} />
    </div>
  );
};

export default NavBar;
