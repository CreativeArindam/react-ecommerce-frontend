import React from "react";
import "./Banner.css";
function Banner() {
  return (
    <>
      <div className="banner__image">
        <div className="banner__overlay"></div>
        <div className="banner__container">
          <h1 className="banner__companyName">Company</h1>
          <h3 className="banner__tagLine">Drop your catching tag line here</h3>
        </div>
      </div>
    </>
  );
}

export default Banner;
