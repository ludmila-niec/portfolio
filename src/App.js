import React, { useState, useRef, useCallback } from "react";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact/Contact";
import Loading from "./components/Loading";
import { useLanguage } from "./context/Language";

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
    state: { data, language },
  } = useLanguage();
  const wrapperRef = useRef(null);

  const handleOpenMenu = useCallback(() => {
    setMenuIsOpen(true);
    wrapperRef.current.classList.add("body__backdrop");
    document.querySelector("html").style.overflow = "hidden";
  }, []);

  const handleCloseMenu = useCallback(() => {
    setMenuIsOpen(false);
    wrapperRef.current.classList.remove("body__backdrop");
    document.querySelector("html").style.overflow = "visible";
  }, []);

  function handleClickOutside() {
    handleCloseMenu();
  }

  return (
    <Wrapper ref={wrapperRef}>
      <Loading />
      <header className="App-header">
        <Navbar onOpen={handleOpenMenu} data={data.navbar} />
        {menuIsOpen && <Menu isOpen={menuIsOpen} onClose={handleCloseMenu} />}
        {menuIsOpen && <Backdrop onClick={handleClickOutside} />}
      </header>
      <main style={{ overflowX: "hidden" }}>
        <Intro language={language} />
        <About data={data.about} language={language} />
        <Projects data={data.projects} language={language} />
        <Skills data={data.skills} />
        <Contact data={data.contact} />
      </main>
    </Wrapper>
  );
}

export default App;
