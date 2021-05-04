import styled from "styled-components";

export const Container = styled.div`
  padding:2rem 2rem 6rem;
  overflow: hidden;

  @media ${({ theme }) => theme.mediaQuery.mediaMd} {
    padding: 3rem 3rem 8rem
  }
  @media ${({ theme }) => theme.mediaQuery.mediaLg} {
    padding: 0 4rem 12rem;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.palette.colorSecondary};
  font-size: 2.3rem;
  position: relative;

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
    bottom: 120px;
    left: 50px;
    z-index: -1;
  }
  & #circle-flip {
    transform: scaleX(-1);
    left: -50px;
    right: 50px;
  }

  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    & > #circle-flip {
      height: 250px;
      width: 100%;
      left: -200px;
      bottom: 150px;
    }
    & > svg {
      left: 182px;
      height: 280px;
      width: 100%;
    }
  }
  @media ${({ theme }) => theme.mediaQuery.mediaMd} {
    & > #circle-flip {
      left: -300px;
      height: 320px;
      bottom: 80px;
    }
    & > svg {
      height: 350px;
      left: 250px;
    }
  }
  @media ${({ theme }) => theme.mediaQuery.mediaLg} {
    & > div:nth-child(3) {
      flex-direction: row-reverse;
    }
  }
`;
