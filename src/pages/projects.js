import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ProjectDetails from "../components/projectDetails";
import project_data from "../data/projects";

const Projects = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <MainContainer>
        <PageContainer>
          <MainDescriptionContainer>
            {project_data.map(
              ({ title, subtitle, description, link, urlLink }) => (
                <ProjectDetails
                  title={title}
                  subtitle={subtitle}
                  description={description}
                  link={link}
                  urlLink={urlLink || ""}
                  key={title}
                />
              )
            )}
          </MainDescriptionContainer>
        </PageContainer>
      </MainContainer>
    </Layout>
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

  @media screen and (max-width: 768px) {
    margin-top: 0;
    padding-top: 17vh;
    padding-bottom: 20vh;
  }
`;

export default Projects;
