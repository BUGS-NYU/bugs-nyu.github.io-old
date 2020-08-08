import React from "react";
import styled, { keyframes } from "styled-components";

const ProjectContainer = styled.div`
  margin: 1vw;
  grid-column: 1
  min-height: 40vh;
  background-color: #FFEEDD;
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-raidus: 3px 3px 3px 3px;
  box-shadow: 0 4px 6px 0;
  align-items: center;
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
`;

const fadein = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Description = styled.h4`
  font-family: Poppins;
  font-weight: 500;
  font-style: normal;
  letter-spacing: 0em;
  text-transform: none;
  line-height: 1.2;
  font-size: calc(0vw + 1.2rem);
  color: #330662;
  animation: ${fadein} 2s;
`;

const ImageContainer = styled.div`
  position: relative;
  height: auto;
  padding: 17px 0px 5px 0px;
  margin: 50px 0px 5px 0px;
  outline: none;
  box-shadow: inset 0 0 0 1px rgba(128, 128, 128, 0);
  animation: ${fadein} 2s;
`;

const Image = styled.img`
  float: left;
  width: 100px;
  height: 100px;
  border: 0;
`;

const FirstContentBox = styled.div`
  background-color: #d6d6d6;
  min-height: 100%;
  min-width: 80%;
  grid-column: 1;
  position: relative;
  margin: 0 0 0 2px;
  border: 1px solid;
  border-radius: 3px 3px 3px 3px;
  box-shadow: 0 4px 6px 0;
  justify-content: flex-start;
  padding: 10px;
  text-align: center;
`;

const Title = styled.h4`
  font-family: Poppins;
  font-weight: 300;
  font-style: normal;
  letter-spacing: 0em;
  text-transform: none;
  line-height: 1.2;
  font-size: calc(0vw + 2rem);
  color: #330662;
  animation: ${fadein} 2s;
`;

const Project = (props) => {
  const {title, subtitle, description, link} = props

  return(
    <ProjectContainer>
          <Title> {title} </Title>
          <SubTitle>{subtitle}</SubTitle>
          <DescriptionContainer>
            <Description>
              {description}
            </Description>
          </DescriptionContainer>
          <LinkContainer>
            <Link href={`https://${link}`}>
              {link}
            </Link>
          </LinkContainer>
      </ProjectContainer>
  )
}

const ProjectsPage = () => {
  return (
    // <ContentContainer>
    //   <ProjectContainer>
    //     <Title> Schedge API </Title>
    //     <SubTitle>A course API for NYU students</SubTitle>
    //     <DescriptionContainer>
    //         <Description>
    //         The website is built from scratch, using basic HTML, CSS, and
    //         JavaScript, to be a one-stop-shop for information about the Open
    //         Source Club. It's provides information about what the club is, the
    //         projects we work on, and upcoming events.
    //         </Description>
    //     </DescriptionContainer>
    //     <LinkContainer>
    //         <Link href="https://github.com/BUGS-NYU/schedge">
    //             github.com/BUGS-NYU/schedge
    //         </Link>
    //     </LinkContainer>
    //   </ProjectContainer>
    //   <ProjectContainer>
    //   <Title> BUGS webste </Title>
    //     <SubTitle> The thing you are on right now</SubTitle>
    //     <DescriptionContainer>
    //         <Description>
    //         The website is built from scratch, using basic HTML, CSS, and
    //         JavaScript, to be a one-stop-shop for information about the Open
    //         Source Club. It's provides information about what the club is, the
    //         projects we work on, and upcoming events.
    //         </Description>
    //     </DescriptionContainer>
    //     <LinkContainer>
    //         <Link href="https://github.com/BUGS-NYU/bugs-nyu.github.io">
    //             github.com/BUGS-NYU/bugs-nyu.github.io
    //         </Link>
    //     </LinkContainer>
    //   </ProjectContainer>
    //   <ProjectContainer>
    //   <Title> BUGS webste </Title>
    //     <SubTitle> The thing you are on right now</SubTitle>
    //     <DescriptionContainer>
    //         <Description>
    //         The website is built from scratch, using basic HTML, CSS, and
    //         JavaScript, to be a one-stop-shop for information about the Open
    //         Source Club. It's provides information about what the club is, the
    //         projects we work on, and upcoming events.
    //         </Description>
    //     </DescriptionContainer>
    //     <LinkContainer>
    //         <Link href="https://github.com/BUGS-NYU/bugs-nyu.github.io">
    //             github.com/BUGS-NYU/bugs-nyu.github.io
    //         </Link>
    //     </LinkContainer>
    //   </ProjectContainer>
    //   <ProjectContainer>
    //   <Title> BUGS webste </Title>
    //     <SubTitle> The thing you are on right now</SubTitle>
    //     <DescriptionContainer>
    //         <Description>
    //         The website is built from scratch, using basic HTML, CSS, and
    //         JavaScript, to be a one-stop-shop for information about the Open
    //         Source Club. It's provides information about what the club is, the
    //         projects we work on, and upcoming events.
    //         </Description>
    //     </DescriptionContainer>
    //     <LinkContainer>
    //         <Link href="https://github.com/BUGS-NYU/bugs-nyu.github.io">
    //             github.com/BUGS-NYU/bugs-nyu.github.io
    //         </Link>
    //     </LinkContainer>
    //   </ProjectContainer>
    //   <ProjectContainer />
    //   <ProjectContainer />
    //   <ProjectContainer />
    // </ContentContainer>
    <MainContainer>
      <PageContainer>
        <MainDescriptionContainer>
          {/* Change description and title */}
          <Project title="Schedge API"
          subtitle = "Course API for NYU"
          description="The website is built from scratch, using basic HTML, CSS, and
          JavaScript, to be a one-stop-shop for information about the Open
          Source Club. It's provides information about what the club is,
          the projects we work on, and upcoming events."
          link="github.com/BUGS-NYU/schedge" />
          <Project title="BUGS website"
          subtitle="Website for the club"
          description="The website is built from scratch, using basic HTML, CSS, and
          JavaScript, to be a one-stop-shop for information about the Open
          Source Club. It's provides information about what the club is,
          the projects we work on, and upcoming events."
          link="github.com/BUGS-NYU"/>
          <Project title="Spark"
          subtitle="Website for the club"
          description="The website is built from scratch, using basic HTML, CSS, and
          JavaScript, to be a one-stop-shop for information about the Open
          Source Club. It's provides information about what the club is,
          the projects we work on, and upcoming events."
          link="github.com/BUGS-NYU"/>
          <Project title="NYU data hubs"
          subtitle="Website for the club"
          description="The website is built from scratch, using basic HTML, CSS, and
          JavaScript, to be a one-stop-shop for information about the Open
          Source Club. It's provides information about what the club is,
          the projects we work on, and upcoming events."
          link="github.com/BUGS-NYU"/>
        </MainDescriptionContainer>
      </PageContainer>
    </MainContainer>
  );
};

export default ProjectsPage;
