import React, { useState, useEffect } from "react";
import styled from "styled-components";

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
  font-family: Poppins;
  text-align: center;
  font-weight: 200;
  font-style: normal;
  letter-spacing: 0em;
  text-transform: none;
  line-height: 0.5;
  font-size: calc(0vw + 1.5rem);
  color: #330662;
`;

const Name = styled.h4`
  font-family: Poppins;
  font-weight: 200;
  font-style: normal;
  text-align: center;
  letter-spacing: 0em;
  text-transform: none;
  line-height: 0.5;
  font-size: calc(0vw + 1.05rem);
  color: #330662;
`;

const TimelineContainer = styled.div`
  min-height: 100vh;
  width: 70%;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  border: 0.05px solid;
  border-radius: 15px;
  box-shadow: 0 4px 5px 0;
  padding: 20px 0px 20px 0px;
`;

const RightContainer = styled.div`
  width: 80%;
  min-height: 15vh;
  display: flex;
  justify-content: flex-end;
  align-items: right;
  margin: 5px 5px 5px 5px;
  padding: 5px 5px 5px 5px;
`;

const LeftContainer = styled.div`
  width: 80%;
  min-height: 15vh;
  display: flex;
  justify-content: flex-start;
  margin: 5px 5px 5px 5px;
  padding: 5px 5px 5px 5px;
`;

const Left = styled.div`
  text-align: center;
  width: 40%;
  height: 100%;
  border: 0.05px solid;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const Right = styled.div`
  text-align: center;
  width: 40%;
  height: 100%;
  border: 0.05px solid;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const Time = styled.p`
  font-weight: 500;
  color: #999;
`;

const Description = styled.p`
  font-weight: 500;
`;

const DescriptionContainer = styled.a`
  text-decoration: none;
  color: black;
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
          const PRList = [];
          schedgeJSON.forEach((schedgePR) => {
            const createdTime = schedgePR.created_at;
            const url = schedgePR["html_url"];
            const user = schedgePR.user.login;
            PRList.push({
              user: user,
              url: url,
              timestamp: parseDate(createdTime),
              name: "Schedge",
            });
          });
          webJSON.forEach((webPR) => {
            const createdTime = webPR.created_at;
            const url = webPR["html_url"];
            const user = webPR.user.login;
            PRList.push({
              user: user,
              url: url,
              timestamp: parseDate(createdTime),
              name: "BUGS website",
            });
          });
          const sortedPRList = PRList.sort((a, b) => {
            let dateA = new Date(a.timestamp);
            let dateB = new Date(b.timestamp);
            return dateB - dateA;
          });
          setPRList(sortedPRList);
      } catch(error) {
          console.log(error)
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
          <TimelineContainer>
            <Title>Timeline</Title>
            <Timeline>
              {PRList.length !== 0 &&
                Object.entries(PRList).map(([index, PR]) => {
                  if (index % 2 === 0) {
                    return (
                      <LeftContainer key={PR.url}>
                        <Left>
                          <Time>{PR.timestamp}</Time>
                          <DescriptionContainer href={PR.url}>
                            <Description>
                              {PR.user} made a pull request to {PR.name}
                            </Description>
                          </DescriptionContainer>
                        </Left>
                      </LeftContainer>
                    );
                  } else {
                    return (
                      <RightContainer key={PR.url}>
                        <Right>
                          <Time>{PR.timestamp}</Time>
                          <DescriptionContainer href={PR.url}>
                            <Description>
                              {PR.user} made a pull request to {PR.name}
                            </Description>
                          </DescriptionContainer>
                        </Right>
                      </RightContainer>
                    );
                  }
                })}
            </Timeline>
          </TimelineContainer>
        </MainDescriptionContainer>
      </PageContainer>
    </MainContainer>
  );
};

export default ContributorsPage;
