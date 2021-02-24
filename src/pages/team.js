import React from "react";
import { graphql } from "gatsby";
import styled, { keyframes } from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import TeamMember from "../components/TeamMember";
import team_data from "../data/team";

const Team = ({ data }) => {
  return (
    <Layout>
      <SEO title="Team" />
      <MainContainer>
        <PageContainer>
          <EboardTitleContainer>
            <EboardTitle>
              Meet Our <BoldText>Executive Board</BoldText>
            </EboardTitle>
          </EboardTitleContainer>
          <MainDescriptionContainer>
            {team_data.map(({ name, role, description, image }) => (
              <TeamMember
                name={name}
                role={role}
                description={description}
                images={image && data[image]}
                key={name}
              />
            ))}
          </MainDescriptionContainer>
        </PageContainer>
      </MainContainer>
    </Layout>
  );
};

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
    margin-top: 0;
    padding-top: 18vh;
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
    margin-bottom: 3em;
  }
`;

const BoldText = styled.strong`
  color: white;
`;

export default Team;

export const query = graphql`
  query {
    aliu: file(relativePath: { eq: "profiles/aliu.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    amehta: file(relativePath: { eq: "profiles/amehta.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    anachiappan: file(relativePath: { eq: "profiles/anachiappan.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    eriche: file(relativePath: { eq: "profiles/eriche.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    eshao: file(relativePath: { eq: "profiles/eshao.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    khanhng: file(relativePath: { eq: "profiles/khanhng.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    slin: file(relativePath: { eq: "profiles/slin.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    joannazh: file(relativePath: { eq: "profiles/joannazh.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    yliu: file(relativePath: { eq: "profiles/yliu.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    lxiang: file(relativePath: { eq: "profiles/lxiang.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    esilverman: file(relativePath: { eq: "profiles/esilverman.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    vvanam: file(relativePath: { eq: "profiles/vvanam.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    bjiang: file(relativePath: { eq: "profiles/bjiang.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    sjain: file(relativePath: { eq: "profiles/sjain.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
