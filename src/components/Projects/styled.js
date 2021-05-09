import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding: 2rem 2rem 6rem;
  overflow: hidden;

  @media ${({ theme }) => theme.mediaQuery.mediaMd} {
    padding: 3rem 3rem 8rem;
  }
  @media ${({ theme }) => theme.mediaQuery.mediaLg} {
    padding: 0 4rem 12rem;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.palette.colorSecondary};
  font-size: 2.3rem;
  position: relative;
  z-index: 5;

  & > .projects__subtitle-bigger {
    font-size: 2.5rem;
    position: relative;
    right: -80px;
  }
  & > .projects__subtitle-line {
    position: absolute;
    bottom: 10px;
    z-index: -1;
    width: 100%;
    height: 25px;
    background-color: ${({ theme }) => theme.palette.colorAccent};
  }

  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    font-size: 3.2rem;

    & > .projects__subtitle-bigger {
      font-size: 3.5rem;
    }

    & > .projects__subtitle-line {
      width: 50%;
      left: 60px;
    }
  }
  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    font-size: 3.8rem;
    & > .projects__subtitle-bigger {
      font-size: 4rem;
    }
  }
  @media ${({ theme }) => theme.mediaQuery.mediaMd} {
    margin-bottom: 5rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 8rem;

  & > svg {
    height: 200px;
    position: relative;
    bottom: 30px;
    left: 100px;
    overflow: visible;
  }
  & #circle-flip {
    transform: scaleX(-1);
    left: -100px;
  }

  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    & > #circle-flip {
      height: 250px;
      width: 100%;
      left: -275px;
    }
    & > svg {
      left: 275px;
      height: 280px;
      width: 100%;
    }
  }
  @media ${({ theme }) => theme.mediaQuery.mediaMd} {
    & > #circle-flip {
      left: -400px;
      height: 320px;
    }
    & > svg {
      height: 350px;
      left: 375px;
    }
  }
  @media ${({ theme }) => theme.mediaQuery.mediaLg} {
    & > #circle-flip {
      left: -575px;
    }
    & > svg {
      left: 555px;
      bottom:75px;
    }
  }
`;
