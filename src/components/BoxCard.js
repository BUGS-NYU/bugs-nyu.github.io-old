import React from "react";
import styled from "styled-components";
import githublogo from "../svgs/github.svg";
import gradientCircle from "../svgs/gradientCircle.svg";

const BoxCard = ({
  contentType,
  title,
  subtitle,
  description,
  link,
  urlLink,
  step,
}) => {
  const cols = contentType == "project" ? 6 : 4;

  return (
    <Card style={{ gridColumn: `auto/span ${cols}` }}>
      {step && (
        <>
          <StepCircle></StepCircle>
          <Step>{step}</Step>
        </>
      )}
      <h1> {title}</h1>
      {contentType == "project" && <p id={`subtitle`}>{subtitle}</p>}
      <p id={`description`}>{description}</p>
      {contentType == "project" && (
        <ButtonWrapper>
          <button id={`projectButton`}>
            <a href={urlLink}>View Project</a>
          </button>
          <button id={`githubButton`}>
            <GitHubLogo></GitHubLogo>
            <a href={link}>Github</a>
          </button>
        </ButtonWrapper>
      )}
    </Card>
  );
};
const ButtonWrapper = styled.div`
  display: inline-block;

  #projectButton {
    width: 150px;
    height: 40px;
    background: #ffffff;
    opacity: 0.8;
    border: none;
    border-radius: 5px;

    :hover {
      opacity: 0.5;
      cursor: pointer;
    }

    a {
      text-decoration: none;
      height: 100%;
      width: 100%;
    }
  }

  #githubButton {
    position: relative;
    margin-left: 10px;
    width: 150px;
    height: 40px;
    background: #9148c9;
    border-radius: 5px;
    border: none;

    a {
      margin-left: 20px;
      color: #ffffff;
      text-decoration: none;
      height: 100%;
      width: 100%;
    }

    :hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }
`;
const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 140px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.58) 0%,
    rgba(226, 226, 226, 0.56) 100%
  );
  box-shadow: 0px 4.49006px 22.4503px 11.2251px rgba(0, 0, 0, 0.1);
  border-radius: 22.4503px;
  color: #ffffff;
  padding: 32px;

  h1 {
    font-weight: bold;
    font-size: 32px;
    line-height: 20px;
    color: #ffffff;
    margin-block-start: 0.1em;
    margin-block-end: 0.1em;
  }

  #subtitle {
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 37px;
    margin-block-start: 0.1em;
    margin-block-end: 0.1em;

    color: #e6e6e6;
  }

  #description {
    font-size: 14px;
  }
`;
const GitHubLogo = styled(githublogo)`
  float: right;
  width: 15px;
  height: 15px;
  border: 0;
  position: absolute;
  left: 45px;
  fill: #ffffff;
`;

const StepCircle = styled(gradientCircle)`
  width: 50px;
  height: 50px;
  border: 0;
  position: absolute;
  top: -20px;
  right: -20px;
`;

const Step = styled.p`
  position: absolute;
  top: -20px;
  right: 0px;
  font-weight: bold;
`;

export default BoxCard;
