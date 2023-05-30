import React from "react";
import "./FooterStyles.css";
import {
  FaFacebook,
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p>No 25 St'mary Hospital Road</p>
              <p>Warri,Delta State.</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              +2347082039150
            </h4>
          </div>
          <div className="email">
            <NavLink to="mailto:kenronkwo@gmail.com">
              <h4>
                <FaMailBulk
                  size={20}
                  style={{ color: "white", marginRight: "2rem" }}
                />
                kenronkwo@gmail.com
              </h4>
            </NavLink>
          </div>
        </div>
        <div className="right">
          <h4>Hey there...</h4>
          <p>
            If you're looking for a skilled full stack web developer to help
            bring your web application ideas to life, feel free to contact me.
            Let's discuss how I can contribute to your team and deliver
            top-notch results.
          </p>
          <div className="social">
            <NavLink to="https://github.com/kenchigozie23">
              <FaGithub
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </NavLink>
            <NavLink to='https://twitter.com/KennethAndrew89'>

            <FaTwitter
              size={30}
              style={{ color: "white", marginRight: "1rem" }}
            />
            </NavLink>
            <NavLink to="https://www.linkedin.com/in/kenneth-okoronkwo/">
              <FaLinkedin
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
