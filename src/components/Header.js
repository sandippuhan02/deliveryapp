import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {

  const [btnName, setBtnName] = useState("login")
  return (
    <div className="header">
      <div className="logo-container">
        <img
          id="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQzM_oU_1q5B_rdcdVP81f-bFmvKq4BqR6Dg&s"
        />
      </div>
      <div className="nav-item">
        <ul>
          <li><Link className="list-item" to="/">Home</Link></li>
          <li><Link className="list-item" to="/about">About</Link></li>
          <li><Link className="list-item" to="/#">Cart</Link></li>
          <li><Link className="list-item" to="/contact">Contact Us</Link></li>
          <button className="login-btn" onClick={() => {
            btnName === "login" ? setBtnName("logout") : setBtnName("login")
            console.log(btnName)
          }} >{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;