import React, { useState } from 'react';
import CategorySearch from "../searchByCategory/CategorySearch";
import SuggestionList from "./SuggestionList";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import HeroBanner from './HeroBanner';
import Modal from 'react-bootstrap/Modal';

function MainPage() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <HeroBanner />
    
      <Container>
          <h1
            className="citysearch-header"
            style={{ fontSize: "2rem", textAlign:'center', marginTop:'20%' }}
          >
            <span className="font-link2">
              <div>
                Know what you want to do <br />
              </div>
              <div>but not sure where to do it?</div>
            </span>
          </h1>
          <div className="arrow-search">
            <div style={{ marginTop:'2%', marginLeft:'50%', display: "inline-flex" }}>
              <Button 
                variant='dark' 
                style={{fontSize:"1.2rem", fontWeight:'bold', paddingBottom:'5%' }}
                onClick={handleShow}
              >
                Click Here!
              </Button>
            </div>
            <div>
              <Modal 
                show={show} 
                onHide={handleClose} 
                dialogClassName='modal-md'
                style={{textAlign:'center', display:'block'}}
              >
                <Modal.Header closeButton>Search an activity in a group of cities
                </Modal.Header>
                <Modal.Body style={{maxWidth:500}}>
                  <CategorySearch />
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer> 
              </Modal>
            </div>
          </div>
      </Container>
      <Container>
        <SuggestionList />
      </Container>
    </>
  );
}

export default MainPage;
