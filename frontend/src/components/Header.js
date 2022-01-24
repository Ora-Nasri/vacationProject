import React from "react";
import "../style/header.css";


function Header() {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div className="container">
    <a className="navbar-brand" href="#">VACATION</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/Home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/About">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Reviews">Reviews</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}

export default Header;
