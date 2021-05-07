import styled, { keyframes } from "styled-components";

const slideMenu = keyframes`
from{transform: translateX(100%)}
`;

export const Container = styled.div`
  position: fixed;
  z-index: 200;
  top: 0;
  right: 0px;
  bottom: 0px;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.colorMain};
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${slideMenu} 0.8s ease-in-out;
  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    width: 450px;
  }
`;

export const Wrapper = styled.div`
  padding: 3rem;
  height: 80%;
`;

export const Button = styled.button`
  font-family: "Krona One", sans-serif;
  color: ${({ theme }) => theme.palette.colorSecondary};
  display: block;
  font-size: 1.8rem;
  background-color: transparent;
  box-shadow: none;
  border: none;
  cursor: pointer;
  margin: 1.5rem 1.5rem 1.5rem 0;
  & > svg {
    margin-right: 1rem;
  }
`;

export const MenuList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 80%;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.palette.colorSecondary};
  font-family: "Krona One", sans-serif;
  font-size: 2rem;
  transition: transform 0.5s ease-out;
  display: block;
  &:hover {
    text-decoration-color: ${({ theme }) => theme.palette.colorAccent};
    transform: translateX(25px);
  }

  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    font-size: 3rem;
  }
`;
