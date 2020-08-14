import React from "react";
import styled, { keyframes } from "styled-components";
import bugslogo from "./logo/bugs.png";

const scalein = keyframes`
  from {
    transform: scale(0.9)
  },
  to {
    transform: scale(1)
  }
`

const MainContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
`;

const PageContainer = styled.article`
  display: block;
`;

const MainDescriptionContainer = styled.section`
  padding-top: 2%;
  align-items: center;
  min-height: 66vh;
  padding-right: 15vw;
  padding-bottom: 5vw;
  padding-left: 15vw;
  display: flex;
  flex-direction: column;
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

const DescriptionContainer = styled.div`
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

const fadein = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Description = styled.h1`
  font-weight: 500;
  font-style: normal;
  text-transform: none;
  line-height: 1.2;
  font-size: calc(3vw + 1rem);
  color: rgba(255,255,255,.7);
  animation: ${fadein} 2s;
`;

const BoldText = styled.strong`
  color: white;
`

const ImageContainer = styled.div`
  position: relative;
  height: auto;
  padding: 17px 0px 5px 0px;
  margin: 50px 0px 5px 0px;
  outline: none;
  box-shadow: inset 0 0 0 1px rgba(128, 128, 128, 0);
  animation: ${fadein} 2s;
  @media screen and (max-width: 768px) {
    margin: 0px 0px 0px 0px;
  }
`;

const Image = styled.img`
  float: left;
  width: 100px;
  height: 100px;
  border: 0;
`;

const ContentContainer = styled.div`
  position: relative;
  margin: 0 0 5px 0;
  padding: 0 5px 20px 5px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2);
  grid-auto-rows: min-content;
  grid-gap: 20px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const FirstContentBox = styled.div`
  background-color: white;
  min-height: 100%;
  min-width: 80%;
  grid-column: 1;
  position: relative;
  margin: 0 0 0 2px;
  border-radius: 3px 3px 3px 3px;
  box-shadow: 0 4px 6px 0;
  justify-content: flex-start;
  padding: 10px;
  text-align: center;
  animation :${scalein} 1s;
  @media screen and (max-width: 768px) {
    margin: 0 0 20px 0;
  }
`;

const SecondContentBox = styled.div`
  background-color: white;
  min-height: 100%;
  min-width: 80%;
  grid-column: 2;
  position: relative;
  margin: 0 0 0 5px;
  border-radius: 3px 3px 3px 3px;
  box-shadow: 0 4px 6px 0;
  justify-content: flex-start;
  padding: 10px;
  text-align: center;
  animation :${scalein} 1s;
  @media screen and (max-width: 768px) {
    margin: 0 0 20px 0;
  }
`;

const ThirdContentBox = styled.div`
  background-color: white;  
  min-height: 100%;
  min-width: 80%;
  grid-column: 3;
  position: relative;
  margin: 0 5px 0 5px;
  border-radius: 3px 3px 3px 3px;
  box-shadow: 0 4px 6px 0;
  justify-content: flex-start;
  padding: 10px;
  text-align: center;
  animation :${scalein} 1s;
  @media screen and (max-width: 768px) {
    margin: 0 0 0 0;
  }
`;

const Title = styled.h1`
  font-weight: 500;
  font-style: normal;
  letter-spacing: 0em;
  text-transform: none;
  line-height: 1.2;
  font-size: calc(0vw + 2rem);
  color: black;
  animation: ${fadein} 2s;
`;

const DescriptionText = styled.p`
  position: relative;
  text-align: center;
`;

const FourthContentBox = styled.div`
  background-color: white;
  position: relative;
  border-radius: 3px 3px 3px 3px;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 20px 5px 5% 5px;
  animation :${scalein} 1s;
  @media screen and (max-width: 768px) {
    margin: 5px 5px 10vh 5px;
  }
`;

const HomePage = () => {
  return (
    <MainContainer>
      <PageContainer>
        <MainDescriptionContainer>
          <ContentWrapper>
            <Wrapper>
              <DescriptionContainer>
                <Description>NYU <BoldText>
                  Open Source  
                </BoldText> Club</Description>
              </DescriptionContainer>
            </Wrapper>
          </ContentWrapper>
          <ContentContainer>
            <FirstContentBox>
              <Title>What's Open Source?</Title>
              <DescriptionText>
                Open source represents a form of licensing that encourages
                collaboration and transparency. Look more on Open Source Guide
              </DescriptionText>
            </FirstContentBox>
            <SecondContentBox>
              <Title>What We Offer?</Title>
              <DescriptionText>
                Other than maintaining open source projects such as Schedge,
                BUGS also co-hosts project nights weekly on Friday. The event
                serves as a friendly community for NYU students, specifically
                those majoring in Computer Science to exchange ideas, code and
                have fun. We are also experimenting with a mentorship program
                this summer, which helps students learn the basics of web
                development in React
              </DescriptionText>
            </SecondContentBox>
            <ThirdContentBox>
              <Title>How to Contribute?</Title>
              <DescriptionText>
                If this is your first time contributing, take a look at first
                contributions. Awesome for beginers is a repository containing
                Github projects that have good first issue for new open source
                contributors. It is sorted by language so choose your language
                and PR-away. We also currently have our own open source
                projects. The site you are currently on is open source. So feel
                free to make contribution to the repository . Additionally, we
                are working on maintaining an NYU course API schedge
              </DescriptionText>
            </ThirdContentBox>
          </ContentContainer>
          <FourthContentBox>
            <Title>Mozilla Partnership</Title>
            <DescriptionText>
              BUGS is a member of the Open Source Student Network, a network of
              university clubs and students that share the belief that open
              source software is the engine that powers innovation
            </DescriptionText>
            <DescriptionText>
              NYU BUGS is the open source club at NYU. We promote open source by
              engaging students through collaborative projects, hosting industry
              professions, and running open source workshops
            </DescriptionText>
          </FourthContentBox>
        </MainDescriptionContainer>
      </PageContainer>
    </MainContainer>
  );
};

export default HomePage;
