import React, { useState } from "react";
import '../Style/Login.css';
import logg from '../Assets/loggg.jpeg';
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useNavigate } from 'react-router-dom';
import { Button } from "react-bootstrap";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleStartClick = async () => {
    try {
      const res = await axios.post("http://localhost:5000/login", { email, password });
      const user = res.data;

      //t5zen
      localStorage.setItem("user", JSON.stringify(user));
      if (user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/main");
      }
    } catch (err) {
      alert("Email or password incorrect");
    }
  };

  return (
    <div className="wrapper">
      <div className="left-box">
        {/* LEFT IMAGE + Overlay */}
        <div className="box-left-image" style={{ backgroundImage: `url(${logg})` }}>
          <div className="overlay">
            <div className="welcome-wrapper">
              <h2 className="welcome-title" style={{ marginRight: "80px", color: "white" }}>
                WELCOME
              </h2>
              <div className="line-text">
                <span className="line"></span>
                <h3 className="word" style={{ fontFamily: "Trocchi", color: "white" }}>
                  to wen nro7
                </h3>
              </div>
            </div>
            <h6 style={{ fontFamily: "Lexend", marginTop: "30px", color: "white" }}>
              ...We’re excited to have you back! Log in and let us help you find the perfect spot for your next plan
            </h6>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="right">
          <h5 className="text-center" style={{ color: "#4f9c6eff", fontFamily: "Radona Norm Bold", marginBottom: "10px" }}>
            Login to wen nro7
          </h5>

          <div className="row g-3 justify-content-center">
            <div className="col">
              <label style={{ color: "#0a5326ff", fontFamily: "Lexend" }}>Email</label>
              <input
                type="text"
                className="form-control custom-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label style={{ color: "#0a5326ff", fontFamily: "Lexend" }}>Password</label>
              <input
                type="password"
                className="form-control custom-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="d-flex justify-content-center mt-3">
            <Button
              className="btn-login"
              style={{
                color: "#ffffff",
                borderRadius: "50px",
                padding: "7px 35px",
                fontSize: "1rem",
                background: "#0a5326ff",
              }}
              onClick={handleStartClick}
            >
              Login
            </Button>
          </div>

          <div className="d-flex align-items-center my-3">
            <div style={{ height: "1px", background: "#8d8b8bff", flex: 1 }}></div>
            <span style={{ padding: "0 10px", color: "#4f9c6eff", fontFamily: "Radona Norm Bold" }}>
              or with
            </span>
          </div>

          <div className="socialMedia">
            <InstagramIcon />
            <TwitterIcon />
            <FacebookIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;



