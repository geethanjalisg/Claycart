import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function NavBar() {
  useEffect(() => {
    // Enable dropdown on hover
    const dropdowns = document.querySelectorAll(".navbar .dropdown");
    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener("mouseenter", () => {
        dropdown.classList.add("show");
        dropdown.querySelector(".dropdown-menu").classList.add("show");
      });

      dropdown.addEventListener("mouseleave", () => {
        dropdown.classList.remove("show");
        dropdown.querySelector(".dropdown-menu").classList.remove("show");
      });
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/Home">
          CLAY CART
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/Home">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Shop
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/models">
                    Models
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/buymodels">
                    Buy Models
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/Addmodels">
                    Add Models
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/buy-clay">
                    Buy Clay
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Aboutus">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Onlinetutorials">
                Online Tutorial
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-nav ml-auto">
          <button className="btn btn-outline-light mr-2">Search</button>
          <button className="btn btn-outline-light">Cart</button>
          <button className="btn btn-outline-light ml-2">Login</button>
          <button className="btn btn-outline-light ml-2">Logout</button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;