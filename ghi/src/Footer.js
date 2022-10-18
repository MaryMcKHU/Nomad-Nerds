import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import logo from "./images/logo.png";

function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-3 border-top">
      <ul className="nav col-md-4 justify-content-start">
        <li className="nav-item">
          <NavLink to="/" className="nav-link px-2 text-muted">
            Home
          </NavLink>
        </li>
        <li className="nav-link px-2 text-muted">Connect: </li>
        <li className="nav-item">
          <a
            href="mailto:nomadnerds1@gmail.com"
            className="nav-link px-2 text-muted"
          >
            < AiOutlineMail size="1.5em" />
          </a>
        </li>
        <li className="nav-item">
          <a
            href="https://www.instagram.com/nomad.nerds/"
            className="nav-link px-2 text-muted"
          >
            < AiOutlineInstagram size="1.5em" />
          </a>
        </li>
        <li className="nav-item">
          <a
            href="https://www.facebook.com/"
            className="nav-link px-2 text-muted"
          >
            < AiOutlineFacebook size="1.5em" />
          </a>
        </li>
        <li className="nav-item">
          <ul className="navbar-nav px-2">
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                < AiOutlineLinkedin size="1.5em" />
              </NavLink>
              <div
                style={{ left: "unset", right: "0" }}
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a
                  href="https://www.linkedin.com/in/mary-mckinnon/"
                  className="dropdown-item"
                >
                  Mary
                </a>
                <a
                  href="https://www.linkedin.com/in/calebrdgz/"
                  className="dropdown-item"
                >
                  Caleb
                </a>
                <a
                  href="https://www.linkedin.com/in/arthur-cronin/"
                  className="dropdown-item"
                >
                  Arthur
                </a>
                <a
                  href="https://www.linkedin.com/in/emmaoh5"
                  className="dropdown-item"
                >
                  Emma
                </a>
              </div>
            </li>
          </ul>
        </li>
      </ul>

      <NavLink
        to="/"
        className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
      >
        <div className="justify-content-center">
          <img src={logo} style={{ height: 40 }} alt='logo' />
        </div>
      </NavLink>
    </footer>
  );
}

export default Footer;

