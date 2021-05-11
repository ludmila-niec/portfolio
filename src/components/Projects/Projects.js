import React, { useEffect } from "react";
import Project from "./Project";
import { Container, Title, Wrapper } from "./styled";
// x1 images
import delilah_x1_jpg from "../../assets/Images/x1/delilah-demo-x1.jpg";
import delilah_x1_webp from "../../assets/Images/x1/delilah-demo-x1.webp";
import gifos_x1_jpg from "../../assets/Images/x1/gifos-demo-x1.jpg";
import gifos_x1_webp from "../../assets/Images/x1/gifos-demo-x1.webp";
import redeem_x1_jpg from "../../assets/Images/x1/redeem-demo-x1.jpg";
import redeem_x1_webp from "../../assets/Images/x1/redeem-demo-x1.webp";

// x2images
import delilah_x2_jpg from "../../assets/Images/x2/delilah-demo-x2.jpg";
import delilah_x2_webp from "../../assets/Images/x2/delilah-demo-x2.webp";
import gifos_x2_jpg from "../../assets/Images/x2/gifos-demo-x2.jpg";
import gifos_x2_webp from "../../assets/Images/x2/gifos-demo-x2.webp";
import redeem_x2_jpg from "../../assets/Images/x2/redeem-demo-x2.jpg";
import redeem_x2_webp from "../../assets/Images/x2/redeem-demo-x2.webp";

import { ReactComponent as CircleBg } from "../../assets/shapes/circle-blue-yellow.svg";
import DividerCurve from "../Divider";
// animation
import { animateTitle, fadeInProject } from "../../animation/projects";
import { animateDivider } from "../../animation/divider";

const delilahImg = {
  small: { jpg: delilah_x1_jpg, webp: delilah_x1_webp },
  large: { jpg: delilah_x2_jpg, webp: delilah_x2_webp },
};
const gifosImg = {
  small: { jpg: gifos_x1_jpg, webp: gifos_x1_webp },
  large: { jpg: gifos_x2_jpg, webp: gifos_x2_webp },
};
const redeemImg = {
  small: { jpg: redeem_x1_jpg, webp: redeem_x1_webp },
  large: { jpg: redeem_x2_jpg, webp: redeem_x2_webp },
};

const Projects = ({ data, language }) => {
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

  const englishLanguage = language === "EN";

  const { projects } = data;
  return (
    <section id="projects-link">
      <Container>
        <Title className="projects__title">
          {englishLanguage ? "Explore my" : "Explora mis"}
          <br />{" "}
          <span className="projects__subtitle-bigger">
            {englishLanguage ? "projects." : "proyectos."}
          </span>
          <div className="projects__subtitle-line"></div>
        </Title>
        <Wrapper>
          <Project project={projects[0]} images={delilahImg} />
          <CircleBg className="circle-bg" id="circle-flip" />
          <Project project={projects[1]} images={gifosImg} />
          <CircleBg className="circle-bg" />
          <Project project={projects[2]} images={redeemImg} />
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

export default React.memo(Projects);
