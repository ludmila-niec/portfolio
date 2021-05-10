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
// x1 images
import profile_x1_jpg from "../../assets/Images/x1/portfolio-picture-x1.jpg";
import profile_x1_webp from "../../assets/Images/x1/portfolio-picture-x1.webp";
//x2 images
import profile_x2_jpg from "../../assets/Images/x2/portfolio-picture-x2.jpg";
import profile_x2_webp from "../../assets/Images/x2/portfolio-picture-x2.webp";
// animation
import { slideTitleBorder, animateSection } from "../../animation/about";

const profileImage = {
  small: { jpg: profile_x1_jpg, webp: profile_x1_webp },
  large: { jpg: profile_x2_jpg, webp: profile_x2_webp },
};

const About = ({ data, language }) => {
  const { title, description } = data;
  const aboutDeco = useRef(null);

  useEffect(() => {
    aboutDeco.current.innerText = "";
    let counter = 8;
    let content = "";
    for (let i = 0; i < counter; i++) {
      content += `<span>${title}</span>`;
    }
    aboutDeco.current.innerHTML = content;
  }, [title]);

  const englishLanguage = language === "EN";

  // animation
  useEffect(() => {
    slideTitleBorder(aboutDeco.current, ".border__container");
    animateSection(
      ".about__title",
      ".about__picture",
      ".about__description",
      ".about__container"
    );
  }, []);

  return (
    <section>
      <BorderTitle className="border__container">
        <AboutStyled ref={aboutDeco}>{title}</AboutStyled>
      </BorderTitle>
      <Container className="about__container">
        <Wrapper id="about-me-link">
          <div className="about__picture">
            <TitleSection className="about__title">
              {englishLanguage ? "About " : "Sobre "}
              <span className="about__subtitle-me">
                {englishLanguage ? "me" : "mi"}
              </span>
            </TitleSection>
            <ImageWrapper>
              <picture>
                <source
                  type="image/webp"
                  srcSet={profileImage.large.webp}
                  media="(min-width:1200px)"
                />
                <source
                  type="image/jpeg"
                  srcSet={profileImage.large.jpg}
                  media="(min-width:1200px)"
                />
                <source type="image/jpeg" srcSet={profileImage.small.webp} />
                <source type="image/jpeg" srcSet={profileImage.small.jpg} />

                <img
                  src={profileImage.small.jpg}
                  alt="profile"
                  loading="lazy"
                  height="640"
                  width="360"
                />
              </picture>
            </ImageWrapper>
          </div>
          <div className="about__description">
            <Paragraph>{description}</Paragraph>
          </div>
        </Wrapper>
      </Container>
      <DividerCurve fill="#DCD1EF" className="divider__about" />
    </section>
  );
};

export default About;
