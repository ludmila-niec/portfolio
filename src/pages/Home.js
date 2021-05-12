import React from "react";
import Intro from "../components/Intro/Intro";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { useLanguage } from "../context/Language";

const Home = () => {
  const {
    state: { data, language },
  } = useLanguage();
  return (
    <>
      <Intro language={language} />
      <About data={data.about} language={language} />
      <Projects data={data.projects} language={language} />
      <Skills data={data.skills} />
    </>
  );
};

export default Home;
