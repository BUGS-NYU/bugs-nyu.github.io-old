import React from "react";
import styled, { keyframes } from "styled-components";
import Img from "gatsby-image";

const TeamMember = ({ name, role, images, description }) => {
  return (
    <EboardContainer>
      {images && <Image fluid={images.childImageSharp.fluid} />}
      <Title>
        {name}
        <SubTitle> {role} </SubTitle>
      </Title>
      <DescriptionContainer>
        <Description>{description}</Description>
      </DescriptionContainer>
    </EboardContainer>
  );
};

const fadein = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const scalein = keyframes`
  from {
    transform: scale(0.9);
  }
  to {
    transform: scale(1);
  }
`;

const DescriptionContainer = styled.div`
  width: 100%;
  white-space: pre-wrap;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 5px 20px 20px 20px;
`;

const Description = styled.p`
  text-align: left;
  font-weight: 500;
  font-style: normal;
  letter-spacing: 0em;
  text-transform: none;
  line-height: 1.2;
  font-size: calc(0vw + 1rem);
  color: white;
  text-align: center;
  animation: ${scalein} 1s;
`;

const Title = styled.h2`
  font-weight: 300;
  font-style: normal;
  letter-spacing: 0em;
  text-transform: none;
  text-align: center;
  line-height: 1;
  margin-bottom: 0;
  font-size: calc(0vw + 1.5rem);
  color: white;
  animation: ${scalein} 0.9s;
`;

const EboardContainer = styled.div`
  margin: 1vw;
  min-height: 40vh;
  height: 100%;
  background-color: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 30px 0px 30px;
  animation: ${fadein} 1.5s;
  @media screen and (max-width: 768px) {
    padding: 0px 0px 0px 0px;
    margin: 0 0 25px 0;
    width: 70vw;
  }
`;

const SubTitle = styled.p`
  font-family: var(--normal-font);
  text-align: center;
  font-weight: lighter;
  color: white;
  margin: 10px 0 0 0;
  animation: ${scalein} 0.9s;
  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Image = styled(Img)`
  width: 20em;
  height: 20em;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.3);
  object-fit: contain;
  animation: ${fadein} 1.5s;

  & img {
    width: 100%;
  }
`;

export default TeamMember;
