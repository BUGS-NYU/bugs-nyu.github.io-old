import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import githublogo from "../images/logo/GitHub-Mark-Light-32px.png";
import maillogo from "../images/logo/mail-32.png";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <LinksContainer>
        <LinkWrapper>
          <MenuLink to="/team" activeClassName="active">
            Team
          </MenuLink>
        </LinkWrapper>

        <LinkWrapper>
          <MenuLink to="/contributors" activeClassName="active">
            Contributors
          </MenuLink>
        </LinkWrapper>

        <LinkWrapper>
          <MenuLink to="/alumni" activeClassName="active">
            Alumni
          </MenuLink>
        </LinkWrapper>

        <LinkWrapper>
          <MenuLink to="/projects" activeClassName="active">
            Projects
          </MenuLink>
        </LinkWrapper>

        <LinkWrapper>
          <MenuLink to="/events" activeClassName="active">
            Events
          </MenuLink>
        </LinkWrapper>

        <LogoContainer>
          <Logo href="https://github.com/BUGS-NYU">
            <img src={githublogo} alt="github logo" />
          </Logo>
          <Logo href="mailto:bugsnyu@gmail.com">
            <img src={maillogo} alt="mail logo" />
          </Logo>
        </LogoContainer>
      </LinksContainer>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  display: flex;
  transform: ${({ open }) => (open ? "translateY(0%)" : "translateY(-100%)")};
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
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  width: 100%;
  height: 80vh;
`;

const LinkWrapper = styled.nav`
  width: 100%;
  text-align: center;
  font-weight: 400;
  letter-spacing: 0.01em;
  line-height: 1.6em;
  font-size: 1.8rem;
`;

const MenuLink = styled(Link)`
  display: block;
  color: #fff;
  text-decoration: none;
  padding: 2vw 4vw;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  line-height: 1.6em;
  padding: 2vw 0 0 0;
`;

const Logo = styled.a`
  margin: 0px 10px 0 0;
  display: block;
`;

export default Menu;
