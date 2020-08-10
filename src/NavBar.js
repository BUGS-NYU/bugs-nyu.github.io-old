import React from "react";
import styled from "styled-components";

const Header = styled.header`
  z-index: 10;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  line-height: 1;
  pointer-events: none;
  font-family: Poppins;
  font-weight: 300;
  font-style: normal;
  letter-spacing: 0em;
  text-transform: none;
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
  flex: 1 0 67%;
  align-items: center;
`;

const RightContentContainer = styled.div`
  width: 33%;
  justify-content: flex-end;
  flex-grow: 0;
  flex-shrink: 1;
  display: inline-flex;
  align-items: center;
`;

const TitleContainer = styled.div`
  width: 34%;
  text-align: center;
  flex: 1 1 34%;
`;

const HeaderNavWrapper = styled.div`
  width: 33%;
  flex: 1 1 33%;
`;

const NavList = styled.nav`
  display: inline-flex;
  flex-wrap: wrap;
  font-family: Poppins;
  font-weight: 500;
  font-style: normal;
  letter-spacing: 0em;
  text-transform: none;
  line-height: 1.4em;
  font-size: calc(0vw + 1.2rem);
  color: #330662;
`;

const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  max-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
`;

const FirstNavItem = styled.div`
  margin-right: 2.2vw;
  position: relative;
  display: inline-block;
  &:hover ${Dropdown} {
    display: block;
  }
`;

const OtherNavItem = styled.div`
  margin-right: 2.2vw;
`;

const Link = styled.a`
  color: rgb(51, 6, 98);
  text-decoration: none;
`;

const Title = styled.a`
  color: #330662;
  text-decoration: None;
  font-family: Poppins;
  font-weight: 500;
  font-style: normal;
  letter-spacing: 0em;
  text-transform: none;
  line-height: 1.4em;
  font-size: calc(1.2vw + 1rem);
`;

const JoinUsContainer = styled.div`
  width: 33%;
  justify-content: flex-end;
  flex-grow: 0;
  flex-shrink: 1;
  display: inline-flex;
  align-items: center;
  line-height: 1;
  font-size: calc(0vw + 1rem);
`;

const JoinUsButtonContainer = styled.div`
  margin: 0 0 0 1vw;
`;

const JoinUs = styled.a`
  color: #fff;
  background-color: #311432;
  border-color: #311432;
  text-decoration: None;
  font-family: Poppins;
  font-weight: 500;
  font-style: normal;
  letter-spacing: 0.02em;
  text-transform: none;
  line-height: 1.2em;
  padding: 1.12em 1.8704em;
  transition: 0.3s;
  &:hover {
    opacity: 0.6;
  }
`;

const DropdownContent = styled.a`
  color: rgb(51, 6, 98);
  text-decoration: none;
  display: block;
  text-align: left;
`;

const NavBar = () => {
  return (
    <Header>
      <HeaderWrapper>
        <ContentContainer>
          <Content>
            <LeftContentContainer>
              <HeaderNavWrapper>
                <NavList>
                  <FirstNavItem>
                    {/* Change to use react router Link instead */}
                    <Link href="/teams">Teams</Link>
                    <Dropdown>
                      <DropdownContent href="/contributors">
                        Contributors
                      </DropdownContent>
                      <DropdownContent href="/alumni">Alumni</DropdownContent>
                    </Dropdown>
                  </FirstNavItem>
                  <OtherNavItem>
                    <Link href="/projects">Projects</Link>
                  </OtherNavItem>
                  <OtherNavItem>
                    <Link href="/events">Events</Link>
                  </OtherNavItem>
                </NavList>
              </HeaderNavWrapper>
              <TitleContainer>
                <Title href="/">BUGS@NYU</Title>
              </TitleContainer>
            </LeftContentContainer>
            <RightContentContainer>
              <JoinUsContainer>
                <JoinUsButtonContainer>
                  <JoinUs href="http://bit.ly/bugsnewsletter">JOIN US</JoinUs>
                </JoinUsButtonContainer>
              </JoinUsContainer>
            </RightContentContainer>
          </Content>
        </ContentContainer>
      </HeaderWrapper>
    </Header>
  );
};

export default NavBar;
