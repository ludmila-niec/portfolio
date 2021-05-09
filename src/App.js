import React, { useState, useRef } from "react";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import { useLanguage } from "./context/Language";
import Skills from "./components/Skills";
import Contact from "./components/Contact/Contact";

import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  min-height: 100%;
  background-color: ${({ theme }) => theme.palette.colorMain};
  transition: all 0.5s ease-in-out;

  &.body__backdrop {
    @media ${({ theme }) => theme.mediaQuery.mediaSm} {
      overflow: hidden;
      transition: all 0.5s ease-in-out;
      transform: translateX(-100px);
    }
  }
`;

const Backdrop = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 100;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
`;

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const {
    state: { data },
  } = useLanguage();
  const wrapperRef = useRef(null);
  const menuContainerRef = useRef(null);

  function handleOpenMenu() {
    setMenuIsOpen(true);
    wrapperRef.current.classList.add("body__backdrop");
    document.querySelector("html").style.overflow = "hidden";
  }

  function handleCloseMenu() {
    setMenuIsOpen(false);
    wrapperRef.current.classList.remove("body__backdrop");
    document.querySelector("html").style.overflow = "visible";
  }

  function handleClickOutside() {
    handleCloseMenu();
  }

  return (
    <Wrapper ref={wrapperRef}>
      {menuIsOpen && (
        <Menu
          isOpen={menuIsOpen}
          menuItems={data.menu}
          onClose={handleCloseMenu}
        />
      )}
      {menuIsOpen && <Backdrop onClick={handleClickOutside} />}
      <header className="App-header">
        <Navbar onOpen={handleOpenMenu} />
      </header>
      <main style={{ overflowX: "hidden" }}>
        <Intro data={data.intro} />
        <About data={data.about} />
        <Projects data={data.projects} />
        <Skills />
        <Contact />
      </main>
    </Wrapper>
  );
}

export default App;
