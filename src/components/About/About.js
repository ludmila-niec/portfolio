import React, { useRef, useEffect } from "react";
import DividerCurve from "../Divider";
import {
  AboutStyled,
  BorderTitle,
  Container,
  Wrapper,
  ImageWrapper,
  Paragraph,
  TitleSection,
} from "./styled";
import myPicture from "../../assets/Images/portfolio-picture.JPG";

const About = ({ data }) => {
  const aboutDeco = useRef(null);

  useEffect(() => {
    aboutDeco.current.innerText = "";
    let counter = 8;
    for (let i = 0; i < counter; i++) {
      aboutDeco.current.innerText += "  About me  *  ";
    }
  }, []);

  return (
    <section id="about-me-link">
      <BorderTitle>
        <AboutStyled ref={aboutDeco}>About me</AboutStyled>
      </BorderTitle>
      <Container>
        <Wrapper>
          <div className="about__picture">
            <TitleSection>
              About <span className="about__subtitle-me">me</span>
            </TitleSection>
            <ImageWrapper>
              <img src={myPicture} alt="profile" />
            </ImageWrapper>
          </div>
          <div className="about__description">
            <Paragraph>{data.description}</Paragraph>
          </div>
        </Wrapper>
      </Container>
      <DividerCurve fill="#DCD1EF" />
    </section>
  );
};

export default About;
