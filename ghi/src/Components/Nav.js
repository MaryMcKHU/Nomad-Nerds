import { NavLink } from "react-router-dom";
import { useToken } from "../users/Auth";
import Button from "react-bootstrap/Button";
import ModalLogin from '../users/ModalLogin';
import ModalSignup from '../users/ModalSignup';
import "../index.css";
import Logout from "../users/Logout";

// export const loggedIn = [
//   { name: "favorites", path: "user/favorites/" },
//   { name: "log out", path: "user/logout/" },
// ];

// export const loggedOut = [
//   { name: "log in", path: "user/login/" },
//   { name: "sign up", path: "user/signup/" },
// ];

// const ifLoggedIn = "navbar-nav";
// const ifLoggedOut = "navbar-nav";

function Nav() {
  const [token] = useToken();
  // const links = token ? loggedIn : loggedOut;

  return (
    <>
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ zIndex: 10, backgroundColor: "transparent" }}
    >
      <div className="container-fluid">
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
          <ul>
            {token ? (
              <div>
              <NavLink to="user/favorites/">
                <Button
                  variant="outline-dark"
                  style={{ fontWeight: "bolder" }}
                  className="font-link2"
                >
                  favorites
                </Button>
              </NavLink>
              <NavLink to="user/logout/">
              <Button
                variant="outline-dark"
                style={{ fontWeight: "bolder" }}
                className="font-link2"
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
          
          {/* <ul className={ token ? ifLoggedIn : ifLoggedOut}>
            {links.map((link, index) => (
              <li className="px-2" key={index}>
                <NavLink to={link.path}>
                  <Button
                    variant="outline-dark"
                    style={{ fontWeight: "bolder" }}
                    className="font-link2"
                  >
                    {link.name}
                  </Button>
                </NavLink>
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </nav>
    </>
  );
}

export default Nav;
