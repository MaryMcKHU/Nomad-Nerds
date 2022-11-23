import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { useToken } from "../users/Auth";
import Button from "react-bootstrap/Button";
import ModalLogin from '../users/ModalLogin';
import ModalSignup from '../users/ModalSignup';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import "../index.css";


function Nav() {
  const [token, signup] = useToken();
  const [clicked, setClicked] = useState(false);
  const [userName, setUserName] = useState("");

  const handleClick = () => {
    setClicked(!clicked);
  }

  return (
    <>
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ zIndex: 10, backgroundColor: "transparent" }}
    >
      <div className="container-fluid">
        <NavLink
          className="navbar-brand"
          to="/"
          style={{ fontWeight: "bolder", color: "black" }}
        >
          nomad nerds .
        </NavLink>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarCollapse"
        >
          <ul className={clicked ? "nav-menu active" : "nav-menu"}>
            {token ? (
              <div>
              <li className="nav-item">
                <NavLink 
                  to="user/favorites/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  <Button
                    variant="outline-dark"
                    style={{ fontWeight: "bolder", marginRight:10, marginTop:10 }}
                    className="favorites-btn"
                  >
                    favorites
                  </Button>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="user/logout/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  <Button
                    variant="outline-dark"
                    style={{ fontWeight: "bolder", marginRight:10, marginTop:10 }}
                    className="logout-btn"
                  >
                    log out
                  </Button>
                </NavLink>
              </li>
          </div>
            ): 
            (<div>
                <ModalLogin/>
                <ModalSignup/>
            </div>)
            
          }

          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <div className={clicked ? {AiOutlineClose} : {FaBars}}></div>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Nav;
