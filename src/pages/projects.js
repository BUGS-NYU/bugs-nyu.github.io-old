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
                  // <ProjectDetails
                  //   title={title}
                  //   subtitle={subtitle}
                  //   description={description}
                  //   link={link}
                  //   urlLink={urlLink || ""}
                  //   key={title}
                  // />
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
`;

const PageContainer = styled.article`
  display: block;
`;

// const MainDescriptionContainer = styled.section`
//   margin-top: 10%;
//   align-items: center;
//   min-height: 100vh;
//   padding-right: 15vw;
//   padding-bottom: 5vw;
//   padding-left: 15vw;
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
//   grid-gap: 20px;
//   justify-items: stretch;

//   @media screen and (max-width: 768px) {
//     margin-top: 0;
//     padding-top: 17vh;
//     padding-bottom: 20vh;
//   }
// `;

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
  max-height: 600px;
  grid-auto-rows: 1fr;
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  align-items: center;
  height: max-content;
`;
export default Projects;
