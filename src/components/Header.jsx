import {useState} from "react";
import { LOGO_URL } from "../utils/constants.jsx";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("Login");

  return (
    <div className="header d-flex justify-content-between align-items-center p-2 text-white">
      <div className="logo-container">
        <img
          src={LOGO_URL}
          alt="Logo"
          className="logo w-50 h-50"
        />
      </div>
      <div className="nav-links d-flex gap-3">
        <a href="#home" className="nav-link">
          Home
        </a>
        <a href="#about" className="nav-link">
          About Us
        </a>
        <a href="#contact" className="nav-link">
          Contact Us
        </a>
        <a href="#cart" className="nav-link">
          Cart
        </a>
        <button className="btn btn-outline-light" onClick={() => {
          setIsLoggedIn(isLoggedIn === "Login" ? "Logout" : "Login");
        }}>
          {isLoggedIn}
        </button>
      </div>
    </div>
  );
};

export default Header;
