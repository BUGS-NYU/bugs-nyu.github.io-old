import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <MainContainer>
      <PageContainer>
        <Title>
          <NotFound>NOT FOUND</NotFound>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </Title>
      </PageContainer>
    </MainContainer>
  </Layout>
);

const MainContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
`;

const PageContainer = styled.article`
  display: block;
`;

const Title = styled.div`
  margin-top: 15%;
  text-align: center;
  color: #ffffff;

  @media screen and (max-width: 768px) {
    margin-top: 0;
    padding-top: 20vh;
  }
`;

const NotFound = styled.h1`
  font-weight: 500;
  font-style: normal;
  letter-spacing: 0em;
  text-transform: none;
  text-align: center;
  line-height: 0.5;
  font-size: calc(0vw + 4rem);
  @media screen and (max-width: 768px) {
    font-size: calc(1vw + 1.5rem);
  }
`;

export default NotFoundPage;
