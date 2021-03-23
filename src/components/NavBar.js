import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";

import "./NavBar.css";

function Navbar() {
  // useState za promjenu statea clicka, prvotno je false:
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  // funkcija koja mijenja click u suprotmno od onoga što je u tom trenu, znači false->true i obrnuto:
  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  // da se button ne pojavljuje nakon svakog refreshanja:
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            to="/travel_site_responsive"
            className="navbar-logo"
            onClick={closeMobileMenu}
          >
            TRVL <i className="fab fa-typo3"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {/* znači ako je click true ikonica je iksić, a ako je false ikonica je hamburger: */}
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          {/* na klik itema iz menija, prikazuje i sakriva menu, pomoću closeMobileMenu funkcije, za mobilnu verziju */}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/travel_site_responsive"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
