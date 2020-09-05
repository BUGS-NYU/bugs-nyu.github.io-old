import React from "react";
import styled, { keyframes } from "styled-components";

const DescriptionContainer = styled.div`
  width: 100%;
  text-align: center;
  white-space: pre-wrap;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const fadein = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Description = styled.p`
  text-align: center;
  font-weight: 500;
  font-style: normal;
  letter-spacing: 0em;
  text-transform: none;
  line-height: 1.2;
  font-size: calc(0vw + 1rem);
  color: white;
  animation: ${fadein} 2s;
`;

const Title = styled.p`
  font-weight: 300;
  font-style: normal;
  letter-spacing: 0em;
  text-transform: none;
  text-align: center;
  line-height: 0.5;
  font-size: calc(0vw + 1.5rem);
  color: white;
  animation: ${fadein} 2s;
`;

const AlumniContainer = styled.div`
  margin: 1vw;
  grid-column: 1
  min-height: 40vh;
  height: 100%;
  background-color: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 60px 0px 60px;
  animation: ${fadein} 2s;
  @media screen and (max-width: 768px) {
    padding: 0px 0px 0px 0px;
    margin: 0 0 25px 0;
    width: 70vw;
  }
`;

const Alumni = (props) => {
  const { name, description } = props;
  return (
    <AlumniContainer>
      <Title> {name}</Title>
      <DescriptionContainer>
        <Description>{description}</Description>
      </DescriptionContainer>
    </AlumniContainer>
  );
};

export default Alumni;
