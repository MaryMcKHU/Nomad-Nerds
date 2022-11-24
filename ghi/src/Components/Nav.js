import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useToken } from "../users/Auth";
import Button from "react-bootstrap/Button";
import ModalLogin from "../users/ModalLogin";
import "../index.css";

function Nav() {
  const [token] = useToken();
  const [clicked, setClicked] = useState(false);

  const handleClick = () => setClicked(!clicked);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ zIndex: 10 }}
      >
        <div className="container-fluid">
          <NavLink
            className="navbar-brand"
            to="/"
            style={{ fontWeight: "bolder", color: "black", marginLeft: "2%" }}
          >
            nomad nerds .
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleClick}
          >
            <span
              className={clicked ? "btn-close" : "navbar-toggler-icon"}
            ></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2">
              {token ? (
                <div>
                  <NavLink to="/">
                    <Button
                      variant="outline-dark"
                      style={{
                        fontWeight: "bolder",
                        marginRight: 10,
                        marginTop: 10,
                      }}
                      className="home-btn"
                    >
                      home
                    </Button>
                  </NavLink>
                  <NavLink to="user/favorites/">
                    <Button
                      variant="outline-dark"
                      style={{
                        fontWeight: "bolder",
                        marginRight: 10,
                        marginTop: 10,
                      }}
                      className="favorites-btn"
                    >
                      favorites
                    </Button>
                  </NavLink>
                  <NavLink to="user/logout/">
                    <Button
                      variant="outline-dark"
                      style={{
                        fontWeight: "bolder",
                        marginRight: 10,
                        marginTop: 10,
                      }}
                      className="logout-btn"
                    >
                      log out
                    </Button>
                  </NavLink>
                </div>
              ) : (
                <div>
                  <NavLink to="/">
                    <Button
                      variant="outline-dark"
                      style={{
                        fontWeight: "bolder",
                        marginRight: 10,
                        marginTop: 10,
                      }}
                      className="home-btn"
                    >
                      home
                    </Button>
                  </NavLink>
                  {/* <ModalSignup/> */}
                  <ModalLogin />
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
