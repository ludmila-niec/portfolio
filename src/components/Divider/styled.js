import styled from "styled-components";

export const DividerContainer = styled.div`
  width: 100%;
  transform: translateY(50px);
  overflow: hidden;
  position: relative;
  z-index: 1;
  &.divider__about {
    transform: translateY(-80px);
  }
  &.divider__projects {
    transform: translateY(100%);
  }
  &.divider__skills {
    z-index: 3;
    width: 110%;
    transform: translate(-10px, -50px) rotateZ(3deg);
  }
  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    &.divider__about {
      transform: translateY(-180px);
    }
    &.divider__skills {
      transform: translate(-10px, -100px) rotateZ(3deg);
    }
  }
  @media ${({ theme }) => theme.mediaQuery.mediaLg} {
    &.divider__skills {
      transform: translate(-10px, -150px) rotateZ(3deg);
    }
  }
`;

export const CurveSVG = styled.svg`
  width: 100%;
  height: 100px;
  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    height: 200px;
  }
  @media ${({ theme }) => theme.mediaQuery.mediaMd} {
    height: 250px;
  }
  @media ${({ theme }) => theme.mediaQuery.mediaLg} {
    height: 350px;
  }
`;
