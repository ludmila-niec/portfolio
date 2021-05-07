import React from "react";
import {
  Container,
  ImageWrapper,
  Image,
  Wrapper,
  WrapperSocial,
  WrapperStack,
  WrapperTitle,
  Shadow,
} from "./styled";
import { ReactComponent as Github } from "../../../assets/icons/github-icon.svg";
import { ReactComponent as Website } from "../../../assets/icons/website-icon.svg";

const Project = ({project, image }) => {
  const { title, description, stack } = project;
  return (
    <Container className="project__container">
      <ImageWrapper className="project__image">
        <Image src={image} />
        <Shadow />
      </ImageWrapper>
      <Wrapper className='project__wrapper'>
        <div className="project__content">
          <WrapperTitle>
            <h3 className="project__title">{title}</h3>
            <p className="project__description">{description}</p>
          </WrapperTitle>
          <WrapperSocial>
            <Github />
            <Website />
          </WrapperSocial>
        </div>
        <WrapperStack>
          <h4 className="project__stack-title">Tech Stack</h4>
          <p className="project__stack-list">{stack}</p>
        </WrapperStack>
      </Wrapper>
    </Container>
  );
};

export default Project;
