import activities from "./activities.json";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import 'react-multi-carousel/lib/styles.css';

function SuggestionList() {
  const lowerNum = Math.floor(Math.random() * 11);
  const higherNum = lowerNum + 4;

  return (
    <ul>
      <h2
        style={{
          paddingTop: 15,
          textAlign: "center",
          fontSize:'35px',
          marginTop:200,
          fontWeight:'bolder',
          color:'purple'
        }}
        className='font-link2'
      >
        Recommendations for Popular Destinations
      </h2>
      {activities.map((location, index) => (
        <div key={index}>
          <Container className="container-fluid">
            <h3
              className="card-title font-link2"
              style={{
                fontSize:'20px',
                paddingTop: 15,
                marginTop:50,
                fontWeight:'bolder'
              }}
            >
              {Object.keys(location)}
            </h3>
            <Row className="flex-nowrap flex-row">
              {Object.values(location)[0]
                .slice(lowerNum, higherNum)
                .map((store, idx) => (
                  <Col key={idx} className="col-3">
                    <Card style={{ width: "16rem", height:'28em', border:'none' }}>
                      <Card.Img
                        variant="top"
                        src={store.image_url}
                        height={250}
                        style={{objectFit:'cover', borderRadius:10}}
                      />
                      <Card.Body>
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
                        <Card.Text style={{fontSize:'14px'}}>
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
