import styled from "styled-components";

export const NavbarStyled = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  transition: top 0.3s;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.palette.colorMain};
  &:hover {
    border-bottom: 4px solid ${({ theme }) => theme.palette.colorAccent};
  }
`;

export const Logo = styled.a`
  color: #2d325b;
  font-family: "Krona One", sans-serif;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #c1ff3f;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  box-shadow: none;
  border: none;
  cursor: pointer;
`;
