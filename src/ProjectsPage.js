import React from "react";
import styled, { keyframes } from "styled-components";
import githublogo from "./logo/GitHub-Mark-32px.png";

const slideleft = keyframes`
100%{transform: translateX(0%);}
`;

const ProjectContainer = styled.div`
  margin: 1vw;
  grid-column: 1
  min-height: 40vh;
  background-color: none;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 0px 0px 0px 3px #330662;
  align-items: center;
  padding: 5px 10px 10px 10px;
  transform: ${({ odd }) => (odd ? "translateX(-100%)" : "translateX(100%)")};
  animation: ${slideleft} 1s forwards;
  transition: all 0.2s linear;

  &:hover {
    box-shadow: 0px 0px 0px 10px #330662;
  }

  @media screen and (max-width: 768px) {
    padding: 5px 5px 5px 5px;
    margin: 0;
    width: 70vw;
  }
`;

const SubTitle = styled.h2`
  font-family: var(--normal-font);
  text-align: center;
  font-weight: lighter;
  width: 100%;
  border-bottom: 1px solid white;
  color: white;
`;

const LinkContainer = styled.div`
  text-align: center;
  transition: all 0.3s linear;
`;

const URLLink = styled.a`
  font-size: small;
  text-decoration: none;
  color: white;
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

  @media screen and (max-width: 768px) {
    padding-top: 10vh;
    padding-bottom: 20vh;
  }
`;

const DescriptionContainer = styled.div`
  width: 100%;
  text-align: center;
  white-space: pre-wrap;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Description = styled.h4`
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0em;
  text-transform: none;
  line-height: 1.2;
  font-size: calc(0vw + 1.2rem);
  color: white;
`;

const Title = styled.h1`
  font-weight: 500;
  font-style: normal;
  letter-spacing: 0em;
  text-transform: none;
  line-height: 0.5;
  font-size: calc(0vw + 2rem);
  color: white;
`;

const Logo = styled.img`
  margin: 0px 5px 0px 0px;
`;

const Project = (props) => {
  const { title, subtitle, description, link, urlLink, odd, light } = props;

  return (
    <ProjectContainer odd={odd}>
      <URLLink href={urlLink}>
        <Title light={light}>{title}</Title>
      </URLLink>
      <SubTitle>{subtitle}</SubTitle>
      <DescriptionContainer>
        <Description>{description}</Description>
      </DescriptionContainer>
      <LinkContainer>
        <Logo src={githublogo} />
        <URLLink href={`https://${link}`} light={light}>
          {link}
        </URLLink>
      </LinkContainer>
    </ProjectContainer>
  );
};

const ProjectsPage = (props) => {
  const { theme } = props;
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
