import React, { useEffect, useRef } from "react";
import { Container, Wrapper, MenuList, Link, Button } from "./styled";
import { ReactComponent as CloseIcon } from "../../assets/icons/close-icon.svg";
// animation
import { showMenuLinks, hideMenuLinks } from "../../animation/menu";

const Menu = ({ menuItems, isOpen, onClose }) => {
  const menuRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    showMenuLinks(".menu__link");
  }, []);

  useEffect(() => {
    if (isOpen) {
      if (window.matchMedia("(max-width:599px").matches) return;
      menuRef.current.style.top = window.pageYOffset + "px";
    }
  }, [isOpen]);

  // redirect after de animation has ended
  function handleRedirect(e, link) {
    e.preventDefault();
    const element = document.querySelector(link);
    setTimeout(() => {
      element.scrollIntoView();
    }, 1200);
  }

  const menuLinks = menuItems.map((item) => {
    const { title, link, accesibility } = item;
    return (
      <li ref={linkRef} className="menu__link" key={title}>
        <Link
          aria-label={accesibility}
          onClick={(e) => handleRedirect(e, link)}
          href={link}
        >
          {title}
        </Link>
      </li>
    );
  });

  function handleCloseMenu() {
    setTimeout(() => {
      onClose();
    }, 1200);
    hideMenuLinks(".menu__link");
  }

  return (
    <Container ref={menuRef}>
      <Wrapper>
        <Button aria-label="close menu" onClick={handleCloseMenu}>
          <CloseIcon height="25px" width="25px" aria-hidden="true" />
          CLOSE
        </Button>
        <MenuList onClick={handleCloseMenu}>{menuLinks}</MenuList>
      </Wrapper>
    </Container>
  );
};

export default Menu;
