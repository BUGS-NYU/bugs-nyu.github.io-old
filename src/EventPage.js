import React from 'react'
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

const CalendarContainer = styled.div`
    display: block ! important;
    max-width: 100%;
    max-height: 100%;
`

const Calendar = styled.iframe`
    height: 500px;
    width: 70vw;
    margin: 0px 30px 5px 5px;
    display: block;
    border: 0px;
    @media screen and (max-width: 768px) {
        margin: 10vh 0px 5px 5px;
        height: 400px;
        width: 70vw;
    }
`

const EventPage = () => {
    return(
        <MainContainer>
            <PageContainer>
                <MainDescriptionContainer>
                    <CalendarContainer>
                    <Calendar src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23f2f2f2&ctz=America%2FNew_York&src=MXJnMXZhOGhpamttNzMydGE0ajQ0bGJjaDRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%239E69AF&showTitle=0&showPrint=0&showCalendars=0&showTabs=0&showDate=0"
                    scrolling="no" frameborder="0" title="bugs events"/>
                    </CalendarContainer>
                </MainDescriptionContainer>
            </PageContainer>
        </MainContainer>
    )
}

export default EventPage;