import React, { useEffect } from "react";
import { loadingEffect } from "../../animation/loading";
import { useLocation } from "react-router-dom";

const Loading = () => {
  const { path } = useLocation();
  useEffect(() => {
    setTimeout(() => {
      document.querySelector("html").style.overflow = "visible";
    }, 1200);

    document.querySelector("html").style.overflow = "hidden";
    loadingEffect(
      ".loading__container",
      ".loading__container--yellow",
      ".loading__container--blue"
    );
  }, [path]);
  return (
    <div className="loading__container">
      <div className="loading__container--blue"></div>
      <div className="loading__container--yellow"></div>
    </div>
  );
};

export default Loading;
