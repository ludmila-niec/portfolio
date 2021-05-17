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
import {
  slideBackground,
  slideTitleBorder,
  animateSection,
} from "../../animation/about";

const profileImage = {
  small: { jpg: profile_x1_jpg, webp: profile_x1_webp },
  large: { jpg: profile_x2_jpg, webp: profile_x2_webp },
};

const About = ({ data, language }) => {
  const { title } = data;
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

  // animation
  useEffect(() => {
    slideTitleBorder(aboutDeco.current, ".border__container");
    slideBackground(".about__container");
    animateSection(
      ".about__title",
      ".about__picture",
      ".about__description",
      ".about__container"
    );
  }, []);

  const englishLanguage = language === "EN";
  const enDescription = (
    <>
      <Paragraph>
        I'm a web developer, passionate about front end, and a fashion designer
        living in Buenos Aires, Argentina. Since 2019 I began my journey as a
        self taught developer, looking forward to bring all my passion for
        design and creativity to the digital world. In 2020, I continued my
        studies taking the Acamica's Full Stack Web development course. With
        everything I learnt, I was able to obtain new skills to continue my studies by my own and started learning React.js.
      </Paragraph>
      <Paragraph>
        I really enjoy creating beautiful and creative products where motion,
        interaction and design are perfectly integrated. I always focus on
        developing the best for the user experience, working on the performance,
        accesibility and taking care for the details.
      </Paragraph>
    </>
  );

  const esDescription = (
    <>
      <Paragraph>
        Soy una desarrolladora web, apasionada por el front end y diseñadora de
        indumentaria viviendo en Buenos Aires, Argentina. Desde el 2019 empecé a
        formarme como desarrolladora web de manera autodidacta, buscando llevar
        toda mi pasión por el diseño y la creatividad al mundo digital. En el
        2020, continué mis estudios tomando el curso de Desarrollo Full Stack de
        Acamica. Con todo lo aprendido, obtuve nuevas habilidades y
        conocimientos, que me permitieron seguir estudiando por mi cuenta, y empezar a aprender React.js.
      </Paragraph>
      <Paragraph>
        Me encanta crear productos estéticos y creativos, donde las
        transiciones, interacciones y diseño se integran perfectamente. Siempre
        me concentro en desarrollar lo mejor para la experiencia del usuario,
        trabajando en la performance, accesibilidad y enfocandome en los detalles.
      </Paragraph>
    </>
  );

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
            {englishLanguage ? enDescription : esDescription}
          </div>
        </Wrapper>
      </Container>
      <DividerCurve fill="#DCD1EF" className="divider__about" />
    </section>
  );
};

export default React.memo(About);
