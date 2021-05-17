import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 200;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.colorMain};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    width: 450px;
  }
`;
export const WrapperTop = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  &.btn__wrapper {
    width: 100%;
  }
`;
export const Wrapper = styled.div`
  padding-top: 3rem;
  height: 80%;
  width: 100%;
`;

export const Button = styled.button`
  font-family: "Krona One", sans-serif;
  color: ${({ theme }) => theme.palette.colorSecondary};
  font-size: 1.2rem;
  background-color: transparent;
  box-shadow: none;
  border: none;
  cursor: pointer;
  margin: 1.5rem;
  position: relative;
  border-bottom: ${({ disabled, theme }) =>
    disabled && "4px solid " + theme.palette.colorAccent};
  & > svg {
    margin-right: 1rem;
  }
  &.btn__close {
    margin-left: 0;
  }
  &::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: -0.5rem;
    display: block;
    height: 0.2rem;
    width: 0;
    background: ${({ theme }) => theme.palette.colorSecondary};
    transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  &:hover::after {
    left: 0;
    width: 100%;
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
    /* font-size: 3rem; */
  }
`;
