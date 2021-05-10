import React, { useEffect } from "react";
import { ReactComponent as Circles } from "../../assets/shapes/circles.svg";
import { animateIntro, animateScrollSection } from "../../animation/intro";

const Intro = ({ language }) => {
  useEffect(() => {
    animateIntro(".intro__title", ".intro__circles");
    animateScrollSection(
      ".intro__title",
      ".intro__circles",
      ".intro__container"
    );
  }, []);
  const englishDescription = (
    <h1 className="intro__title">
      Hi! I’m Ludmila<span className="intro__yellow">,</span>
      <br />
      front end developer and designer from argentina
      <span className="intro__yellow">.</span>
    </h1>
  );
  const spanishDescripction = (
    <h1 className="intro__title">
      Hola! soy Ludmila<span className="intro__yellow">,</span>
      <br />
      desarrolladora front end y diseñadora de Argentina
      <span className="intro__yellow">.</span>
    </h1>
  );
  const description =
    language === "EN" ? englishDescription : spanishDescripction;
  return (
    <section
      className="intro__container"
      id="home-link"
      style={{ position: "relative" }}
    >
      <Circles className="intro__circles" />
      <div className="intro__wrapper">
        {description}
      </div>
    </section>
  );
};

export default Intro;
