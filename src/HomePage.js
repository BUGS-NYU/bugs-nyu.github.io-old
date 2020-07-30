import React from "react";
import styled from "styled-components";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  background-color: #74a4bc;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5vw;
  margin-top: 5vh;
  padding-top: 10vh;
  width: 40vw;
  height: 60vh;
  align-items: center;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 5vw;
  margin-top: 35vh;
  width: 50vw;
  height: 60vh;
`;

const Title = styled.div`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: 600;
  font-size: 80px;
  color: white;
`;

const SubTitle = styled.div`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  color: white;
`;

const Description = styled.p`
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    color: black;
`;

const Button = styled.button`
  background-color: black;
  color: white;
  width: 10vw;
  padding: 8px 0px;
  border-radius: 5px;
  margin: 15px 0 20px 10px;
  font-family: Source Sans Pro;
  font-size: 20px;
  font-weight: 500;
  border: none;
`;
const HomePage = () => {
  const handleOnClick = (event) => {
    event.preventDefault();
  };
  return (
    <ContentContainer>
      <TitleContainer>
        <Title>BUGS@NYU</Title>
        <SubTitle>The Open Source Club</SubTitle>
        <Button onClick={handleOnClick}>Join Us</Button>
      </TitleContainer>
      <DescriptionContainer>
        <Description>
          We created and contributed to Open Source projects. We engaged
          students through collaborative projects, hosting industry professions,
          and running open source workshops
        </Description>
      </DescriptionContainer>
    </ContentContainer>
  );
};

export default HomePage;
