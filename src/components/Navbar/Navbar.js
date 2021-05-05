import React, { useEffect, useRef } from "react";
import { ReactComponent as Menu } from "../../assets/icons/menu.svg";
import { NavbarStyled, Wrapper, Logo, Button } from "./styled";

const Navbar = ({ onOpen }) => {
  const navbarRef = useRef(null);
  let prevpageOffsetY = useRef(0);
  let currentPageoffsetY = useRef(0);
  useEffect(() => {
    function toggleNavbar() {
      currentPageoffsetY.current = window.pageYOffset;
      if (prevpageOffsetY.current > currentPageoffsetY.current) {
        navbarRef.current.style.top = "0";
      } else {
        navbarRef.current.style.top = "-100px";
      }
      prevpageOffsetY.current = currentPageoffsetY.current;
    }
    window.addEventListener("scroll", toggleNavbar);
    return () => window.removeEventListener("scroll", toggleNavbar);
  }, []);
  return (
    <NavbarStyled ref={navbarRef}>
      <Wrapper>
        <Logo>Ludmila Nieczyporuk</Logo>
        <Button onClick={onOpen}>
          <Menu title="Menu icon" height="25px" />
        </Button>
      </Wrapper>
    </NavbarStyled>
  );
};

export default Navbar;
