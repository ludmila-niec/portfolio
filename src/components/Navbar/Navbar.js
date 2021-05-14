import React, { useEffect, useRef } from "react";
import { ReactComponent as Menu } from "../../assets/icons/menu.svg";
import { NavbarStyled, Wrapper, Logo } from "./styled";

const Navbar = ({ onOpen, data }) => {
  const { accesibility } = data;
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
        <Logo
          role="button"
          aria-label={accesibility.logoBtn}
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
        >
          Ludmila Nieczyporuk
        </Logo>

        <Menu
          role="button"
          aria-label={accesibility.menuBtn}
          onClick={onOpen}
          title="Menu icon"
          height="25px"
        />
      </Wrapper>
    </NavbarStyled>
  );
};

export default React.memo(Navbar);
