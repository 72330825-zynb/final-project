import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import "../Style/Footer.css";

export default function Footer() {


  return (
    <footer className="footer">

      {/* Top: About Project */}
      <div className="footer-about">
        <h4>About Project</h4>
        <p>
          Explore Lebanon's top destinations, heritage sites, and natural wonders. 
          Your journey begins here!
        </p>
      </div>

      {/* Main Row */}
      <div className="footer-main">

        {/* Left: Quick Links */}
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">🏠 Home</a></li>
            <li><a href="/destinations">🌍 Destinations</a></li>
            <li><a href="/about">ℹ️ About</a></li>
            <li><a href="/contact">✉️ Contact</a></li>
          </ul>
        </div>

        {/* Center: Contact + Social Icons */}
        <div className="footer-section contact">
          <h4>Contact Us</h4>
         <p>&copy;Email: info@tourismlb.com</p>
          <p>📞 Phone: +961 123 456</p>
          <div className="social-icons">
            <a href="#"><FacebookIcon /></a>
            <a href="#"><InstagramIcon /></a>
            <a href="#"><TwitterIcon /></a>
          </div>
        </div>

        {/* Right: Traveler Stories */}
        <div className="footer-section stories">
          <h4>Traveler Stories</h4>
          <p>“Hiking in the mountains was breathtaking!”</p>
          <p>“Sunset at the beach made my day unforgettable.”</p>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy;2025 Wen nro7. All rights reserved.</p>
      </div>

    </footer>
  );
}
