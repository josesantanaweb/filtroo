import React from "react";
import "../styles/components/loader.scss";

const LoaderTop = () => (
  <div className="loader-top__slider">
    <div className="loader-top__line"></div>
    <div className="loader-top__subline loader-top__subline--inc"></div>
    <div className="loader-top__subline loader-top__subline--dec"></div>
  </div>
);

export default LoaderTop;
