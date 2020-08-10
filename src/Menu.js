import React, {useState} from 'react';
import styled from 'styled-components';
const StyledMenu = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${({ theme }) => theme.primaryLight};
    transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-100%)'};
    height: 100%;
    min-width: 100%;
    margin: 0 0 0 0 ;
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    transition: transform 0.3s ease-in-out;
    a {
        font-size: 1rem;
        padding: 0.5rem 0;
        font-weight: bold;
        margin: 0 5px 10px 5px;
        text-decoration: none;
        transition: color 0.3s linear;
    }
`


const Menu = (props) => {
    const {open} = props
    const height = window.innerHeight
    return(
        <StyledMenu open={open}>
            <a href="/teams">
                Teams
            </a>
            <a href="/teams">
                Contributors
            </a>
            <a href="/teams">
                Alumni
            </a>
            <a href="/teams">
                Projects
            </a>
            <a href="/teams">
                Events
            </a>
        </StyledMenu>
    )
}

export default Menu;