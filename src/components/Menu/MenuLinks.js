import React from "react";
import { MenuList, Link } from "./styled";

const MenuLinks = ({ menuList, onClose }) => {
  // redirect after de animation has ended
  function handleRedirect(e, link) {
    e.preventDefault();
    const element = document.querySelector(link);
    setTimeout(() => {
      element.scrollIntoView();
    }, 1200);
  }
  return (
    <MenuList onClick={onClose}>
      {menuList.map((item) => {
        const { title, link, accesibility } = item;
        return (
          <li className="menu__link" key={title}>
            <Link
              aria-label={accesibility}
              onClick={(e) => handleRedirect(e, link)}
              href={link}
            >
              {title}
            </Link>
          </li>
        );
      })}
    </MenuList>
  );
};

export default MenuLinks;
