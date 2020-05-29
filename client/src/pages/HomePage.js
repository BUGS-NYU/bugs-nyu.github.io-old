import React, { useState } from 'react';
import styled from 'styled-components';
import background from '../img/background.jpg';

const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: darkviolet;
`;

const Wrapper = styled.section`
  background: white;
  margin: 50px;
`;

const TextContainer = styled.div`
  margin: auto;
  width: 80%;
  padding: 50px;
`

const Content = styled.p`
  text-align: center;
`

const Image = styled.img`
  height: auto;
  width: 100%;
`

const ImageContainer = styled.div`
  overflow: hidden;
`

const LeftContainer = styled.div`
  float: left;
`

const RightContainer = styled.div`
  float: right;
`

const HomePage = () => {
  const [profiles, setProfile] = useState([])
  const [events, setEvent] = useState([])

  return (
    <main>
      <ImageContainer>
    <Image src = {background} />
  </ImageContainer>
   <Wrapper>
        <TextContainer>
          <Content>
            <h2> About Us </h2>
            NYU BUGS is the open source club at NYU. 
            We promote open source by engaging students 
            through collaborative projects, hosting industry professions,
            and running open source workshops. BUGS is a member of the Open 
            Source Student Network, a network of university clubs and students that share 
            the belief that open source software is the 
            engine that powers innovation. 
          </Content>
        </TextContainer>
        <TextContainer>
          <Content>
            <h2> What's Open Source? </h2>
            Open source represents a form of licensing that 
            encourages collaboration and transparency. 
            Although open source licenses may take a number 
            of forms, essential features include being able to 
            freely study, change, and distribute the source code. 
          </Content>
        </TextContainer>
        <p />
        <TextContainer>
           <LeftContainer>
             <Content> Hello world 1</Content>
           </LeftContainer>
           <RightContainer>
             <Content> Hello world 2 </Content>
           </RightContainer>
        </TextContainer>
   </Wrapper>
    </main>
  );
}

export default HomePage;
