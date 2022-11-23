import React, { useState, useEffect } from 'react';
import CategorySearch from "../searchByCategory/CategorySearch";
import SuggestionList from "./SuggestionList";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import HeroBanner from './HeroBanner';
import Modal from 'react-bootstrap/Modal';
import AOS from 'aos'
import 'aos/dist/aos.css'
import activities from '../images/activities.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MainPage() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <HeroBanner />
      <Container>
        <Row>
          <Col>
            <Container data-aos="fade-right">
              <h1
                className="citysearch-header"
                
                style={{ fontSize: "1.6rem", textAlign:'center', marginTop:'45%' }}
              >
                <span className="font-link2">
                  <div>
                    Know what you want to do <br />
                  </div>
                  <div>but not sure where to do it?</div>
                </span>
              </h1>
              <div className="arrow-search" style={{marginTop:'5%'}}>
                <Button
                    variant='dark'
                    className='cat-search'
                    onClick={handleShow}
                  >
                    Search
                </Button>
                <div className='cat-search-modal'>
                  <Modal 
                    show={show} 
                    onHide={handleClose} 
                    dialogClassName='modal-md'
                    style={{textAlign:'center', display:'block'}}
                  >
                    <Modal.Header closeButton>Search an activity in a group of cities
                    </Modal.Header>
                    <Modal.Body style={{maxWidth:470}}>
                      <CategorySearch />
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer> 
                  </Modal>
                </div>
              </div>
            </Container>
        </Col>
        <Col>
          <Container style={{marginTop:'25%', marginLeft:'10%'}} data-aos="fade-left">
            <img src={activities} height={350}></img>
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
