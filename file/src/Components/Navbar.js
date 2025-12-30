import React, { useState } from "react";
import "../Style/Navbar.css";
import { Link } from "react-router-dom";
import logo_21 from '../Assets/logo_21.png';
import ReorderIcon from "@mui/icons-material/Reorder";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Navbar = () => {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };



  const [openCategories, setOpenCategories] = useState(false);
    const toggleCategories = () => {
    setOpenCategories(!openCategories);
  };




  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>

        <div className="logo">
        <Link to="/">
          <img src={logo_21} alt="not found" />
        </Link>
        </div>



        <div className="hiddenLinks">
            <div className="centerd">
          <Link to="/main" style={{color:"#a3e4bdff"}}>Home</Link>
          <Link to="/categories" style={{color:"#a3e4bdff"}}>Categories</Link>
          <Link to="/about" style={{color:"#a3e4bdff"}}>About</Link>
          <Link to="/contact" style={{color:"#a3e4bdff"}}>Contact</Link>
          </div>
          <Link to="/login" style={{color:"#a3e4bdff"}}>Login</Link>
               <div className="iconn">
          <Link to="/rivse" > <AccountCircleIcon fontSize="large"/> </Link>
               </div>
        </div>
      </div>

      <div className="rightSide">
       <Link to="/main">Home</Link>






 {/* Categories Dropdown */}
<div className="dropdown">
  <span className="dropbtn" onClick={toggleCategories}>Categories ▾</span>

  <div className={`dropdown-content ${openCategories ? "show" : ""}`}>
    <Link to="/categories/nature" style={{color:"#a3e4bdff"}}>Nature</Link>
    <Link to="/categories/restaurant" style={{color:"#a3e4bdff"}}>Restaurant</Link>
    <Link to="/categories/cafe" style={{color:"#a3e4bdff"}}>Cafe</Link>
    <Link to="/categories/heritage" style={{color:"#a3e4bdff"}}>Heritage</Link>
    <Link to="/categories/water" style={{color:"#a3e4bdff"}}>Water</Link>
  </div>
</div>





















          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
          <div className="iconn">
          <Link to="/rivse" ><AccountCircleIcon fontSize="large"/></Link>
          </div>

        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
};

export default Navbar;