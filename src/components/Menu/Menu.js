import React, { useEffect, useRef } from "react";
import MenuLinks from "./MenuLinks";
import { Container, WrapperTop, Wrapper, Button } from "./styled";
import { ReactComponent as CloseIcon } from "../../assets/icons/close-icon.svg";
// context
import { useLanguage } from "../../context/Language";
// animation
import { showMenu, showMenuLinks, hideMenuLinks } from "../../animation/menu";

const Menu = ({ isOpen, onClose }) => {
  const {
    state: { data, language },
    action: { changeLanguage },
  } = useLanguage();
  const menuRef = useRef(null);

  useEffect(() => {
    showMenu(menuRef.current);
    showMenuLinks(".menu__link");
  }, []);

  useEffect(() => {
    if (isOpen) {
      if (window.matchMedia("(max-width:599px").matches) return;
      menuRef.current.style.top = window.pageYOffset + "px";
    }
  }, [isOpen]);

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
        </Button>
        <WrapperTop>
          <Button disabled={language === "EN"} onClick={changeLanguage}>
            En
          </Button>
          <span>/</span>
          <Button disabled={language === "ES"} onClick={changeLanguage}>
            Es
          </Button>
        </WrapperTop>
      </WrapperTop>
      <Wrapper>
        <MenuLinks onClose={handleCloseMenu} menuList={data.menu} />
      </Wrapper>
    </Container>
  );
};

export default Menu;
