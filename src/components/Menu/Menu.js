import React, { useEffect, useRef } from "react";
import {
  Container,
  WrapperTop,
  Wrapper,
  MenuList,
  Link,
  Button,
} from "./styled";
import { ReactComponent as CloseIcon } from "../../assets/icons/close-icon.svg";
// context
import { useLanguage } from "../../context/Language";
// animation
import { showMenuLinks, hideMenuLinks } from "../../animation/menu";

const Menu = ({ isOpen, onClose }) => {
  const {
    state: { data, language },
    action: { changeLanguage },
  } = useLanguage();
  const menuRef = useRef(null);
  const linkRef = useRef(null);
  const { menu } = data;

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

  // map each menu item
  const menuLinks = menu.map((item) => {
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
      <WrapperTop className="btn__wrapper">
        <Button
          aria-label="close menu"
          className="btn__close"
          onClick={handleCloseMenu}
        >
          <CloseIcon height="20px" width="20px" aria-hidden="true" />
          {/* Close */}
        </Button>
        <WrapperTop>
          <Button
            disabled={language === "EN"}
            onClick={changeLanguage}
          >
            En
          </Button>
          <span>/</span>
          <Button
            disabled={language === "ES"}
            onClick={changeLanguage}
          >
            Es
          </Button>
        </WrapperTop>
      </WrapperTop>
      <Wrapper>
        <MenuList onClick={handleCloseMenu}>{menuLinks}</MenuList>
      </Wrapper>
    </Container>
  );
};

export default Menu;
