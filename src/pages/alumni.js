import React from "react";
import styled, { keyframes } from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import AlumniDetails from "../components/alumniDetails";
import alumni_data from "../data/alumni";

const AlumniPage = () => {
  return (
    <Layout>
      <SEO title="Alumni" />
      <MainContainer>
        <PageContainer>
          <AlumniTitleContainer>
            <AlumniTitle>
              Meet Our <BoldText>Alumni</BoldText>
            </AlumniTitle>
          </AlumniTitleContainer>
          <MainDescriptionContainer>
            {Object.entries(alumni_data).map(([name, values]) => {
              return (
                <AlumniDetails
                  name={name}
                  role={values.role}
                  description={values.description}
                  key={name}
                />
              );
            })}
          </MainDescriptionContainer>
        </PageContainer>
      </MainContainer>
    </Layout>
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

const AlumniTitleContainer = styled.div`
  margin-top: 15%;
  text-align: center;
  @media screen and (max-width: 768px) {
    margin-top: 18vh;
  }
`;

const AlumniTitle = styled.h1`
  font-weight: 300;
  font-style: normal;
  letter-spacing: 0em;
  text-transform: none;
  text-align: center;
  line-height: 0.5;
  font-size: calc(0vw + 4rem);
  color: rgba(255, 255, 255, 0.7);
  animation: ${fadein} 2s;
  @media screen and (max-width: 768px) {
    font-size: calc(1vw + 1.5rem);
  }
`;

const BoldText = styled.strong`
  color: white;
`;

export default AlumniPage;
