import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  z-index: 500;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.palette.colorMain};
`;

export const ContainerBlue = styled.div`
  background-color: ${({ theme }) => theme.palette.colorSecondary};
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
export const ContainerYellow = styled.div`
  background-color: ${({ theme }) => theme.palette.colorAccent};
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
