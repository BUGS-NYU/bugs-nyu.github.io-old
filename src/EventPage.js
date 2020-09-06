import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
`;

const PageContainer = styled.article`
  display: block;
`;

const MainDescriptionContainer = styled.section`
  padding-top: 10%;
  align-items: center;
  min-height: 60vh;
  padding-right: 15vw;
  padding-bottom: 5vw;
  padding-left: 15vw;
  display: flex;
  flex-direction: column;
`;

const Calendar = styled.iframe`
  height: 80vh;
  width: 70vw;
  display: block;
  border-width: 0;
  @media screen and (max-width: 768px) {
    height: 70vh;
  }
`;

const ResponsiveCalc = styled.div`
  margin: 10vh 0 5vh 0;
`;

const googleCalendar = `https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23f2f2f2&ctz=America%2FNew_York&src=MXJnMXZhOGhpamttNzMydGE0ajQ0bGJjaDRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%239E69AF&showTitle=0&showPrint=0&showCalendars=0&showTabs=0&showDate=0`;

const EventPage = () => {
  const width = window.innerWidth;
  return (
    <MainContainer>
      <PageContainer>
        <MainDescriptionContainer>
          <ResponsiveCalc>
            <Calendar
              src={
                width <= 786 ? `${googleCalendar}&mode=AGENDA` : googleCalendar
              }
              scrolling="no"
              frameborder="0"
            />
          </ResponsiveCalc>
        </MainDescriptionContainer>
      </PageContainer>
    </MainContainer>
  );
};

export default EventPage;
