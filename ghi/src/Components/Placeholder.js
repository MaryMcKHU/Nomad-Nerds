import React from "react";
import Placeholder from "react-bootstrap/Placeholder";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from "react-bootstrap/Button";

function Loading() {
  const dummyBusinessList = [0, 1, 2, 3, 4];
  const dummyBusinessInfoList = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  ];

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
      breakpoint: { max: 1200, min: 900 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 900, min: 600 },
      items: 2,
    },
    smaller: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  return (
    <ul>
      <h1 className="cat-list-header" style={{ marginTop: "280px" }}>
        <Placeholder xs={10} animation="glow" />
      </h1>
      <p aria-hidden="true">
        <Placeholder xs={10} animation="glow" />
      </p>
      <Container style={{ textAlign: "center", marginTop: 20 }}>
      <Placeholder
          className="event-btn"
          variant="outline-dark"
          style={{
            fontWeight: "bolder",
            marginRight: 10,
            marginTop: 10,
          }}
        >
        </Placeholder>
      </Container>
      {dummyBusinessList.map((business, index) => (
        <div key={index}>
          <Container className="container-fluid" style={{ maxWidth: 1215 }}>
            <h1 className="card-title">
              <Placeholder xs={6} animation="glow" />
            </h1>
            <Row>
              <Carousel
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
                {dummyBusinessInfoList.map((dummy, idx) => (
                  <Col key={idx} className="col-3">
                    <Card
                      style={{
                        width: "16rem",
                        border: "none",
                        marginTop: 15,
                        marginRight: 10,
                        marginLeft: 10,
                      }}
                    >
                      <Card.Img
                        variant="top"
                        height={250}
                        style={{ objectFit: "cover", borderRadius: 10 }}
                      />
                      <Card.Body>
                        <Placeholder
                          as={Card.Title}
                          animation="glow"
                          style={{ fontWeight: "bold", fontSize: "18px" }}
                        >
                          <Placeholder xs={10} />
                        </Placeholder>
                        <Placeholder as={Card.Text} animation="glow">
                          <Placeholder xs={5} />
                          <Placeholder xs={8} />
                          <Placeholder xs={10} />
                        </Placeholder>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Carousel>
            </Row>
          </Container>
        </div>
      ))}
    </ul>
  );
}

export default Loading;
