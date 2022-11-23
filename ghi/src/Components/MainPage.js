import React, { useState, useEffect } from 'react';
import CategorySearch from "../searchByCategory/CategorySearch";
import SuggestionList from "./SuggestionList";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import HeroBanner from './HeroBanner';
import Modal from 'react-bootstrap/Modal';
import AOS from 'aos'
import 'aos/dist/aos.css'

function MainPage() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleScroll = event => {
    console.log('scrollTop: ', event.currentTarget.scrollTop);
    console.log('offsetHeight: ', event.currentTarget.offsetHeight);
  };

  return (
    <>
    <HeroBanner />
    
      <Container>
          <h1
            className="citysearch-header"
            data-aos="fade-up"
            style={{ fontSize: "1.6rem", textAlign:'center', marginTop:'10%' }}
          >
            <span className="font-link2">
              <div>
                Know what you want to do <br />
              </div>
              <div>but not sure where to do it?</div>
            </span>
          </h1>
          <div className="arrow-search">
            <Button
                variant='dark'
                className='cat-search'
                onClick={handleShow}
              >
                Click Here!
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
      <Container>
        <SuggestionList />
      </Container>
    </>
  );
}

export default MainPage;
