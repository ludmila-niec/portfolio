import styled from "styled-components";

export const BorderTitle = styled.div`
  background-color: ${({ theme }) => theme.palette.colorAccent};
  overflow: hidden;
`;

export const AboutStyled = styled.div`
  color: ${({ theme }) => theme.palette.colorSecondary};
  font-family: "Krona One", sans-serif;
  padding: 1.5rem 0;
  font-size: 1.2rem;
  /* overflow: hidden; */
  width: max-content;
  text-overflow: clip;
  white-space: nowrap;

  @media ${({ theme }) => theme.mediaQuery.mediaMd} {
    font-size: 2rem;
  }
`;

export const Container = styled.div`
  height: 190vh;
  padding: 2rem;
  background-color: ${({ theme }) => theme.palette.colorSecondary};
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    height: 130vh;
    padding: 3rem;
  }
  @media ${({ theme }) => theme.mediaQuery.mediaMd} {
    height: 120vh;
    padding: 4rem;
  }
  @media ${({ theme }) => theme.mediaQuery.mediaLg} {
    height: 180vh;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.mediaQuery.mediaMd} {
    flex-direction: row;
    height: 75%;

    & > div {
      flex: 1;
    }
    & > .about__picture {
      align-self: flex-start;
    }
    & > .about__description {
      align-self: flex-end;
    }
  }

  @media ${({ theme }) => theme.mediaQuery.mediaLg} {
    width: 80%;
  }
`;

export const TitleSection = styled.h2`
  color: ${({ theme }) => theme.palette.colorOffWhite};
  font-size: 2.3rem;
  display: inline;
  position: relative;
  & .about__subtitle-me {
    position: absolute;
    z-index: 10;
    right: -25px;
    bottom: -100%;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.palette.colorMain};
  }
  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    font-size: 3.2rem;
    & .about__subtitle-me {
      font-size: 3.5rem;
    }
  }
  @media ${({ theme }) => theme.mediaQuery.mediaMd} {
    font-size: 3.8rem;
    & .about__subtitle-me {
      font-size: 4rem;
    }
  }
`;

export const ImageWrapper = styled.div`
  height: 250px;
  width: 250px;
  border-radius: 100%;
  margin: 5rem 0 2rem auto;
  background-color: pink;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  & > img {
    height: auto;
    width: 100%;
    position: absolute;
  }

  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    height: 300px;
    width: 300px;
    margin: 6rem 2rem 2rem auto;
  }
  @media ${({ theme }) => theme.mediaQuery.mediaMd} {
    height: 400px;
    width: 400px;
  }
`;

export const Image = styled.img`
  height: 300px;
  width: auto;
  overflow: hidden;
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.palette.colorOffWhite};
  padding: 2rem 0;
  font-size: 1.2rem;
  padding-left: 1rem;
  line-height: 40px;

  @media ${({ theme }) => theme.mediaQuery.mediaMd} {
    font-size: 1.5rem;
    line-height: 50px;
  }
`;
