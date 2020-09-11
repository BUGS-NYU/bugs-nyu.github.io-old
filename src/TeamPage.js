import React from "react";
import styled, { keyframes } from "styled-components";
import eboard from './Eboard';

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

const EboardDescriptionContainer = styled.div`
  width: 100%;
  white-space: pre-wrap;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 5px 20px 20px 20px;
`;

const EboardDescription = styled.p`
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

const EboardTitle = styled.h2`
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

const EboardSubTitle = styled.p`
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

const EboardImage = styled.img`
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
      <EboardImage src={image} />

      <EboardTitle>
        {name}
        <EboardSubTitle>{role}</EboardSubTitle>
      </EboardTitle>

      <EboardDescriptionContainer>
        <EboardDescription>{description}</EboardDescription>
      </EboardDescriptionContainer>
    </EboardContainer>
  );
};

const MainContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
`;

const PageContainer = styled.article`
  display: block;
`;

const MainDescriptionContainer = styled.section`
  margin-top: 10%;
  align-items: center;
  min-height: 100vh;
  padding-right: 15vw;
  padding-bottom: 5vw;
  padding-left: 15vw;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 20px;
  justify-items: stretch;
  margin-bottom: 5%;
`;

const EboardTitleContainer = styled.div`
  margin-top: 15%;
  text-align: center;
  margin-bottom: 50px;
  @media screen and (max-width: 768px) {
    margin-top: 18vh;
  }
`;

const TeamTitle = styled.h1`
  font-weight: 300;
  font-style: normal;
  letter-spacing: 0em;
  text-transform: none;
  text-align: center;
  line-height: 0.5;
  font-size: calc(0vw + 4rem);
  color: rgba(255, 255, 255, 0.7);
  animation: ${scalein} 0.9s;
  @media screen and (max-width: 768px) {
    font-size: calc(0.5vw + 1.5rem);
  }
`;

const BoldText = styled.strong`
  color: white;
`;

const TeamPage = () => {
  return (
    <MainContainer>
      <PageContainer>
        <EboardTitleContainer>
          <TeamTitle>
            Meet Our <BoldText>Executive Board</BoldText>
          </TeamTitle>
        </EboardTitleContainer>

        <MainDescriptionContainer>
          {eboard.map(({ name, role, description, image }) => {
            return (
              <Eboard name={name} role={role} description={description}
                image={image} key={name} />
            );
          })}
        </MainDescriptionContainer>
      </PageContainer>
    </MainContainer>
  );
};

export default TeamPage;
