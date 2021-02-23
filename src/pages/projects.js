import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import project_data from "../data/projects";
import BoxCard from "../components/BoxCard";

const Projects = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <MainContainer>
        <PageContainer>
          <CardContainer>
            <ProjectsWrapper>
              {project_data.map(
                ({ title, subtitle, description, link, urlLink }) => (
                  <BoxCard
                    title={title}
                    subtitle={subtitle}
                    description={description}
                    link={link}
                    urlLink={urlLink || ""}
                    key={title}
                  />
                )
              )}
            </ProjectsWrapper>
          </CardContainer>
        </PageContainer>
      </MainContainer>
    </Layout>
  );
};

const MainContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  @media screen and (max-width: 1100px) {
    padding-top: 200px;
  }
`;

const PageContainer = styled.article`
  display: block;
`;

const CardContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProjectsWrapper = styled.div`
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
    max-width: 600px;
    max-height: 1200px;
    padding-bottom: 100px;
  }
`;
export default Projects;
