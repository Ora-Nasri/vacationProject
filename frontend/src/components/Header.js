import React from "react";
import "../style/header.css";


function Header() {
  return (
    <div>
      <div className="try">
        <a className="header-title" href="/">
          VAVAZTIOM
        </a> 
        <a href="/home" className="header-text">
          Home
        </a>
        <a href="/About" className="header-text">
          About us
        </a>     
      </div>
    </div>
  );
}

export default Header;
