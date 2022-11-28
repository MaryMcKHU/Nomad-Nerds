import React from "react";
import activities from "./activities.json";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "aos/dist/aos.css";

function SuggestionList() {
  const lowerNum = Math.floor(Math.random() * 11);
  const higherNum = lowerNum + 4;

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1200, min: 992 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 992, min: 768 },
      items: 2,
    },
    smaller: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  const cardImage = (store) => {
    return (
      <Card.Img
        variant="top"
        src={store.image_url}
        height={250}
        style={{ objectFit: "cover", borderRadius: 10 }}
      />
    );
  };

  const cardTitle = (store) => {
    return (
      <Card.Title style={{ fontWeight: "bold", fontSize: "18px" }}>
        <Row>
          <div>{store.name}</div>
          <div style={{ color: "green", fontSize: "14px" }}>
            {store.price ? store.price : ""}
          </div>
        </Row>
        {store.rating
          ? [...Array(Math.floor(store.rating))].map((_, i) => (
              <span key={i}>
                <BsStarFill size="0.8em" color="black" />
              </span>
            ))
          : ""}
        {store.rating ? (
          String(store.rating).slice(-2) === ".5" ? (
            <BsStarHalf size="0.8em" color="black" />
          ) : (
            ""
          )
        ) : (
          ""
        )}
      </Card.Title>
    );
  };

  const cardText = (store) => {
    return (
      <Card.Text style={{ fontSize: "16px" }}>
        {store.location.display_address[0]}
        <br />
        {store.location.display_address[1]}
        <br />
        {store.location.display_address[2]}
      </Card.Text>
    );
  };

  return (
    <>
      <h2 className="suggestion-list-header" data-aos="fade-up">
        Recommendations for Popular Destinations
      </h2>
      {activities.map((location, index) => (
        <div key={index}>
          <Container
            className="container-fluid"
            style={{ alignItems: "center", maxWidth: 1215 }}
          >
            <h3 className="card-title">{Object.keys(location)}</h3>
            <Row className="flex-nowrap flex-row">
              <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true}
                infinite={false}
                keyBoardControl={true}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-20-px"
              >
                {console.log(Object.values(location))}
                {Object.values(location)[0]
                  .slice(lowerNum, higherNum)
                  .map((store, idx) => (
                    <Col key={idx} className="col-3">
                      <Card
                        style={{
                          width: "16rem",
                          height: "28em",
                          border: "none",
                          marginTop: 15,
                        }}
                      >
                        {cardImage(store)}
                        <Card.Body>
                          {cardTitle(store)}
                          {cardText(store)}
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
              </Carousel>
            </Row>
          </Container>
        </div>
      ))}
    </>
  );
}

export default SuggestionList;
