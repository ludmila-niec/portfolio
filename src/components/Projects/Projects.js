import React, { useEffect } from "react";
import Project from "./Project";
import { Container, Title, Wrapper } from "./styled";
import DelilahView from "../../assets/Images/delilah-demo.png";
import RedeemView from "../../assets/Images/redeem-demo.png";
import GifosView from "../../assets/Images/gifos-demo.png";
import { ReactComponent as CircleBg } from "../../assets/shapes/circle-blue-yellow.svg";
import DividerCurve from "../Divider";
// animation
import {
  animateTitle,
  fadeInProject,
} from "../../animation/projects";
import { animateDivider } from "../../animation/divider";

const Projects = ({ data }) => {
  useEffect(() => {
    animateTitle(
      ".projects__title",
      ".projects__subtitle-line",
      "#projects-link"
    );
    // animate each project
    const projectsArray = document.querySelectorAll(".project__container");
    fadeInProject(projectsArray);
    // animate divider
    animateDivider(".divider__projects");
  }, []);

  const { projects } = data;
  return (
    <section id="projects-link">
      <Container>
        <Title className="projects__title">
          Explore my
          <br /> <span className="projects__subtitle-bigger">projects.</span>
          <div className="projects__subtitle-line"></div>
        </Title>
        <Wrapper>
          <Project project={projects[0]} image={DelilahView} />
          <CircleBg className="circle-bg" id="circle-flip" />
          <Project project={projects[1]} image={GifosView} />
          <CircleBg className="circle-bg" />
          <Project project={projects[2]} image={RedeemView} />
        </Wrapper>
      </Container>
      <DividerCurve
        fill="#2D325B"
        className="divider__projects"
        id="divider-projects-curve"
      />
    </section>
  );
};

export default Projects;
