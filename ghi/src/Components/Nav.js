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
  const [userName, setUserName] = useState("");


  return (
    <>
    <nav
      className="navbar navbar-expand-lg navbar-dark inline-block"
      style={{ zIndex: 10, backgroundColor: "transparent" }}
    >
      <div className="container-fluid">
      <NavLink
          className="navbar-brand"
          to="/"
          style={{ fontWeight: "bolder", color: "black", marginLeft:'2%' }}
        >
          nomad nerds .
        </NavLink>
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav ms-auto mb-2 inline-block">
            {token ? (
              <div>
                <NavLink 
                  to="user/favorites/"
                  // className="nav-link"
                >
                  <Button
                    variant="outline-dark"
                    style={{ fontWeight: "bolder", marginRight:10, marginTop:10 }}
                    className="favorites-btn"
                  >
                    favorites
                  </Button>
                </NavLink>
                <NavLink 
                  to="user/logout/"
                  // className="nav-link"
                >
                  <Button
                    variant="outline-dark"
                    style={{ fontWeight: "bolder", marginRight:10, marginTop:10 }}
                    className="logout-btn"
                  >
                    log out
                  </Button>
                </NavLink>
          </div>
            ): 
            (<div>
                <ModalLogin/>
                <ModalSignup/>
            </div>)
            
          }
      </ul>
      </div>
      </div>
    </nav>
    </>
  );
}

export default Nav;
