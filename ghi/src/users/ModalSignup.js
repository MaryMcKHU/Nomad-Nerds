import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "./Auth";
import traveler from "../images/traveler.png";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Signup(props) {
  const { token } = useAuthContext();
  const [username, setUsername] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
    <>
        <Button
            variant="outline-dark"
            style={{ fontWeight: "bolder" }}
            onClick={handleShow}
            className="font-link2"
        >sign up
        </Button>
        <Modal
            show={show} 
            onHide={handleClose} 
            dialogClassName='modal-sm'
            style={{textAlign:'center'}}
            className="font-link2"
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body
                style={{width: 450}}
            >
            <form>
              <div className="d-flex flex-row">
                <h4 style={{ color: "royalblue", fontWeight: "bold" }}>
                  Create your account
                </h4>
              </div>
              <div className="form-outline mb-2">
                <input
                  onChange={handleUserName}
                  required
                  type="text"
                  id="username"
                  className="form-control"
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
                  className="form-control"
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
                  className="form-control"
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
                  className="form-control"
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
                  className="form-control"
                  placeholder="Email"
                  value={email}
                />
              </div>
              <div>
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{float:'left', width:250, marginBottom:10, marginTop:10}}
                  onClick={() =>
                    signup(username, password, email, first_name, last_name)
                  }
                >
                  Sign Up
                </button>
                <p className="small fw-bold" style={{float:'left'}}>
                  Already have an account?{" "}
                  <a href="/user/login/" className="link-danger">
                    Log in
                  </a>
                </p>
              </div>
            </form>
            </Modal.Body>
        </Modal>
        </>
  );
}

export default Signup;