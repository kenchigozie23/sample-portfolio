import "./HeroImgStyle.css";
import bg from "../assets/intro-bg.jpg";

import React from "react";
import { Link } from "react-router-dom";

function HeroImg() {
  return (
    <div className="hero" id="home">
      <div className="mask">
        <img src={bg} alt="bg-img" className="intro-img" />
      </div>
      <div className="content">
        <p>Lets's build something awesome together</p>
        
        <h1>Full Stack Web developer</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Hire me
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroImg;
