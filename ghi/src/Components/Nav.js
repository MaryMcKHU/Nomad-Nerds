import { NavLink } from "react-router-dom";
import { useToken } from "../users/Auth";
import Button from "react-bootstrap/Button";
import ModalLogin from '../users/ModalLogin';
import ModalSignup from '../users/ModalSignup';
import "../index.css";


function Nav() {
  const [token] = useToken();

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
              <NavLink to="user/favorites/" >
                <Button
                  variant="outline-dark"
                  style={{ fontWeight: "bolder", marginRight:10, marginTop:10 }}
                  className="font-link2"
                >
                  favorites
                </Button>
              </NavLink>
              <NavLink to="user/logout/">
              <Button
                variant="outline-dark"
                style={{ fontWeight: "bolder", marginRight:10, marginTop:10 }}
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
        </div>
      </div>
    </nav>
    </>
  );
}

export default Nav;
