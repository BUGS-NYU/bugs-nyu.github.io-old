import React from 'react';
import styled, {keyframes} from 'styled-components';

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
  grid-column: 1
  min-height: 40vh;
  height: 100%;
  background-color: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 60px 0px 60px;
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

const Image = styled.img`
  width: 70%;
  object-fit: contain;
  animation: ${fadein} 1.5s;
  @media screen and (max-width: 768px) {
    width: 50%;
  }
`;

const Eboard = (props) => {
    const { name, role, image, description } = props;

    return (
      <EboardContainer>
        <Image src={image} />

        <Title>
          {name}
          <SubTitle>{role}</SubTitle>
        </Title>

        <DescriptionContainer>
          <Description>{description}</Description>
        </DescriptionContainer>
      </EboardContainer>
    );
  };

export default Eboard;