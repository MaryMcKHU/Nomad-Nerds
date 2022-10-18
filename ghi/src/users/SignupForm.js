import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "./Auth";
import traveler from "../images/traveler.png";

function Signup(props) {
  const { token } = useAuthContext();
  const [username, setUsername] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { signup } = props;

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
                  SIGN UP FOR NOMAD NERDS
                </h4>
              </div>
              <div className="form-outline mb-2">
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
              <div className="form-outline mb-2">
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
              <div className="form-outline mb-2">
                <input
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  type="text"
                  id="first_name"
                  className="form-control form-control-lg"
                  placeholder="First Name"
                  value={first_name}
                />
              </div>
              <div className="form-outline mb-2">
                <input
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  type="text"
                  id="last_name"
                  className="form-control form-control-lg"
                  placeholder="Last Name"
                  value={last_name}
                />
              </div>
              <div className="form-outline mb-2">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  type="email"
                  id="email"
                  className="form-control form-control-lg"
                  placeholder="Email"
                  value={email}
                />
              </div>
              <div className="text-center text-lg-start pt-2">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  style={{
                    paddingLeft: "2.5rem",
                    paddingRight: "2.5rem",
                    paddingBottom: "2.5rem",
                  }}
                  onClick={() =>
                    signup(username, password, email, first_name, last_name)
                  }
                >
                  Sign Up
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Already on Nomad Nerds?{" "}
                  <a href="/user/login/" className="link-danger">
                    Log in
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

export default Signup;
