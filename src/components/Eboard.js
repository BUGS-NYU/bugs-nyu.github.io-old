<<<<<<< HEAD:src/Eboard.js
import aliu from "./profiles/aliu.jpg";
import amehta from "./profiles/amehta.png";
import ana from "./profiles/anachiappan.jpg";
import eshao from "./profiles/eshao.jpg";
import khanhng from "./profiles/khanhng.jpg";
import slin from "./profiles/slin.jpg";
import eriche from "./profiles/eriche.jpg";

const eboard = [
  {
    name: "Albert Liu",
    image: aliu,
    role: "President",
    description: "Albert is a Senior majoring in Computer Science at CAS. In the past, he's worked on Schedge, an API for NYU course data, as well as HumanToHuman, an application to help researchers study human interaction patterns. In his free time he enjoys going on long walks and taking longer naps.",
  },
  {
    name: "Samuel Lin",
    image: slin,
    role: "Vice President",
    description: "Samuel is a Senior at CAS majoring in Computer Science and minoring in Web Design and Game Design. He was born and raised in Taiwan, but studied in Singapore for high school before coming to New York. He is a big foodie and enjoys trying foods from different cultures.",
  },
  {
    name: "Edmond Shao",
    image: eshao,
    role: "Webmaster",
    description: "Edmond is a Senior at CAS studying Computer Science and minoring in Business Studies. Aside from class, he likes cars, being a foodie and traveling.",
  },
  {
    name: "Eric He",
    image: eriche,
    role: "Secretary",
    description: "Eric is a Senior studying Computer Science and Mathematics. He likes to play basketball, listens to music and read about philosophy.",
  },
  {
     name: "Khanh Nguyen",
    image: khanhng,
    role: "Director of Communications",
    description: "Khanh is a Junior from Vietnam studying Computer Science. BROCKHAMPTON is his all-time favorite boyband. Outside of school, find him at Hanoi House",
  },
  {
    name: "Ami Nachiappan",
    image: ana,
    role: "Event Coordinator",
    description: "Ami is a Senior from California studying Computer Science and minoring in Web Design. In her free time, she loves spending time with family, running, and of course, coding!",
  },
  {
    name: "Aaditya Mehta",
    image: amehta,
    role: "Treasurer",
    description: "Aaditya is a Senior studying Economics and Mathematics, Aaditya spends way too much time in Stern (#IAmStern). In his free time he likes to listen to music, take long walks, and read Econ papers, sometimes simultaneously.",
  },
  {
    name: "Jiayue(Joanna) Zhang",
    role: "Director of Marketing",
    description: "Jiayue (Joanna) Zhang is a Senior majoring in Mathematics and Computer Science in CAS. Intellectual challenges of her school work bring her either joy or existential crises; in most cases math the latter and CS the former. One thing she loves about NYC is that performances of her favorite artists are usually only a subway ride away from school. Her guilty pleasure is taking mahjong breaks at Bobst.",
  }
];

export default eboard;
=======
import React from "react";
import styled, { keyframes } from "styled-components";

const fadein = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const scalein = keyframes`
  from {
    transform: scale(0.9);
  }
  to {
    transform: scale(1);
  }
`;

const DescriptionContainer = styled.div`
  width: 100%;
  white-space: pre-wrap;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 5px 20px 20px 20px;
`;

const Description = styled.p`
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

const Title = styled.h2`
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

const SubTitle = styled.p`
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

const Image = styled.div`
  width: 70%;
  object-fit: contain;
  animation: ${fadein} 1.5s;

  & img {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    width: 50%;
  }
`;

const Eboard = ({ name, role, images, description }) => {
  return (
    <EboardContainer>
      {images && (
        <Image>
          <picture>
            <source type="image/webp" srcSet={images[1]} />
            <source type="image/jpeg" srcSet={images[0]} />
            <img src={images[0]} alt={name} />
          </picture>
        </Image>
      )}
      <Title>
        {name}
        <SubTitle> {role} </SubTitle>
      </Title>
      <DescriptionContainer>
        <Description>{description}</Description>
      </DescriptionContainer>
    </EboardContainer>
  );
};

export default Eboard;
>>>>>>> 2d5aac7... Clean up repository and optimize images to be next-gen formats:src/components/Eboard.js
