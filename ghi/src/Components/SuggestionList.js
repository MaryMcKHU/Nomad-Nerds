import React, { useContext } from 'react'
import activities from "./activities.json";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import Button from 'react-bootstrap/Button';
import RightArrowIcon from '../images/right-arrow.png';
import LeftArrowIcon from '../images/left-arrow.png';
import 'react-multi-carousel/lib/styles.css';
import AOS from 'aos'
import 'aos/dist/aos.css'

function SuggestionList() {
  const lowerNum = Math.floor(Math.random() * 11);
  const higherNum = lowerNum + 4;

  const cardImage = (store) => {
    return(
      <Card.Img
        variant="top"
        src={store.image_url}
        height={250}
        style={{objectFit:'cover', borderRadius:10}}
      />
    )
  }

  const cardTitle = (store) => {
    return (
      <Card.Title style={{ fontWeight: "bold", fontSize:'18px' }}>
        <Row>
          <div>{store.name}</div>
          <div style={{ color: "green", fontSize: "14px" }}>
            {store.price ? store.price : ""}
          </div>
        </Row>
        {store.rating
          ? [...Array(Math.floor(store.rating))].map(
            (_, i) => (
              <span key={i}>
                <BsStarFill
                  size="0.8em"
                  color="black"
                />
              </span>
            )
          )
          : ""}
        {store.rating ? (
          String(store.rating).slice(-2) === ".5" ? (
            <BsStarHalf
              size="0.8em"
              color="black"
            />
          ) : (
            ""
          )
        ) : (
          ""
        )}
      </Card.Title>
    )
  }

  const cardText = (store) => {
    return (
      <Card.Text style={{fontSize:'16px'}}>
        {store.location.display_address[0]}
        <br />
        {store.location.display_address[1]}
        <br />
        {store.location.display_address[2]}
      </Card.Text>
    )
  }

  const LeftArrow = () => {
    const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);

    return (
        isFirstItemVisible ? (
          null) 
          : (
          <Button variant='outline-secondary' style={{borderRadius:30, marginTop:120, borderWidth:2, paddingRight:15}} onClick={() => scrollPrev()} className='right-arrow'>
            <img src={LeftArrowIcon} height={20} alt='right-arrow' />
          </Button>
          )
    )
  }

  const RightArrow = () => {
      const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

      return (
        isLastItemVisible ? (
          null
        ): (
          <Button disabled={isLastItemVisible} variant='outline-secondary' style={{borderRadius:30, marginTop:120, borderWidth:2, paddingLeft:15}} onClick={() => scrollNext()} className='left-arrow'>
              <img src={RightArrowIcon} height={20} alt='right-arrow' />
          </Button>
        )
      )
  }

  return (
    <ul>
      <h2
        style={{
          paddingTop: 15,
          textAlign: "center",
          marginTop: "20%",
          fontWeight:'bolder',
        }}
        className='font-link2'
        data-aos="fade-up"
      >
        Recommendations for Popular Destinations
      </h2>
      {activities.map((location, index) => (
        <div key={index}>
          <Container className="container-fluid font-link2" style={{maxWidth:1226}}>
            <h3
              className="card-title"
              style={{
                paddingTop: '1%',
                marginTop: 60,
                fontWeight: 'bolder'
              }}
            >
              {Object.keys(location)}
            </h3>
            <Row className="flex-nowrap flex-row">
            <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
              {Object.values(location)[0]
                .slice(lowerNum, higherNum)
                .map((store, idx) => (
                  <Col key={idx} className="col-3">
                    <Card style={{ width: "16rem", height:'28em', border:'none', marginLeft:10, marginTop:15, marginRight:10 }}>
                      {cardImage(store)}
                      <Card.Body>
                        {cardTitle(store)}
                        {cardText(store)}
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </ScrollMenu>
            </Row>
          </Container>
        </div>
      ))}
    </ul>
  );
}

export default SuggestionList;
