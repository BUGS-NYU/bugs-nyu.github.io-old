import React from "react";
import styled, { keyframes } from "styled-components";

import Eboard from "../components/Eboard";

// TODO: Find a better way to optimize image performance. May need to get rid of react scripts or switch to a ssg
import aliu from "../assets/profiles/aliu.jpg";
import aliuWebP from "../assets/profiles/aliu.webp";
import amehta from "../assets/profiles/amehta.jpg";
import amehtaWebP from "../assets/profiles/amehta.webp";
import ana from "../assets/profiles/anachiappan.jpg";
import anaWebP from "../assets/profiles/anachiappan.webp";
import eshao from "../assets/profiles/eshao.jpg";
import eshaoWebP from "../assets/profiles/eshao.webp";
import khanhng from "../assets/profiles/khanhng.jpg";
import khanhngWebP from "../assets/profiles/khanhng.webp";
import slin from "../assets/profiles/slin.jpg";
import slinWebP from "../assets/profiles/slin.webp";
import eriche from "../assets/profiles/eriche.jpg";
import ericheWebP from "../assets/profiles/eriche.webp";

const scalein = keyframes`
  from {
    transform: scale(0.9);
  }
  to {
    transform: scale(1);
  }
`;

const EboardDescriptionContainer = styled.div`
  width: 100%;
  white-space: pre-wrap;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 5px 20px 20px 20px;
`;

const EboardDescription = styled.p`
  text-align: left;
  font-weight: 500;
  font-style: normal;
  letter-spacing: 0em;
  text-transform: none;
  line-height: 1.2;
  font-size: calc(0vw + 1rem);
  color: white;
  text-align: center;
  animation: ${scalein} 1s;
`;

const EboardTitle = styled.h2`
  font-weight: 300;
  font-style: normal;
  letter-spacing: 0em;
  text-transform: none;
  text-align: center;
  line-height: 1;
  margin-bottom: 0;
  font-size: calc(0vw + 1.5rem);
  color: white;
  animation: ${scalein} 0.9s;
`;

const EboardContainer = styled.div`
  margin: 1vw;
  grid-column: 1
  min-height: 40vh;
  height: 100%;
  background-color: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 60px 0px 60px;
  animation: ${fadein} 1.5s;
  @media screen and (max-width: 768px) {
    padding: 0px 0px 0px 0px;
    margin: 0 0 25px 0;
    width: 70vw;
  }
`;

const EboardSubTitle = styled.p`
  font-family: var(--normal-font);
  text-align: center;
  font-weight: lighter;
  color: white;
  margin: 10px 0 0 0;
  animation: ${scalein} 0.9s;
  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const EboardImage = styled.img`
  width: 70%;
  object-fit: contain;
  animation: ${fadein} 1.5s;
  @media screen and (max-width: 768px) {
    width: 50%;
  }
`;

const Eboard = (props) => {
  const { name, role, image, description } = props;

  return (
    <EboardContainer>
      <EboardImage src={image} />

      <EboardTitle>
        {name}
        <EboardSubTitle>{role}</EboardSubTitle>
      </EboardTitle>

      <EboardDescriptionContainer>
        <EboardDescription>{description}</EboardDescription>
      </EboardDescriptionContainer>
    </EboardContainer>
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
  margin-bottom: 5%;
`;

const EboardTitleContainer = styled.div`
  margin-top: 15%;
  text-align: center;
  margin-bottom: 50px;
  @media screen and (max-width: 768px) {
    margin-top: 18vh;
  }
`;

const TeamTitle = styled.h1`
  font-weight: 300;
  font-style: normal;
  letter-spacing: 0em;
  text-transform: none;
  text-align: center;
  line-height: 0.5;
  font-size: calc(0vw + 4rem);
  color: rgba(255, 255, 255, 0.7);
  animation: ${scalein} 0.9s;
  @media screen and (max-width: 768px) {
    font-size: calc(0.5vw + 1.5rem);
  }
`;

const BoldText = styled.strong`
  color: white;
`;

const eboards = {
  "Albert Liu": {
    image: [aliu, aliuWebP],
    role: "President",
    description:
      "Albert majors in Computer Science at CAS. In the past, he's worked on Schedge, an API for NYU course data, as well as HumanToHuman, an application to help researchers study human interaction patterns. In his free time he enjoys going on long walks and taking longer naps.",
  },
  "Samuel Lin": {
    image: [slin, slinWebP],
    role: "Vice President",
    description:
      "Samuel is a Senior at CAS majoring in Computer Science and minoring in Web Design and Game Design. He was born and raised in Taiwan, but studied in Singapore for high school before coming to New York. He is a big foodie and enjoys trying foods from different cultures.",
  },
  "Edmond Shao": {
    image: [eshao, eshaoWebP],
    role: "Webmaster",
    description:
      "Edmond is a Senior at CAS studying Computer Science and minoring in Business Studies. Aside from class, he likes cars, being a foodie and traveling.",
  },
  "Eric He": {
    image: [eriche, ericheWebP],
    role: "Secretary",
    description:
      "Eric is a Senior studying Computer Science and Mathematics. He likes to play basketball, listens to music and read about philosophy.",
  },
  "Khanh Nguyen": {
    image: [khanhng, khanhngWebP],
    role: "Director of Communications",
    description:
      "Khanh is a Junior from Vietnam studying Computer Science. BROCKHAMPTON is his all-time favorite boyband. Outside of school, find him at Hanoi House",
  },
  "Ami Nachiappan": {
    image: [ana, anaWebP],
    role: "Event Coordinator",
    description:
      "Ami is a Senior from California studying Computer Science and minoring in Web Design. In her free time, she loves spending time with family, running, and of course, coding!",
  },
  "Aaditya Mehta": {
    image: [amehta, amehtaWebP],
    role: "Treasurer",
    description:
      "Aaditya is a Senior studying Economics and Mathematics, Aaditya spends way too much time in Stern (#IAmStern). In his free time he likes to listen to music, take long walks, and read Econ papers, sometimes simultaneously.",
  },
  "Jiayue(Joanna) Zhang": {
    role: "Director of Marketing",
    description:
      "Jiayue (Joanna) Zhang is a Senior majoring in Mathematics and Computer Science in CAS. Intellectual challenges of her school work bring her either joy or existential crises; in most cases math the latter and CS the former. One thing she loves about NYC is that performances of her favorite artists are usually only a subway ride away from school. Her guilty pleasure is taking mahjong breaks at Bobst.",
  },
};

const TeamPage = () => {
  return (
    <MainContainer>
      <PageContainer>
        <EboardTitleContainer>
          <TeamTitle>
            Meet Our <BoldText>Executive Board</BoldText>
          </TeamTitle>
        </EboardTitleContainer>

        <MainDescriptionContainer>
          {eboard.map(({ name, role, description, image }) => {
            return (
              <Eboard
                name={name}
                role={values.role}
                description={values.description}
                images={values.image}
                key={name}
              />
            );
          })}
        </MainDescriptionContainer>
      </PageContainer>
    </MainContainer>
  );
};

export default TeamPage;
