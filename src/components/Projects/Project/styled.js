import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
  z-index: 5;

  @media ${({ theme }) => theme.mediaQuery.mediaMd} {
    height: unset;
  }
  @media ${({ theme }) => theme.mediaQuery.mediaLg} {
    flex-direction: row;
  }
`;
export const ImageWrapper = styled.div`
  position: relative;

  & > picture > .project__image-demo {
    width: 100%;
    height: auto;
    min-height: 200px;
    border-radius: 20px;
  }
  @media ${({ theme }) => theme.mediaQuery.mediaLg} {
    min-width: 60%;
  }
`;

export const Shadow = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background-color: rgba(33, 20, 57, 0.2);
  filter: blur(100px);
`;

export const Wrapper = styled.div`
  padding: 1.5rem 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    margin-top: 3rem;
    flex-direction: row;
    align-items: flex-start;
    & > div {
      flex: 1;
    }
    & > .project__content {
      margin-right: 2rem;
    }
  }
  @media ${({ theme }) => theme.mediaQuery.mediaMd} {
    height: unset;
  }
  @media ${({ theme }) => theme.mediaQuery.mediaLg} {
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    margin-top: 0;
    padding: 0 2rem;
    width: 40%;
  }
`;

export const WrapperTitle = styled.div`
  text-align: center;
  & .project__title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  & .project__description {
    font-style: italic;
  }

  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    & .project__title {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    & .project__description {
      font-size: 1.5rem;
      font-style: italic;
      margin-bottom: 2rem;
    }
  }

  @media ${({ theme }) => theme.mediaQuery.mediaMd} {
    text-align: left;
  }
`;

export const WrapperSocial = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;

  & > svg {
    margin: 1.5rem;
    height: 30px;
  }

  @media ${({ theme }) => theme.mediaQuery.mediaMd} {
    justify-content: flex-start;
    & > svg {
      margin-left: 0;
      height: 35px;
    }
  }
`;

export const WrapperStack = styled.div`
  width: 100%;
  border: 2px solid ${({ theme }) => theme.palette.colorSecondary};
  border-radius: 5px;

  & > .project__stack-title {
    padding: 1rem;
    color: ${({ theme }) => theme.palette.colorMain};
    background-color: ${({ theme }) => theme.palette.colorSecondary};
  }
  & > .project__stack-list {
    padding: 1rem;
  }

  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    font-size: 1.5rem;
  }
  @media ${({ theme }) => theme.mediaQuery.mediaLg} {
    h4 {
      font-size: 1rem;
    }
    p {
      font-size: 1.2rem;
    }
    width: 80%;
  }
`;
