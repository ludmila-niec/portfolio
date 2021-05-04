import styled from "styled-components";

export const Section = styled.section`
 height: 150vh;
 @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    height: 100vh;
  }
  @media ${({ theme }) => theme.mediaQuery.mediaMd} {
    height: 90vh;
  }
  @media ${({ theme }) => theme.mediaQuery.mediaLg} {
    height: 120vh;
  }
`

export const Container = styled.div`
  height:100%;
  background-color: ${({ theme }) => theme.palette.colorSecondary};
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    margin-bottom: 6rem;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.palette.colorMain};
  font-size: 2.5rem;
  & .skills__title-dot {
    color: ${({ theme }) => theme.palette.colorAccent};
  }
  margin-bottom: 4rem;
  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    font-size: 3.5rem;
  }
  @media ${({ theme }) => theme.mediaQuery.mediaMd} {
    font-size: 4rem;
  }
`;

export const SkillsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 2rem;
  h3 {
    color: ${({ theme }) => theme.palette.colorAccent};
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  p {
    color: ${({ theme }) => theme.palette.colorMain};
    font-size: 1.2rem;
  }

  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    grid-template-columns: repeat(2, 1fr);
    h3 {
      font-size: 2rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
  @media ${({ theme }) => theme.mediaQuery.mediaLg} {
    width: 60%;
  }
`;
export const SkillContent = styled.div`
  padding: 1.5rem;
  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    padding: 2.5rem;
    &.skills__front-end {
      grid-column: 1 / -1;
    }
  }
`;
