import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useToken } from "./Auth";
import traveler from "../images/traveler.png";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, login] = useToken();

  if (token) {
    return <Navigate to="/" />;
  }
  var handleUserName = function (e) {
    const value = e.target.value;
    setUsername(value);
    props.setUN(value);
  };
  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src={traveler} className="img-fluid" alt="traveler" />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <br />
            <form>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <h4 style={{ color: "royalblue", fontWeight: "bold" }}>
                  LOG IN TO NOMAD NERDS
                </h4>
              </div>
              <div className="form-outline mb-4">
                <input
                  onChange={handleUserName}
                  required
                  type="text"
                  id="username"
                  className="form-control form-control-lg"
                  placeholder="Username"
                  value={username}
                />
              </div>
              <div className="form-outline mb-3">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  type="password"
                  id="password"
                  className="form-control form-control-lg"
                  placeholder="Password"
                  value={password}
                />
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="remember"
                  />
                  <label className="form-check-label" htmlFor="remember">
                    Remember me
                  </label>
                </div>
              </div>
              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  style={{
                    paddingLeft: "2.5rem",
                    paddingRight: "2.5rem",
                    paddingBottom: "2.5rem",
                  }}
                  onClick={() => login(username, password)}
                >
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{" "}
                  <a href="/user/signup/" className="link-danger">
                    Sign Up
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
