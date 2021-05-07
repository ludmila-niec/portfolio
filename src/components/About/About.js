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
// animation
import { slideTitleBorder, animateSection } from "../../animation/about";

const About = ({ data }) => {
  const aboutDeco = useRef(null);

  useEffect(() => {
    aboutDeco.current.innerText = "";
    let counter = 8;
    for (let i = 0; i < counter; i++) {
      aboutDeco.current.innerText += "  About me  *  ";
    }
  }, []);

  // animation
  useEffect(() => {
    slideTitleBorder(aboutDeco.current, ".border__container");
    animateSection('.about__title', '.about__picture','.about__description','.about__container')
  }, []);

  return (
    <section >
      <BorderTitle className="border__container">
        <AboutStyled ref={aboutDeco}>About me</AboutStyled>
      </BorderTitle>
      <Container className="about__container">
        <Wrapper id="about-me-link">
          <div className="about__picture">
            <TitleSection className="about__title">
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
      <DividerCurve fill="#DCD1EF" className="divider__about" />
    </section>
  );
};

export default About;
