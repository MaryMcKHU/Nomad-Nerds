import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { useToken } from "../users/Auth";
import Button from "react-bootstrap/Button";
import ModalLogin from '../users/ModalLogin';
import ModalSignup from '../users/ModalSignup';
import { GrClose } from 'react-icons/gr';
import "../index.css";


function Nav() {
  const [token] = useToken();
  const [clicked, setClicked] = useState(false);

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
      <button
          onClick={handleClick}
          className={clicked ? (<GrClose style={{color:'black', zIndex:1}}/>) : "navbar-toggler"}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{color:'black', zIndex:1}}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <NavLink
          className="navbar-brand font-link2"
          to="/"
          style={{ fontWeight: "bolder", color: "black" }}
        >
          nomad nerds .
        </NavLink>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarCollapse"
        >
          <ul className='nav-menu'>
            {token ? (
              <div>
              <NavLink to="user/favorites/" >
                <Button
                  variant="outline-dark"
                  style={{ fontWeight: "bolder", marginRight:10, marginTop:10 }}
                  className="menu-btn"
                >
                  favorites
                </Button>
              </NavLink>
              <NavLink to="user/logout/">
              <Button
                variant="outline-dark"
                style={{ fontWeight: "bolder", marginRight:10, marginTop:10 }}
                className="menu-btn"
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
