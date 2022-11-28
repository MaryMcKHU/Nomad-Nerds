import React, { useState } from "react";
import CategorySearch from "../searchByCategory/CategorySearch";
import SuggestionList from "./SuggestionList";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import HeroBanner from "./HeroBanner";
import Modal from "react-bootstrap/Modal";
import "aos/dist/aos.css";
import activities from "../images/activities.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ScrollTop from "./ScrollTop";

function MainPage() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <HeroBanner />
      <ScrollTop />
      <Container>
        <Row>
          <Col>
            <Container data-aos="fade-up" className="citysearch-section">
              <h1 className="citysearch-header">
                <span className="citysearch-header">
                  <div>
                    Know what you want to do <br />
                  </div>
                  <div>but not sure where to do it?</div>
                </span>
              </h1>
              <div className="arrow-search" style={{ marginTop: "5%" }}>
                <Button
                  variant="dark"
                  className="cat-search"
                  onClick={handleShow}
                >
                  Search
                </Button>
                <div className="cat-search-modal">
                  <Modal
                    show={show}
                    onHide={handleClose}
                    dialogClassName="modal-md"
                    style={{ textAlign: "center", display: "block" }}
                  >
                    <Modal.Header closeButton>
                      Search an activity in a group of cities
                    </Modal.Header>
                    <Modal.Body style={{ maxWidth: 470 }}>
                      <CategorySearch />
                    </Modal.Body>
                    <Modal.Footer></Modal.Footer>
                  </Modal>
                </div>
              </div>
            </Container>
          </Col>
          <Col>
            <Container
              style={{ marginTop: "25%" }}
              data-aos="fade-right"
              className="activities-image"
            >
              <img src={activities} alt="activities" height={350}></img>
            </Container>
          </Col>
        </Row>
      </Container>
      <Container>
        <SuggestionList />
      </Container>
    </>
  );
}

export default MainPage;
