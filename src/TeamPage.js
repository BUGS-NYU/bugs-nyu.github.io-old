import React from "react";
import styled, { keyframes } from "styled-components";
import aliu from "./profiles/aliu.jpg";
import amehta from "./profiles/amehta.png";
import ana from "./profiles/anachiappan.jpg";
import eshao from "./profiles/eshao.jpg";
import khanhng from "./profiles/khanhng.jpg";
import slin from "./profiles/slin.jpg";
import eriche from "./profiles/eriche.jpg";
import Eboard from "./Eboard";

const scalein = keyframes`
  from {
    transform: scale(0.9);
  }
  to {
    transform: scale(1);
  }
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
`;

const EboardTitleContainer = styled.div`
  margin-top: 15%;
  text-align: center;
  margin-bottom: 50px;
  @media screen and (max-width: 768px) {
    margin-top: 18vh;
  }
`;

const EboardTitle = styled.h1`
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
    image: aliu,
    role: "President",
    description:
      "Albert enjoys python scripting and long walks in Central Park. In his work time he majors in Computer Science at CAS.",
  },
  "Samuel Lin": {
    image: slin,
    role: "Vice President",
    description:
      "Samuel is a Senior at CAS majoring in Computer Science and minoring in Web Design and Game Design. He was born and raised in Taiwan, but studied in Singapore for high school before coming to New York. He is a big foodie and enjoys trying foods from different cultures.",
  },
  "Edmond Shao": {
    image: eshao,
    role: "Webmaster",
    description:
      "Edmond is a Senior at CAS studying Computer Science and minoring in Business Studies. Aside from class, he likes cars, being a foodie and traveling.",
  },
  "Eric He": {
    image: eriche,
    role: "Secretary",
    description:
      "Eric is a Senior studying Computer Science and Mathematics. He likes to play basketball, listens to music and read about philosophy.",
  },
  "Khanh Nguyen": {
    image: khanhng,
    role: "Director of Communications",
    description:
      "Khanh is a Junior from Vietnam studying Computer Science. BROCKHAMPTON is his all-time favorite boyband. Outside of school, find him at Hanoi House",
  },
  "Ami Nachiappan": {
    image: ana,
    role: "Event Coordinator",
    description:
      "Ami is a Junior from California studying Computer Science and minoring in Web Design. In her free time, she loves spending time with family, running, and of course, coding!",
  },
  "Aaditya Mehta": {
    image: amehta,
    role: "Treasurer",
    description:
      "Aaditya is a Junior studying Economics and Mathematics, Aaditya spends way too much time in Stern (#IAmStern). In his free time he likes to listen to music, take long walks, and read Econ papers, sometimes simultaneously.",
  },
  "Jiayue(Joanna) Zhang": {
    role: "Director of Marketing",
    description:
      "Jiayue (Joanna) Zhang is a Junior majoring in Mathematics and Computer Science in CAS. Intellectual challenges of her school work bring her either joy or existential crises; in most cases math the latter and CS the former. One thing she loves about NYC is that performances of her favorite artists are usually only a subway ride away from school. Her guilty pleasure is taking mahjong breaks at Bobst.",
  },
};

const TeamPage = () => {
  return (
    <MainContainer>
      <PageContainer>
        <EboardTitleContainer>
          <EboardTitle>
            Meet Our <BoldText>Executive Board</BoldText>
          </EboardTitle>
        </EboardTitleContainer>
        <MainDescriptionContainer>
          {Object.entries(eboards).map(([name, values]) => {
            return (
              <Eboard
                name={name}
                role={values.role}
                description={values.description}
                image={values.image}
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
