import React from 'react';
import styled from 'styled-components';

const BurgerButton = styled.div`
top: 5%;
left: 0.5rem;
display: flex;
flex-direction: column;
justify-content: space-around;
width: 2rem;
height: 2rem;
border: none;
cursor: pointer;
padding: 0;
z-index: 10;

span {
    width: 2rem;
    height: 0.125rem;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    background-color: white;
    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }
    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
}
`
const Burger = (props) => {

    const {open, setOpen, light} = props
    return(
        <div>
          <BurgerButton onClick={() => setOpen(!open)} open={open} light={light}>
            <span />
            <span />
            <span />
        </BurgerButton>
        </div>
    )
}


export default Burger