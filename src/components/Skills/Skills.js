import React, { useEffect } from "react";
import {
  Section,
  Container,
  Wrapper,
  Title,
  SkillsWrapper,
  SkillContent,
} from "./styled";
import DividerCurve from "../Divider";
// animation
import { animateSkills } from "../../animation/skills";

const Skills = () => {
  useEffect(() => {
    animateSkills(
      "#skills-link",
      ".skills__front-end",
      ".skills__back-end",
      ".skills__tools"
    );
  }, []);
  return (
    <Section id="skills-link">
      <Container>
        <Wrapper>
          <Title className="skills__title">
            Skills<span className="skills__title-dot">.</span>
          </Title>
          <SkillsWrapper>
            <SkillContent className="skills__front-end">
              <h3>Front End</h3>
              <p>
                HTML - CSS - SCSS - Bootstrap - Material-ui - Styled-components
                - GSAP - Javascript - React - Redux -
              </p>
            </SkillContent>
            <SkillContent className="skills__back-end">
              <h3>Back End</h3>
              <p>Node.js - Express.js - MongoDB - SQL - RestfulAPI</p>
            </SkillContent>
            <SkillContent className="skills__tools">
              <h3>Tools</h3>
              <p>Visual Studio Code - Git - Github - Photoshop - Figma</p>
            </SkillContent>
          </SkillsWrapper>
        </Wrapper>
      </Container>
      <DividerCurve fill="#F4F4F4" className="divider__skills" />
    </Section>
  );
};

export default Skills;
