import React, { useEffect } from "react";
import { Container, ContainerBlue, ContainerYellow } from "./styled";
import { animateLoading } from "../../animation/loading";

const Loading = () => {
  useEffect(() => {
    animateLoading(".container", ".container--blue", ".container--yellow");
  }, []);
  return (
    <Container className="container">
      <ContainerBlue className="container--blue" />
      <ContainerYellow className="container--yellow" />
    </Container>
  );
};

export default Loading;
