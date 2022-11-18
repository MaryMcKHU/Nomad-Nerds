import React, { useState } from 'react';
import CategorySearch from "./searchByCategory/CategorySearch";
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
            style={{ fontSize: "30px", textAlign:'center', marginTop:100 }}
          >
            <span className="font-link2">
              <div>
                Know what you want to do <br />
              </div>
              <div>but not sure where to do it?</div>
            </span>
          </h1>
          <div className="arrow-search">
            <div style={{ marginTop:20, marginLeft:600, display: "inline-flex" }}>
              <Button 
                variant='primary' 
                style={{fontSize:20, fontWeight:'bold', paddingBottom:10 }}
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
                style={{textAlign:'center'}}
              >
                <Modal.Header closeButton>Search an activity in a group of cities
                </Modal.Header>
                <Modal.Body style={{width:500}}>
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
