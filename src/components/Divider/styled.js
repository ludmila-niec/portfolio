import styled from "styled-components";

export const DividerContainer = styled.div`
  width: 100%;
  transform: translateY(-60px);
  overflow: hidden;

    &.divider__projects{
        transform: translateY(30px);
    }
  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    transform: translateY(-100px);
  }
  @media ${({ theme }) => theme.mediaQuery.mediaLg} {
    transform: translateY(-160px);
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
