import React from "react";
import styled from "styled-components";

const Toggle = ({ theme, onToggle }) => {
  return (
    <>
      <Input
        type="checkbox"
        id="switch"
        checked={theme === "dark"}
        onChange={onToggle}
      />
      <Label htmlFor="switch">Toggle</Label>
    </>
  );
};

const Input = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;

  &:checked + label {
    background: #121212;
  }

  &:checked + label::after {
    left: calc(100% - 5px);
    transform: translateX(-100%);
  }

  label:active::after {
    width: 100px;
  }
`;

const Label = styled.label`
  cursor: pointer;
  text-indent: -9999px;
  width: 80px;
  height: 40px;
  background: grey;
  display: block;
  border-radius: 100px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    width: 30px;
    height: 30px;
    background: #fff;
    border-radius: 90px;
    transition: 0.3s;
  }

  @media screen and (max-width: 768px) {
    width: 50px;
    height: 30px;

    &::after {
      width: 20px;
      height: 20px;
    }
  }
`;

export default Toggle;
