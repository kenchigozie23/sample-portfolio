import "./FooterStyles.css";
import {
  FaGithub,
  
  FaLinkedin,
  
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="About about-us">
          <div className="main-about-u">
            <h2>About</h2>
            <p>
              If you're looking for a skilled full stack web developer to help
              bring your web application ideas to life, feel free to contact me.
              Let's discuss how I can contribute to your team and deliver
              top-notch results.
            </p>
          </div>
          <div className="main-about-us-social">
            <div className="socials">
              <NavLink to="https://github.com/kenchigozie23">
                <div className="git">
                  <FaGithub
                    size={30}
                    style={{ color: "white", marginRight: "1rem" }}
                  />
                </div>
              </NavLink>
            </div>
            <div className="socials ">
              <NavLink to="https://twitter.com/KennethAndrew89">
                <div className="twitter">
                  <FaTwitter
                    size={30}
                    style={{ color: "white", marginRight: "1rem" }}
                    
                  />
                </div>
              </NavLink>
            </div>
            <div className="socials ">
              <NavLink to="https://www.linkedin.com/in/kenneth-okoronkwo/">
                <div className="linkedin">
                  <FaLinkedin
                    size={30}
                    style={{ color: "white", marginRight: "1rem" }}
                  />
                </div>
              </NavLink>
            </div>

            <div className="socials ">
              <NavLink to="mailto:kenronkwo@gmail.com">
                <div className="mail">
                  <AiOutlineMail
                    size={30}
                    style={{ color: "white", marginRight: "2rem" }}
                  />
                </div>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="quick-links">
          <h2>Links</h2>

          <ul>
            <li>
              <Link to="/" className="link">Home</Link>
            </li>
            <li>
              <Link to="/project" className="link">Project</Link>
            </li>
            <li>
              <Link to="/about" className="link">About</Link>
            </li>
            <li>
              <Link to="/contact" className="link">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="contact-info">
          <h2>Contact</h2>
          <div className="location address">
            <IoLocation  size ={20} style={{color: "white"}} />
            <p>FCT, Abuja Nigeria.</p>
          </div>
          <div className="location phone">
            <FaPhone size ={20} style={{color: "white"}} />
            <a href="tel:+2347082039150">+2347082039150</a>
          </div>
          <div className="location email">
            <AiOutlineMail  size ={20} style={{color: "white"}}/>
            <a href="mailto:kenronkwo@gmail.com">kenronkwo@gmail.com</a>
          </div>
        </div>
      </div>
      <div className="copy-right">
        <p>Copyright &copy; 2023 Techpro. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
