import React from "react";
import styled from "styled-components";

const ContentContainer = styled.div`
  background-color: #74a4bc;
  min-height: 100vh;
  width: 100vw;
`;

const TeamContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80vw;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
  min-height: 100vh;
  margin-left: 100px;
  margin-right: 50px;
`;

const Section = styled.h1`
  position: relative;
  font-family: proxima-nova;
  line-height: 0.25em;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: black;
  text-align: center;
`;

const BiosContainer = styled.div`
  width: 70vw;
  min-height: 100vh;
`;

const BioContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 50vw;
  height: 20vh;
  margin: 20px auto 10px auto;
`;

const Name = styled.div`
  width: 20vw;
  text-align: left;
`;

const Description = styled.div`
  width: 60vw;
  text-align: left;
`;

const eboards = {
    "Albert Liu": {
        role: "President",
        description: "Albert enjoys python scripting and long walks in Central Park. In his work time he majors in Computer Science at CAS."
    },
    "Samuel Lin": {
        role: "Vice President",
        description: "Samuel is a Junior at CAS majoring in Computer Science and Minoring in Web Design and Game Design. He was born and raised in Taiwan, but studied in Singapore for high school before coming to New York. He is a big foodie and enjoys trying foods from different cultures."
    },
    "Eric He": {
        role: "Secretary",
        description: "Hi, this is Eric. I am currently a junior studying computer science and mathematics. I like to play basketball and listen to music and read about philosophy."
    },
    "Aaditya Mehta": {
        role: "Treasurer",
        description: "A Junior studying Economics and Mathematics, Aaditya spends way too much time in Stern (#IAmStern). In his free time he likes to listen to music, take long walks, and read Econ papers, sometimes simultaneously."
    },
    "Khanh Nguyen": {
        role: "Director of Communications",
        description: "Sophomore from Vietnam studying Computer Science. BROCKHAMPTON is my all-time favorite boyband. Food and coding also fuels my existence. Outside of school, find me at Hanoi House"
    },
    "Jiayue(Joanna) Zhang": {
        role: "Director of Marketing",
        description: "Jiayue (Joanna) Zhang is a Junior majoring in Mathematics and Computer Science in CAS. Intellectual challenges of her school work bring her either joy or existential crises; in most cases math the latter and CS the former. One thing she loves about NYC is that performances of her favorite artists are usually only a subway ride away from school. Her guilty pleasure is taking mahjong breaks at Bobst."
    },
    "Ami Nachiappan": {
        role: "Event Coordinator",
        description: "Junior from California studying Computer Science and minoring in Web Design. In her free time, she loves spending time with family, running, and of course, coding!"
    },
    "Edmond Shao": {
        role: "Webmaster",
        description: "Edmond is a Junior at CAS studying Computer Science and minoring in Business Studies. Aside from class, he likes cars, being a foodie and traveling."
    }
}

const TeamPage = () => {
  return (
    <ContentContainer>
      <TeamContainer>
        <SectionContainer>
          <Section> Eboard </Section>
          <Section> Alumni </Section>
          <Section> Faculty </Section>
        </SectionContainer>
        <BiosContainer>
            {Object.entries(eboards).map(([name, value]) => {
                return(
                    <BioContainer>
                        <Name>
                            <h2> {name} </h2>
                            <h3> {value.role} </h3>
                        </Name>
                        <Description>
                            <p>
                                {value.description}
                            </p>
                        </Description>
                    </BioContainer>
                )
            })}
            </BiosContainer>
      </TeamContainer>
    </ContentContainer>
  );
};

export default TeamPage;
