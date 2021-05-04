import React from "react";
import { ReactComponent as Circles } from "../../assets/shapes/circles.svg";

const Intro = () => {
  return (
    <section className="intro__container" id="section-intro">
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
