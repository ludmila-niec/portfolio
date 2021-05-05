import React, { useEffect, useRef } from "react";
import { Container, Wrapper, MenuList, Link, Button } from "./styled";
import { ReactComponent as CloseIcon } from "../../assets/icons/close-icon.svg";
// animation
import { showMenuLinks } from "../../animation/menu";

const Menu = ({ menuItems, isOpen, onClose }) => {
  const menuRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    showMenuLinks(".menu-link");
  }, []);

  useEffect(() => {
    if (isOpen) {
      if (window.matchMedia("(max-width:599px").matches) return;
      menuRef.current.style.top = window.pageYOffset + "px";
    }
  }, [isOpen]);

  const menuLinks = menuItems.map((item) => {
    const { title, link } = item;
    return (
      <li ref={linkRef} className="menu-link" key={title}>
        <Link href={link}>{title}</Link>
      </li>
    );
  });


  return (
    <Container ref={menuRef}>
      <Wrapper>
        <Button onClick={onClose}>
          <CloseIcon height="25px" width="25px" />
          CLOSE
        </Button>
        <MenuList onClick={onClose}>{menuLinks}</MenuList>
      </Wrapper>
    </Container>
  );
};

export default Menu;
