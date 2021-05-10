import React, { useEffect } from "react";
import {
  Container,
  Wrapper,
  Title,
  LinkWrapper,
  CopyrightWrapper,
} from "./styled";
// animation
import { showLinks } from "../../animation/contact";
const Contact = ({ data }) => {
  const { title, accesibility } = data;
  useEffect(() => {
    showLinks(".link__label", "#contact-link");
  }, []);

  const year = new Date().getFullYear();
  return (
    <footer id="contact-link">
      <Container>
        <Wrapper>
          <Title>{title}</Title>
          <LinkWrapper>
            <a
              className="link__label"
              href="mailto:ludmilanieczy.gmail.com"
              aria-label={accesibility.email}
            >
              /Email
            </a>
            <a
              className="link__label"
              href="https://github.com/ludmila-niec"
              rel="noreferrer noopener"
              target="_blank"
              aria-label={accesibility.github}
            >
              /Github
            </a>{" "}
            <a
              className="link__label"
              href="https://www.linkedin.com/in/ludmila-nieczyporuk/"
              rel="noreferrer noopener"
              target="_blank"
              aria-label={accesibility.linkedin}
            >
              /LinkedIn
            </a>
          </LinkWrapper>
        </Wrapper>
        <CopyrightWrapper>
          <p> &copy;{year} - All rights reserved - Ludmila Nieczyporuk</p>
        </CopyrightWrapper>
      </Container>
    </footer>
  );
};

export default Contact;
