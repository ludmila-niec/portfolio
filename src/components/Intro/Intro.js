import React, { useEffect } from "react";
import { ReactComponent as Circles } from "../../assets/shapes/circles.svg";
import { animateIntro, animateScrollSection } from "../../animation/intro";

const Intro = () => {
  useEffect(() => {
    animateIntro(".intro__title", ".intro__circles");
    animateScrollSection(
      ".intro__title",
      ".intro__circles",
      ".intro__container"
    );
  }, []);
  return (
    <section
      className="intro__container"
      id="home-link"
      style={{ position: "relative" }}
    >
      <Circles className="intro__circles" />
      <div className="intro__wrapper">
        <h1 className="intro__title">
          Hi! I’m Ludmila<span className="intro__yellow">,</span>
          <br />
          front end developer and designer from argentina
          <span className="intro__yellow">.</span>
        </h1>
      </div>
    </section>
  );
};

export default Intro;
