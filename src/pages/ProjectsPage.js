import React from "react";
import styled from "styled-components";

import Project from "../components/Project";

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
    padding-top: 10vh;
    padding-bottom: 20vh;
  }
`;

const ProjectsPage = ({ theme }) => {
  const light = theme === "light";
  return (
    <MainContainer>
      <PageContainer>
        <MainDescriptionContainer>
          <Project
            title="Schedge API"
            subtitle="Course API for NYU"
            description="Schedge is an open source API to NYU's course catalog, geared at 
            eventually helping NYU students plan their courses easier and faster.
            Our goal with this API is to make it easier for 
            students to plan out their schedules, and eventually to also do some of that for them"
            link="github.com/BUGS-NYU/schedge"
            urlLink="https://schedge.a1liu.com/"
            odd={true}
            light={light}
          />
          <Project
            title="BUGS website"
            subtitle="Website For The Club"
            description="The website is built from scratch, using React, 
            to be a one-stop-shop for information about the Open
            Source Club. It's provides information about what the club is,
            the projects we work on, and upcoming events. We hope to constantly update
            the website with features"
            link="github.com/BUGS-NYU/bugs-nyu.github.io"
            urlLink="https://bugs-nyu.github.io/"
            odd={false}
            light={light}
          />
          <Project
            title="Spark"
            subtitle="Mentorship Program"
            description="Spark is a mentorship program run by TorchNYU, an organization dedicated towards improving NYU CS, and BUGS, NYU's open source development club.

            We teach students practical and pragmatic software development through working on and shipping projects."
            link="github.com/torchnyu/spark"
            urlLink="https://spark.torchnyu.com/"
            odd={true}
            light={light}
          />
          <Project
            title="NYU data hubs"
            subtitle="NYU Data Hub"
            description="The data hub is an open source one stop shop for course API
            at NYU, collected using Schedge API. The data hub contains course API
            since fall 2019 to current semester. In the future, we would like to extend the project
            into a website with helpful advice about CS classes at NYU"
            link="github.com/BUGS-NYU/bugs-data-hub"
            urlLink=""
            odd={false}
            light={light}
          />
        </MainDescriptionContainer>
      </PageContainer>
    </MainContainer>
  );
};

export default ProjectsPage;
