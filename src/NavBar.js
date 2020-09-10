import React, {useState, useEffect} from "react";
import {useHistory} from 'react-router-dom';
import styled, {keyframes} from "styled-components";
import Burger from "./Burger";
import bugslogo from "./logo/bugs.png";
import bugsLight from "./logo/bugs_light.png";
import githublogo from "./logo/GitHub-Mark-Light-32px.png";
import maillogo from "./logo/mail-32.png";
import Menu from "./Menu";

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
  padding: ${({open}) => (open ? "0 0 50px 0" : "0")};
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
  animation: ${scalein} 1s;
  font-weight: ${({current}) => (current ? "900" : "")};

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${({light}) => (light ? "purple" : "white")};
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

const ImageContainer = styled.div`
  position: relative;
  height: auto;
  outline: none;
  box-shadow: inset 0 0 0 1px rgba(128, 128, 128, 0);
  border-radius: 50px;
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
`;

const Image = styled.img`
  float: left;
  width: 100px;
  height: 100px;
  border: 0;
  @media screen and (max-width: 768px) {
    width: 70px;
    height: 70px;
  }
`;

const WideNavBar = (props) => {
  const { light, current, setPath } = props;

  return (<>
    <HeaderNavWrapper>
      <NavList>
        <NavItem light={light} current={current === "team"} >
          <Link href="" onClick={setPath("team")}>Team</Link>
        </NavItem>

        <NavItem light={light} current={current === "contributors"} >
          <Link href="" onClick={setPath("contributors")}>Contributors</Link>
        </NavItem>

        <NavItem light={light} current={current === "alumni"} >
          <Link href="" onClick={setPath("alumni")}>Alumni</Link>
        </NavItem>

        <NavItem light={light} current={current === "projects"} >
          <Link href="" onClick={setPath("projects")}>Projects</Link>
        </NavItem>

        <NavItem light={light} current={current === "events"} >
          <Link href="" onClick={setPath("events")}>Events</Link>
        </NavItem>

        <NavItem light={light}>
          <Link href="http://bit.ly/bugsnewsletter">Join Us</Link>
        </NavItem>
      </NavList>
    </HeaderNavWrapper>
    <LogosContainer>
      <Logo href="https://github.com/BUGS-NYU" light={light}>
        <img src={githublogo} alt="github logo"></img>
      </Logo>
      <Logo href="mailto:bugsnyu@gmail.com" light={light}>
        <img src={maillogo} alt="mail logo" />
      </Logo>
    </LogosContainer>
  </>);
};

const NavBarWrapper = ({ logo, rightContent, menu, open }) => {
  return (
    <div>
      <Header>
        <HeaderWrapper open={open}>
          <ContentContainer>
            <Content>
              <LeftContentContainer>
                {logo}
              </LeftContentContainer>

              <RightContentContainer>
                {rightContent}
              </RightContentContainer>
            </Content>
          </ContentContainer>
        </HeaderWrapper>
      </Header>
      {menu}
    </div>
  );
};

const NavBar = (props) => {
  const { theme } = props;
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("");
  const [width, setWidth] = useState(window.innerWidth);
  const light = theme === "light";
  const CUTOFF = 768;

  useEffect(() => {
     const handleResize = () => { setWidth(window.innerWidth); };

    window.addEventListener('resize', handleResize);

    return (x) => { window.removeEventListener('resize', handleResize); };
  })


  const setPath = (param) => {
    return (e) => {
      e.preventDefault();
      history.push(`/${param}`);
      setOpen(false);
      setCurrent(param);
    };
  };

  const logo = (
    <ImageContainer onClick={setPath("")}>
      {light ? <Image src={bugslogo} /> : <Image src={bugsLight} />}
    </ImageContainer>
  );

  const rightContent = width <= CUTOFF ?
    (<Burger open={open} setOpen={setOpen} />)
  : (<WideNavBar light={light} current={current} setPath={setPath} />);

  const menu = width <= CUTOFF ?
    (<Menu open={open} setOpen={setOpen} />)
  : (<div />);

  return (<NavBarWrapper logo={logo} open={open} rightContent={rightContent} menu={menu} />);
};

export default NavBar;
