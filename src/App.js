import React, { useState, useRef, useCallback, Suspense, lazy } from "react";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Loading from "./components/Loading";
import { useLanguage } from "./context/Language";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

// lazy loading
const Home = lazy(() => import("./pages/Home"));

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

const Fallback = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.colorSecondary};
`;

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const {
    state: { data },
  } = useLanguage();
  const wrapperRef = useRef(null);

  const smallDevice = window.matchMedia("(max-width:599px").matches;

  const handleOpenMenu = useCallback(() => {
    setMenuIsOpen(true);
    document.querySelector("html").style.overflow = "hidden";
    if (smallDevice) return;
    wrapperRef.current.classList.add("body__backdrop");
  }, [smallDevice]);

  const handleCloseMenu = useCallback(() => {
    setMenuIsOpen(false);
    document.querySelector("html").style.overflow = "visible";
    if (smallDevice) return;
    wrapperRef.current.classList.remove("body__backdrop");
  }, [smallDevice]);

  function handleClickOutside() {
    handleCloseMenu();
  }

  return (
    <Wrapper ref={wrapperRef}>
      <Loading />
      <header className="App-header">
        <Navbar onOpen={handleOpenMenu} data={data.navbar} />
        {menuIsOpen && <Menu isOpen={menuIsOpen} onClose={handleCloseMenu} />}
        {menuIsOpen && !smallDevice && (
          <Backdrop onClick={handleClickOutside} />
        )}
      </header>
      <main style={{ overflowX: "hidden" }}>
        <Suspense fallback={<Fallback />}>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Suspense>
      </main>
      <Contact data={data.contact} />
    </Wrapper>
  );
}

export default App;
