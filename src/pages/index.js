import React from "react";
import styled, { keyframes } from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BoxCard from "../components/BoxCard";
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
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
            <CardContainer>
              <TileWrapper>
                <BoxCard
                  title={"Open Source"}
                  description={
                    "A form of licensing that celebrates open exchange,collaborative participation, transparency, and community-oriented development."
                  }
                  step={1}
                  contentType="tile"
                />
                <BoxCard
                  title={"Create"}
                  description={
                    "Build useful and fun projects with other club members to solve problems and learn. Collaborate with other clubs on and off campus"
                  }
                  step={2}
                  contentType="tile"
                />
                <BoxCard
                  title={"Contribute"}
                  description={
                    "If this is your first time contributing, take a look at the BUGS repository. Fork it, make pull requests, report issues and git good!!!"
                  }
                  step={3}
                  contentType="tile"
                />
              </TileWrapper>
            </CardContainer>
          </MainPage>
        </PageContainer>
      </MainContainer>
    </Layout>
  );
};

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

const CardContainer = styled.div`
  min-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TileWrapper = styled.div`
  animation: ${scalein} 1s;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  max-width: 1200px;
  grid-auto-rows: 1fr;
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  align-items: center;
  height: max-content;

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(6, 1fr);
    max-width: 50vw;
    max-height: 1200px;
    padding-bottom: 100px;
  }
`;
export default IndexPage;
