import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { HashLink } from 'react-router-hash-link';
const Navbar = () => {
  const [view, setView] = useState(0);
  return (
    <section className="p-4 main_section">
      <nav className="navbar">
        <Link className="portfolio" to="/">
          Portfolio
        </Link>
        {view == 0 ? (
          <div
            onClick={() => {
              setView(1);
            }}
            className="hamburger"
          >
            <RxHamburgerMenu />
          </div>
        ) : (
          <div
            onClick={() => {
              setView(0);
            }}
            className="hamburger"
          >
            <MdClose />
          </div>
        )}
        {view === 1 ? (
          <ul className="nav-ul">
          <li onClick={() => setView(0)}><HashLink smooth to="/#about">About</HashLink></li>
          <li onClick={() => setView(0)}><HashLink smooth to="/#experience">Experience</HashLink></li>
          <li onClick={() => setView(0)}><HashLink smooth to="/#projects">Projects</HashLink></li>
          <li onClick={() => setView(0)}><HashLink smooth to="/#contact">Contact</HashLink></li>
        </ul>
        
        ) : (
          <ul className="nav-ul_2">
           <li><HashLink smooth to="/#about">About</HashLink></li>
  <li><HashLink smooth to="/#experience">Experience</HashLink></li>
  <li><HashLink smooth to="/#projects">Projects</HashLink></li>
  <li><HashLink smooth to="/#contact">Contact</HashLink></li>
          </ul>
        )}
      </nav>
    </section>
  );
};

export default Navbar;
