import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import "./stuff.css";
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
  display: flex;
  justify-items: stretch;
  align-items: baseline;
  margin-bottom: 5%;
  @media screen and (max-width: 900px) {
    padding-bottom: 10vh;
    padding-top: 5vh;
    flex-direction: column;
    align-items: center;
  }
`;

const TableContainer = styled.div`
  height: 100vh;
  width: 30%;
  display: table;
  @media screen and (max-width: 900px) {
    padding: 0px 5px 0px 5px;
    height: 20vh;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0em;
  text-transform: none;
  line-height: 0.5;
  font-size: calc(1vw + 1.5rem);
  color: rgba(255, 255, 255, 0.7);
`;

const Name = styled.h4`
  font-weight: 300;
  font-style: normal;
  text-align: center;
  letter-spacing: 0em;
  text-transform: none;
  line-height: 0.5;
  font-size: calc(0vw + 1.5rem);
  color: white;
`;

const TimelineContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

const Timeline = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;

  &::after {
    content: "";
    position: absolute;
    width: 6px;
    background-color: white;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
  }

  @media screen and (max-width: 768px) {
    &::after {
      left: 31px;
    }
  }
`;

const LeftContainer = styled.div`
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
  left: -16%;

  &::after {
    content: "";
    position: absolute;
    width: 25px;
    height: 25px;
    right: -17px;
    background-color: white;
    border: 4px solid #ff9f55;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }

  @media screen and (max-width: 768px) {
    width: 60%;
    padding-left: 70px;
    padding-right: 25px;
    left: 0%;
    
    &::after {
      left: 15px;
    }
  }

`;

const RightContainer = styled.div`
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
  left: 50%;

  &::after {
    content: "";
    position: absolute;
    width: 25px;
    height: 25px;
    right: -17px;
    background-color: white;
    border: 4px solid #ff9f55;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }

  &::after {
    left: -16px;
  }

  @media screen and (max-width: 768px) {
    width: 60%;
    padding-left: 70px;
    padding-right: 25px;
    left: 0%;
    
    &::after {
      left: 15px;
    }
  }
`;

const Time = styled.p`
  text-align: center;
  font-weight: 500;
  color: white;
  margin: 0;
  padding: 2px 0px 0px 0px;
`;

const ContentURL = styled.a`
  text-decoration: none;
`

const Content = styled.p`
  padding: 20px 30px;
  position: relative;
  border-radius: 6px;
  color: white;
  box-shadow: 0px 0px 0px 3px white;
  transition: all 0.2s linear;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 0px 10px #57068c;
    color: purple;
  }
`

const BoldText = styled.strong`
  color: white;
`;

const contributors = {
  "Ameya Shere": {},
  "Andy Huang": {},
  "Anupam Sushil": {},
  "Carol Long": {},
  "Santiago Darre": {},
  "Uriel Restrepo": {},
  "Yuchen Liu": {},
};

function parseDate(timestamp) {
  const date = new Date(timestamp);
  const month = date.getMonth();
  const day = date.getDate();
  const year = date.getFullYear();
  const timestr = new Date(date.setSeconds(0, 0)).toLocaleTimeString();
  const times = timestr.split(" ");
  const hour = times[0];
  const minute = times[1];
  return `${month}/${day}/${year} ${hour}:${minute}`;
}

const ContributorsPage = () => {
  const [PRList, setPRList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const webresp = await fetch(
          "https://api.github.com/repos/BUGS-NYU/bugs-nyu.github.io/pulls?state=closed"
        );
        const schedgeresp = await fetch(
          "https://api.github.com/repos/BUGS-NYU/schedge/pulls?state=closed"
        );
        const webJSON = await webresp.json();
        const schedgeJSON = await schedgeresp.json();
        const pullRequests = [];
        const takenUsers = {};
        //change this to be unique
        schedgeJSON.forEach((schedgePR) => {
          const createdTime = schedgePR.created_at;
          const url = schedgePR["html_url"];
          const user = schedgePR.user.login;
          if(!(`${user}-Schedge` in takenUsers)) {
            takenUsers[`${user}-Schedge`] = {}
            pullRequests.push({
              user: user,
              url: url,
              timestamp: parseDate(createdTime),
              name: "Schedge",
              text: `${user} made a Pull Request to Schedge!`,
            });
          }
        });
        console.log(takenUsers)
        webJSON.forEach((webPR) => {
          const createdTime = webPR.created_at;
          const url = webPR["html_url"];
          const user = webPR.user.login;
          if(!(`${user}-BUGSWebsite` in takenUsers)) {
            takenUsers[`${user}-BUGSWebsite`] = {}
            pullRequests.push({
              user: user,
              url: url,
              timestamp: parseDate(createdTime),
              name: "BUGS website",
              text: `${user} made a Pull Request to BUGS website!`,
            });
          }
        });
        const sortedPullRequests = pullRequests.sort((a, b) => {
          let dateA = new Date(a.timestamp);
          let dateB = new Date(b.timestamp);
          return dateB - dateA;
        });
        
        sortedPullRequests.unshift({
          timestamp: "NOW",
          url: "https://github.com/BUGS-NYU",
          user: "",
          text: `Make this your contribution!`,
        });

        setPRList(sortedPullRequests);
      } catch (error) {
        console.log(error);
        setPRList([])
      }
    }
    fetchData();
  }, []);

  return (
    <MainContainer>
      <PageContainer>
        <MainDescriptionContainer>
          <TableContainer>
            <Title>Contributors</Title>
            {Object.keys(contributors).map((name) => {
              return <Name key={name}>{name}</Name>;
            })}
          </TableContainer>
            <Timeline>
            {PRList.length !== 0 &&
                Object.entries(PRList).map(([index, PR]) => {
                  if (index % 2 === 0) {
                    return (
                      <LeftContainer key={PR.url}>
                          <Time>{PR.timestamp}</Time>
                          <ContentURL href={PR.url}>
                          <Content>
                            {PR.text}
                          </Content>
                          </ContentURL>
                      </LeftContainer>
                    );
                  } else {
                    return (
                      <RightContainer key={PR.url}>
                          <Time>{PR.timestamp}</Time>
                          <ContentURL href={PR.url}>
                          <Content>
                            {PR.text}
                          </Content>
                          </ContentURL>
                      </RightContainer>
                    );
                  }
                })}
            </Timeline>
        </MainDescriptionContainer>
      </PageContainer>
    </MainContainer>
  );
};

export default ContributorsPage;
