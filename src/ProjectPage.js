import React from "react";
import styled from "styled-components";

const ContentContainer = styled.div`
  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(3, 1fr);
  background-color: #74a4bc;
  min-height: 100vh;
  width: 100vw;
`;

const ProjectContainer = styled.div`
  margin: 1vw;
  min-height: 40vh;
  background-color: #FFEEDD;
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-raidus: 3px 3px 3px 3px;
  box-shadow: 0 4px 6px 0;
`;

const DescriptionContainer = styled.div`
  position: relative;
  text-align: center;
`;

const Description = styled.p`
  font-family: Source Sans Pro;
  font-style: normal;
  color: black;
`;

const Title = styled.h1`
  position: relative;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  color: black;
  text-align: center;
`;

const SubTitle = styled.h2`
  font-family: var(--normal-font);
  text-align: center;
  font-weight: lighter;
  border-bottom: 1px solid rgb(117, 117, 116);
  color: rgb(117, 117, 116);
`;

const LinkContainer = styled.div`
    text-align: center;
`

const Link = styled.a`
    font-size: small;
`

const ProjectPage = () => {
  return (
    <ContentContainer>
      <ProjectContainer>
        <Title> Schedge API </Title>
        <SubTitle>A course API for NYU students</SubTitle>
        <DescriptionContainer>
            <Description>
            The website is built from scratch, using basic HTML, CSS, and
            JavaScript, to be a one-stop-shop for information about the Open
            Source Club. It's provides information about what the club is, the
            projects we work on, and upcoming events.
            </Description>
        </DescriptionContainer>
        <LinkContainer>
            <Link href="https://github.com/BUGS-NYU/schedge">
                github.com/BUGS-NYU/schedge
            </Link>
        </LinkContainer>
      </ProjectContainer>
      <ProjectContainer>
      <Title> BUGS webste </Title>
        <SubTitle> The thing you are on right now</SubTitle>
        <DescriptionContainer>
            <Description>
            The website is built from scratch, using basic HTML, CSS, and
            JavaScript, to be a one-stop-shop for information about the Open
            Source Club. It's provides information about what the club is, the
            projects we work on, and upcoming events.
            </Description>
        </DescriptionContainer>
        <LinkContainer>
            <Link href="https://github.com/BUGS-NYU/bugs-nyu.github.io">
                github.com/BUGS-NYU/bugs-nyu.github.io
            </Link>
        </LinkContainer>
      </ProjectContainer>
      <ProjectContainer>
      <Title> BUGS webste </Title>
        <SubTitle> The thing you are on right now</SubTitle>
        <DescriptionContainer>
            <Description>
            The website is built from scratch, using basic HTML, CSS, and
            JavaScript, to be a one-stop-shop for information about the Open
            Source Club. It's provides information about what the club is, the
            projects we work on, and upcoming events.
            </Description>
        </DescriptionContainer>
        <LinkContainer>
            <Link href="https://github.com/BUGS-NYU/bugs-nyu.github.io">
                github.com/BUGS-NYU/bugs-nyu.github.io
            </Link>
        </LinkContainer>
      </ProjectContainer>
      <ProjectContainer>
      <Title> BUGS webste </Title>
        <SubTitle> The thing you are on right now</SubTitle>
        <DescriptionContainer>
            <Description>
            The website is built from scratch, using basic HTML, CSS, and
            JavaScript, to be a one-stop-shop for information about the Open
            Source Club. It's provides information about what the club is, the
            projects we work on, and upcoming events.
            </Description>
        </DescriptionContainer>
        <LinkContainer>
            <Link href="https://github.com/BUGS-NYU/bugs-nyu.github.io">
                github.com/BUGS-NYU/bugs-nyu.github.io
            </Link>
        </LinkContainer>
      </ProjectContainer>
      <ProjectContainer />
      <ProjectContainer />
      <ProjectContainer />
    </ContentContainer>
  );
};

export default ProjectPage;
