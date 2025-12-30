import React from "react";
import "../Style/About.css";
import map from "../Assets/map.jpeg"; 
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
const About = () => {
  return (
    <>
    <Navbar/>
    <div className="about-page">
      <div className="about-container">

      
        <div className="about-left">
          <img src={map} />
        </div>

      
        <div className="about-right">
          <h1 className="about-title" style={{fontFamily:"Trocchi"}}>Welcome toWen nro7</h1>
          <p className="about-text">
            Welcome to <strong>Wen nro7</strong>, your ultimate guide to exploring the wonders of Lebanon! From the historic streets of Beirut to the breathtaking mountains, charming villages, and hidden cafés, we bring you the best of Lebanese culture, nature, and lifestyle.
          </p>
          <p className="about-text" style={{fontFamily:"Roboto"}}>
            Our mission is simple: to help locals and tourists alike discover, enjoy, and experience Lebanon like never before. Whether you’re looking for top tourist spots, cozy coffee shops, heritage sites, or scenic adventures, we’ve got you covered.
          </p>
          <p className="about-text" style={{fontFamily:"Roboto"}}>
            Join us on a journey to uncover the beauty, flavor, and soul of Lebanon—one destination at a time.
          </p>
        </div>

      </div>
    </div>
    <Footer/>
    </>
  );
};

export default About;