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
  width: max-content;
  text-overflow: clip;
  white-space: nowrap;
  display: flex;
  & > span {
    margin-right: 50px;
  }

  @media ${({ theme }) => theme.mediaQuery.mediaMd} {
    font-size: 2rem;
  }
`;

export const Container = styled.div`
  height: 230vh;
  padding: 2rem;
  background-color: ${({ theme }) => theme.palette.colorSecondary};
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    height: 150vh;
    padding: 3rem;
  }
  @media ${({ theme }) => theme.mediaQuery.mediaMd} {
    height: 130vh;
    padding: 4rem;
  }
  @media ${({ theme }) => theme.mediaQuery.mediaLg} {
    height: 230vh;
  }
  @media ${({ theme }) => theme.mediaQuery.mediaXl} {
    min-width: 280vh;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

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
    font-size: 6rem;
    & .about__subtitle-me {
      font-size: 5.5rem;
    }
  }
`;

export const ImageWrapper = styled.div`
  height: 250px;
  width: 250px;
  border-radius: 100%;
  margin: 5rem 0 2rem auto;
  background-color: ${({ theme }) => theme.palette.colorMain};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  & > picture > img {
    height: auto;
    width: 100%;
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
  padding-bottom: 2rem;
  font-size: 1.2rem;
  padding-left: 1rem;
  line-height: 40px;

  @media ${({ theme }) => theme.mediaQuery.mediaMd} {
    font-size: 1.5rem;
    line-height: 50px;
  }
`;
