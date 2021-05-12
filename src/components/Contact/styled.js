import styled from "styled-components";

export const Container = styled.div`
  min-height: 80vh;
  position: relative;
  z-index: 2;
  background-color: ${({ theme }) => theme.palette.colorOffWhite};
  overflow-x: clip;
  @media ${({ theme }) => theme.mediaQuery.mediaLg} {
    min-height: 100vh;
  }
`;

export const Wrapper = styled.div`
  padding: 0 2rem;
  @media ${({ theme }) => theme.mediaQuery.mediaLg} {
    padding: 0 6rem;
    position: relative;
    bottom: 100px;
  }
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 4rem;
  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    font-size: 3.5rem;
  }
  @media ${({ theme }) => theme.mediaQuery.mediaMd} {
    font-size: 4rem;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;

  & > .link__label {
    font-size: 2rem;
    color: ${({ theme }) => theme.palette.colorSecondary};
    -webkit-text-fill-color: ${({ theme }) => theme.palette.colorOffWhite};
    -webkit-text-stroke: 1px ${({ theme }) => theme.palette.colorSecondary};
    margin-bottom: 2.5rem;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      right: 0;
      bottom: -0.5rem;
      display: block;
      height: 0.4rem;
      width: 0;
      background: ${({ theme }) => theme.palette.colorMain};
      transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    &:hover {
      -webkit-text-fill-color: ${({ theme }) => theme.palette.colorSecondary};
    }
    &:hover::after {
      left: 0;
      width: 100%;
    }
  }

  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    & > .link__label {
      font-size: 3.5rem;
    }
  }
  @media ${({ theme }) => theme.mediaQuery.mediaLg} {
    flex-direction: row;
    justify-content: space-between;
    padding: 2rem;
  }
`;

export const CopyrightWrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.colorMain};
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  & > p {
    color: ${({ theme }) => theme.palette.colorSecondary};
    padding: 1rem;
    font-size: 0.8rem;
  }
`;
