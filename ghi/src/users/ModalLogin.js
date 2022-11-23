import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useToken } from './Auth';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ModalSignup from './ModalSignup';

function ModalLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [token, login] = useToken();

    if (token) {
        return <Navigate to="/" />;
    }
    var handleUserName = function (e) {
        const value = e.target.value;
        setUsername(value);
    };
    return (
      <>
        <Button
          variant="outline-dark"
          style={{ fontWeight: "bolder", marginRight:10, marginTop:10 }}
          onClick={handleShow}
          className="modal-login-btn"
        >log in</Button>
        <Modal
            show={show} 
            onHide={handleClose} 
            dialogClassName='modal-sm'
            className="font-link2"
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body
                style={{width: 450}}
            >
            <form>
              <div className="d-flex flex-row">
                <h4 style={{ fontSize:20, color: "royalblue", fontWeight: "bold", textAlign:'center' }}>
                Have an account? Log in.
                </h4>
              </div>
              <div className="form-outline mb-4">
                <input
                  onChange={handleUserName}
                  required
                  type="text"
                  id="username"
                  className="form-control form-control-md"
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
                  className="form-control form-control-md"
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
                  className="btn btn-primary"
                  onClick={() => login(username, password)}
                  style={{width:250}}
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
            </Modal.Body>
        </Modal>
        </>
    )
}
export default ModalLogin;