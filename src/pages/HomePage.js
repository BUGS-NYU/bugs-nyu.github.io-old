import React from "react";
import styled, { keyframes } from "styled-components";

const scalein = keyframes`
  from {
    transform: scale(0.9)
  },
  to {
    transform: scale(1)
  }
`;

const fadein = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const MainContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
`;

const PageContainer = styled.article`
  display: block;
`;

const MainPage = styled.section`
  padding-top: 2%;
  align-items: center;
  min-height: 66vh;
  padding-right: 15vw;
  padding-bottom: 5vw;
  padding-left: 15vw;
  display: flex;
  flex-direction: column;
  z-index: 2;
`;

const ContentWrapper = styled.div`
  padding-top: 6.6vmax;
  padding-bottom: 6.6vmax;
  margin: 0 auto;
  box-sizing: content-box;
  justify-content: center;
  display: flex;
  width: 100%;
`;

const Wrapper = styled.div`
  width: 80%;
`;

const TitleContainer = styled.div`
  width: 100%;
  text-align: center;
  white-space: pre-wrap;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-weight: 500;
  font-style: normal;
  text-transform: none;
  line-height: 1.2;
  font-size: calc(3vw + 1rem);
  color: rgba(255, 255, 255, 0.7);
  animation: ${fadein} 2s;
`;

const BoldText = styled.strong`
  color: white;
`;

const TileContainer = styled.div`
  position: relative;
  margin: 0 0 10% 0;
  padding: 0 5px 20px 5px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: min-content;
  grid-gap: 20px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }

  div {
    min-height: 100%;
    min-width: 80%;
    position: relative;
    border-radius: 15px;
    justify-content: flex-start;
    animation: ${scalein} 1s;
    box-shadow: ${({ light }) =>
      light
        ? "0px 0px 0px 5px #57068c"
        : "0px 0px 0px 5px rgba(255, 255, 255, 0.7)"};
    transition: all 0.2s linear;

    @media screen and (max-width: 768px) {
      min-height: 100%;
    }

    :first-child {
      grid-column: 1;
      padding: 0 20px 10px 20px;
      @media screen and (max-width: 768px) {
        margin: 0 0 20px 0;
      }
    }

    :nth-child(2) {
      grid-column: 2;
      padding: 0 20px 10px 20px;
      @media screen and (max-width: 768px) {
        margin: 0 0 20px 0;
      }
    }

    :nth-child(3) {
      grid-column: 3;
      padding: 0 20px 10px 20px;
      @media screen and (max-width: 768px) {
        margin: 0 0 20px 0;
      }
    }
  }
`;

const TileTitle = styled.h1`
  font-weight: 500;
  font-style: normal;
  letter-spacing: 0em;
  text-transform: none;
  line-height: 1.2;
  font-size: calc(0vw + 2rem);
  text-align: center;
  color: #f5f5f5;
  animation: ${fadein} 2s;
`;

const TileDescription = styled.p`
  position: relative;
  color: white;
  text-align: center;
  @media screen and (max-width: 768px) {
    padding: 0 10px 5px 10px;
  }
`;

const HomePage = ({ theme }) => {
  const light = theme === "light";

  return (
    <MainContainer>
      <PageContainer>
        <MainPage>
          <ContentWrapper>
            <Wrapper>
              <TitleContainer>
                <Title>
                  NYU <BoldText>Open Source</BoldText> Club
                </Title>
              </TitleContainer>
            </Wrapper>
          </ContentWrapper>
          <TileContainer light={light}>
            <div>
              <TileTitle>Open Source</TileTitle>
              <TileDescription>
                A form of licensing that celebrates open exchange, collaborative
                participation, transparency, and community-oriented development.
              </TileDescription>
            </div>
            <div>
              <TileTitle> Create</TileTitle>
              <TileDescription>
                Build useful and fun projects with other club members to solve
                problems and learn. Collaborate with other clubs on and off
                campus.
              </TileDescription>
            </div>
            <div>
              <TileTitle>Contribute</TileTitle>
              <TileDescription>
                If this is your first time contributing, take a look at the BUGS
                repository. Fork it, make pull requests, report issues and git
                good!!!
              </TileDescription>
            </div>
          </TileContainer>
        </MainPage>
      </PageContainer>
    </MainContainer>
  );
};

export default HomePage;
