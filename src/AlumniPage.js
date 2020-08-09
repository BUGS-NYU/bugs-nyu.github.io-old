import React from "react";
import styled, { keyframes } from "styled-components";

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

const Description = styled.p`
  text-align: center;
  font-family: Poppins;
  font-weight: 500;
  font-style: normal;
  letter-spacing: 0em;
  text-transform: none;
  line-height: 1.2;
  font-size: calc(0vw + 1rem);
  color: #330662;
  animation: ${fadein} 2s;
`;

const Title = styled.p`
  font-family: Poppins;
  font-weight: 300;
  font-style: normal;
  letter-spacing: 0em;
  text-transform: none;
  text-align: center;
  line-height: 0.5;
  font-size: calc(0vw + 1.5rem);
  color: #330662;
  animation: ${fadein} 2s;
`;

const ProjectContainer = styled.div`
  margin: 1vw;
  grid-column: 1
  min-height: 40vh;
  height: 100%;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 60px 0px 60px;
  animation: ${fadein} 2s;
`;

const SubTitle = styled.p`
  font-family: var(--normal-font);
  text-align: center;
  font-weight: lighter;
  color: rgb(117, 117, 116);
  margin-bottom: 0;
  padding-bottom: 0;
`;

const Image = styled.img`
  width: 70%;
  object-fit: contain;
`;

const EboardTitleContainer = styled.div`
  margin-top: 15%;
  text-align: center;
`

const EboardTitle = styled.h1`
  font-family: Poppins;
  font-weight: 300;
  font-style: normal;
  letter-spacing: 0em;
  text-transform: none;
  text-align: center;
  line-height: 0.5;
  font-size: calc(0vw + 4.5rem);
  color: #330662;
  animation: ${fadein} 2s;
`

const eboards = {
  "Nadira Dewji": {
    role: "Founder",
    description:
      "Alumni who studied Computer Science in CAS. Originally from Tanzania, Nadira loves travelling, scuba diving and wildlife. She’s excited about open source principles and making impactful contributions.",
  },
  "David Klein": {
    role: "Founder",
    description:
      "Alumni from California who studied Biology with three minors, and loves both carbon based life and silicon based life to equal extents.",
  },
  "Ananditha Raghunath": {
    role: "Founder",
    description:
      "Alunmi who studied Math and CS at Courant. Having started to code only after she arrived at NYU, she’s is excited to mentor new members that may not know how to make their ideas translate into tangible code based projects!",
  },
  "Veena Arvind": {
    role: "",
    description:
      "Junior studying Computer Science in CAS. She loves to talk about code with other people. In her free time, Veena goes to the gym, makes jewelry, and plays card games.",
  },
  "Shelly Cao": {
    role: "",
    description:
      "Shelly is a Junior majoring in Computer Science with minors in Math and Business Study. She comes from a small city in China called Jingzhou and even her Chinese friends are clueless as to where it is. In her free time, she loves to explore the different boroughs in the city and try food from different cultures.",
  },
  "Julie Cestaro": {
    role: "",
    description:
      "Alumni from Connecticut majoring in Computer Science and minoring in Business Studies and Math. You may also find her on campus doing work for CAS Student Council.",
  },
  "George Ma": {
    role: "",
    description:
      "Senior from Singapore majoring in Computer Science and Business. He likes reading, writing, coding, and gaming.",
  },
  "Deanna Tran": {
    role: "",
    description:
      "Senior in CAS studying Computer Science with minors in Web Design and Linguistics. Outside of school, Deanna can be found at a local restaurant or art museum.",
  },
  "Candice Shen": {
      role: "",
      description:
      "Candice is a Senior at Steinhardt majoring in Media, Culture, and Communication and minoring in Web Design. If you cannot find her outside of class, Candice is traveling or planning for her 23rd country to visit."
  },
  "Bradley Brecher": {
      role: "",
      description:
      "Alumni from Woodmere, New York studying Computer Science. Outside of BUGS, you can find him coaching hockey at a local high school."
  }
};

const Alumni = (props) => {
  const { name, role, image, description } = props;
  return (
    <ProjectContainer>
      <Title> {name}
      <DescriptionContainer>
        <Description>{description}</Description>
      </DescriptionContainer>
       </Title>
    </ProjectContainer>
  );
};

const AlumniPage = () => {
  return (
    <MainContainer>
      <PageContainer>
        <EboardTitleContainer>
          <EboardTitle>
          Meet Our Alumni
          </EboardTitle>
        </EboardTitleContainer>
        <MainDescriptionContainer>
          {Object.entries(eboards).map(([name, values]) => {
            return (
              <Alumni
                name={name}
                role={values.role}
                description={values.description}
              />
            );
          })}
        </MainDescriptionContainer>
      </PageContainer>
    </MainContainer>
  );
};

export default AlumniPage;
