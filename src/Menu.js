import React from 'react';
import styled from 'styled-components';
// const StyledMenu = styled.nav`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     transform: ${({ open }) => open ? 'translateY(0%)' : 'translateY(-100%)'};
//     height: 1000vh;
//     min-width: 100%;
//     position: absolute;
//     display: flex;
//     flex-direction: row;
//     align-items: flex-end;
//     transition: transform 0.3s ease-in-out;
//     background-color: black;
//     z-index: 2;
// `

// const Link = styled.a`
//     display: block;
//     font-size: 1rem;
//     padding: 0.5rem 0;
//     font-weight: bold;
//     margin: 50px 5px 10px 5px;
//     color: #330662;
//     text-decoration: none;
//     transition: color 0.3s linear;
// `

// const NavBar = styled.nav`
//     display: flex;
//     flex-direction: column;
//     position: absolute;
//     padding: 50px;
//     height: 150vh;
//     width: 100vw;
//     background-color: white;
// `
// const Menu = (props) => {
//     const {open} = props

//     return(
//         <StyledMenu open={open}>
//             <NavBar>
                
//             </NavBar>
//         </StyledMenu>
//     )
// }

const StyledMenu = styled.nav`
    display: flex;
    transform: ${({ open }) => open ? 'translateY(0%)' : 'translateY(-100%)'};
    height: 700vh;
    min-width: 100%;
    position: absolute;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    transition: transform 0.3s ease-in-out;
    background-color: black;
    z-index: 2;
`


const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    width: 100%;
    height: 80vh;
`

const LinkWrapper = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 400;
  letter-spacing: .01em;
  line-height: 1.6em;
  font-size: 1.8rem;
`

const Link = styled.a`
  display: block;
  color: #fff;
  text-decoration: none;
  padding: 2vw 4vw;
`;

const Menu = (props) => {
    const {open} = props

    return(
        <StyledMenu open={open}>
            <LinksContainer>
              <LinkWrapper>
              <Link href="/teams">
                Teams
              </Link>
              </LinkWrapper>
              <LinkWrapper>
              <Link href="/contributors">
                Contributors
              </Link>
              </LinkWrapper>
              <LinkWrapper>
              <Link href="/alumni">
                Alumni
              </Link>
              </LinkWrapper>
              <LinkWrapper>
              <Link href="/projects">
                Projects
              </Link>
              </LinkWrapper>
              <LinkWrapper>
              <Link href="/events">
                Events
              </Link>
              </LinkWrapper>
            </LinksContainer>
        </StyledMenu>
    )
}

export default Menu;