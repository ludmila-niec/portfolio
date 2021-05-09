import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 5;
  @media ${({ theme }) => theme.mediaQuery.mediaLg} {
    padding: 4rem;
  }
`;
export const ImageWrapper = styled.div`
  position: relative;

  & > picture > .project__image-demo {
    width: 100%;
    height: auto;
    border-radius: 20px;
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
  justify-content: space-evenly;

  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    margin-top: 3rem;
  }
`;

export const WrapperTitle = styled.div`
  & .project__title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  & .project__description {
    font-size: 1.2rem;
  }

  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    & .project__title {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    & .project__description {
      font-size: 1.4rem;
      margin-bottom: 2rem;
    }
  }
`;

export const WrapperSocial = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 1.5rem 0;

  & > a > svg {
    margin: 1.5rem 1.5rem 1.5rem 0;
    height: 30px;
  }

`;

export const WrapperStack = styled.div`
  width: 100%;
  margin: 1.5rem 0;
  & > .project__stack-list {
    font-style: italic;
  }
  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    margin: 0;
  }
  @media ${({ theme }) => theme.mediaQuery.mediaLg} {
    font-size: 1.2rem;
    width: 80%;
  }
`;
