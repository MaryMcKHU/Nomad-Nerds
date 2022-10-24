import CitySearch from "./searchByCity/citySearch";
import CategorySearch from "./searchByCategory/CategorySearch";
import SuggestionList from "./SuggestionList";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';
import curling from "./images/curling.svg";
import HeroBanner from './HeroBanner';

function MainPage() {
  return (
    <>
    <HeroBanner />
      <Container>
        {/* <Row> */}
          {/* <Col>
            <h1
              className="citysearch-header"
              style={{ marginTop: 80, fontSize: "30px", marginLeft: -80 }}
            >
              <span className="font-link">
                <div>
                  Know where you're going <br />
                </div>
                <div>but not sure what to do while there?</div>
              </span>
            </h1>
            <div className="arrow-search" style={{ display: "inline-flex" }}>
              <img src={curling} style={{ height: 100, marginLeft: -80 }}></img>
              <div style={{ marginTop: 55 }}>
                <CitySearch />
              </div>
            </div>
          </Col>
          <Col> */}
            <h1
              className="citysearch-header"
              style={{ marginTop: 60, fontSize: "30px", textAlign:'center' }}
            >
              <span className="font-link2">
                <div>
                  Or know what you want to do <br />
                </div>
                <div>but not sure where to do it?</div>
              </span>
            </h1>
            <div className="arrow-search" style={{ display: "inline-flex" }}>
              <div style={{ marginTop: 60 }}>
                <Button>
                  Click Here!
                </Button>
              {/* <CategorySearch /> */}
              </div>
              <img src={curling} style={{ height: 100, marginLeft: 50, transform:'scaleX(-1)' }}></img>
            </div>
          {/* </Col> */}
        {/* </Row> */}
      </Container>
      <Container>
        <SuggestionList />
      </Container>
    </>
  );
}

export default MainPage;
