import React from 'react';
import styled from 'styled-components';
const StyledMenu = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-100%)'};
    height: 100%;
    min-width: 100%;
    margin: 0 0 0 0 ;
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    transition: transform 0.3s ease-in-out;
`

const Link = styled.a`
    display: block;
    font-size: 1rem;
    padding: 0.5rem 0;
    font-weight: bold;
    margin: 50px 5px 10px 5px;
    color: #330662;
    text-decoration: none;
    transition: color 0.3s linear;
`
const Menu = (props) => {
    const {open} = props

    return(
        <StyledMenu open={open}>
            <Link href="/teams">
                Teams
            </Link>
            <Link href="/contributors">
                Contributors
            </Link>
            <Link href="/alumni">
                Alumni
            </Link>
            <Link href="/projects">
                Projects
            </Link>
            <Link href="/events">
                Events
            </Link>
        </StyledMenu>
    )
}

export default Menu;