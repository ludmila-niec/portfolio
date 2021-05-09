import React from "react";
import {
  Container,
  ImageWrapper,
  Wrapper,
  WrapperSocial,
  WrapperStack,
  WrapperTitle,
  Shadow,
} from "./styled";
import { ReactComponent as Github } from "../../../assets/icons/github-icon.svg";
import { ReactComponent as Website } from "../../../assets/icons/website-icon.svg";

const Project = ({ project, images }) => {
  const { title, description, stack } = project;
  return (
    <Container className="project__container">
      <ImageWrapper className="project__image">
        <picture>
          <source
            type="image/webp"
            srcSet={images.large.webp}
            media="(min-width:1200px)"
          />
          <source
            type="image/jpeg"
            srcSet={images.large.jpg}
            media="(min-width:1200px)"
          />
          <source type="image/jpeg" srcSet={images.small.webp} />
          <source type="image/jpeg" srcSet={images.small.jpg} />

          <img
            src={images.small.jpg}
            alt={title}
            loading="lazy"
            className="project__image-demo"
            width="750" height="500" 
          />
        </picture>
        <Shadow />
      </ImageWrapper>
      <Wrapper className="project__wrapper">
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
