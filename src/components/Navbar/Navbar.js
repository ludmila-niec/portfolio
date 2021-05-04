import React from "react";
import { ReactComponent as Menu } from "../../assets/icons/menu.svg";
import { NavbarStyled, Wrapper, Logo } from "./styled";

const Navbar = () => {
  return (
    <NavbarStyled>
      <Wrapper>
        <Logo>Ludmila Nieczyporuk</Logo>
        <Menu title="Menu icon" height='25px' />
      </Wrapper>
    </NavbarStyled>
  );
};

export default Navbar;
