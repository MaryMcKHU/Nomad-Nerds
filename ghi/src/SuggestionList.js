import activities from "./activities.json";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function SuggestionList() {
  const lowerNum = Math.floor(Math.random() * 11);
  const higherNum = lowerNum + 4;

  return (
    <ul>
      <h2
        style={{
          fontFamily: "verdana",
          fontWeight: "bold",
          paddingTop: 15,
          textAlign: "center",
        }}
      >
        Recommendations for Popular Destinations
      </h2>
      {activities.map((location, index) => (
        <div key={index}>
          <Container className="container-fluid">
            <h3
              className="card-title"
              style={{
                fontFamily: "verdana",
                fontWeight: "bold",
                padding: 15,
                paddingTop: 15,
                marginTop:'50px'
              }}
            >
              {Object.keys(location)}
            </h3>
            <Row className="flex-nowrap flex-row">
              {Object.values(location)[0]
                .slice(lowerNum, higherNum)
                .map((store, idx) => (
                  <Col key={idx} className="col-3">
                    <Card style={{ width: "18rem", height:'28em' }}>
                      <Card.Img
                        variant="top"
                        src={store.image_url}
                        height={250}
                      />
                      <Card.Body>
                        <Card.Title style={{ fontWeight: "bold" }}>
                          <Row>
                            <div>{store.name}</div>
                            <div style={{ color: "green", fontSize: "16px" }}>
                              {store.price ? store.price : ""}
                            </div>
                          </Row>
                          {store.rating
                            ? [...Array(Math.floor(store.rating))].map(
                              (_, i) => (
                                <span key={i}>
                                  <BsStarFill
                                    size="1em"
                                    color="rgb(222, 190, 60)"
                                  />
                                </span>
                              )
                            )
                            : ""}
                          {store.rating ? (
                            String(store.rating).slice(-2) === ".5" ? (
                              <BsStarHalf
                                size="1em"
                                color="rgb(222, 190, 60)"
                              />
                            ) : (
                              ""
                            )
                          ) : (
                            ""
                          )}
                        </Card.Title>
                        <Card.Text>
                          {store.location.display_address[0]}
                          <br />
                          {store.location.display_address[1]}
                          <br />
                          {store.location.display_address[2]}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
            </Row>
          </Container>
        </div>
      ))}
    </ul>
  );
}

export default SuggestionList;
