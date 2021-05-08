import React, { useEffect } from "react";
import { Container, Wrapper, Title, LinkWrapper } from "./styled";
// animation
import { showLinks } from "../../animation/contact";
const Contact = () => {
  useEffect(() => {
    showLinks(".link__label", "#contact-link");
  }, []);
  return (
    <section id="contact-link">
      <Container>
        <Wrapper>
          <Title>Let's Talk!</Title>
          <LinkWrapper>
            <a
              className="link__label"
              href="mailto:ludmilanieczy.gmail.com"
              aria-label="send email yo ludmila"
            >
              /Email
            </a>
            <a
              className="link__label"
              href="https://github.com/ludmila-niec"
              rel="noreferrer noopener"
              target="_blank"
              aria-label="Go to ludmila's github account"
            >
              /Github
            </a>{" "}
            <a
              className="link__label"
              href="https://www.linkedin.com/in/ludmila-nieczyporuk/"
              rel="noreferrer noopener"
              target="_blank"
              aria-label="go to ludmila's linkedin"
            >
              /LinkedIn
            </a>
          </LinkWrapper>
        </Wrapper>
      </Container>
    </section>
  );
};

export default Contact;
