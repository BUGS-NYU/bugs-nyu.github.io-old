import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Form = () => (
  <FormComtainer>
    <link
      href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css"
      rel="stylesheet"
      type="text/css"
    />
    <div id="mc_embed_signup">
      <form
        action="https://facebook.us12.list-manage.com/subscribe/post?u=5f7cd8e231acc62b039eb9cfc&amp;id=28b03423e1"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate
      >
        <div id="mc_embed_signup_scroll">
          <label htmlFor="mce-EMAIL">Subscribe</label>
          <input
            type="text"
            name="EMAIL"
            className="email"
            id="mce-EMAIL"
            placeholder="email address"
            required
          />
          <div
            style={{ position: "absolute", left: "-5000px" }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_5f7cd8e231acc62b039eb9cfc_28b03423e1"
              tabIndex="-1"
              value=""
            />
          </div>
          <div className="clear">
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
            />
          </div>
        </div>
      </form>
    </div>
  </FormComtainer>
);

const Signup = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <MainContainer>
        <PageContainer>
          <MainDescriptionContainer>
            <Form />
          </MainDescriptionContainer>
        </PageContainer>
      </MainContainer>
    </Layout>
  );
};

const MainContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
`;

const PageContainer = styled.article`
  display: block;
`;

const MainDescriptionContainer = styled.section`
  margin-top: 10%;
  min-height: 100vh;
  padding-bottom: 5vw;

  @media screen and (max-width: 768px) {
    margin-top: 0;
    padding-top: 17vh;
    padding-bottom: 20vh;
  }
`;

const FormComtainer = styled.div`
  width: 30%;
  margin: auto;
  #mc_embed_signup {
    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(5px);
    padding: 2em;
    clear: left;
    font: 20px Helvetica, rial, sans-serif;
    color: #fff;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    margin: auto;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
    #mc_embed_signup {
      width 70%;
    }
  }
`;

export default Signup;
