import React from "react";
import logo from "./logo.jpg"  // Adjust the path based on your project structure
import linkedin from "./linkedin.jpg"
import twitter from "./twitter.jpg"
import instagram from "./instagram.jpg"
import youtube from "./youtube.jpg"
import facebook from "./facebook.jpg"
import SDG from "./SDG.jpg";
import "./Footer.css";  // Ensure you have a CSS file for styling
  

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-section">
          {/* Left - Logo */}
          <div className="footer-logo-container">
            <img src={logo} alt="FoodMate Logo" className="footer-logo" />
          </div>
  
          {/* Middle - About and Social Links */}
          <div className="footer-middle">
            <div className="footer-about">
              <h3>About FoodMate</h3>
              <a href="#">Who we are</a>
              <a href="#">Blog</a>
              <a href="#">Work With Us</a>
              <a href="#">Contact Us</a>
            </div>
  
            <div className="footer-social">
              <h3>Social Links</h3>
              <div className="social-icons">
                <img src={linkedin} alt="LinkedIn" />
                <img src={twitter} alt="Twitter" />
                <img src={instagram} alt="Instagram" />
                <img src={youtube} alt="YouTube" />
                <img src={facebook} alt="Facebook" />
              </div>
            </div>
          </div>
  
          {/* Right - SDG */}
          <div className="footer-sdg">
            <img src={SDG} alt="SDG Logo" />
            <h3>Sustainable Development Goals</h3>
          </div>
        </div>
  
        {/* Copyright */}
        <div className="copyright">
          Copyright 2025. FoodMart All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;