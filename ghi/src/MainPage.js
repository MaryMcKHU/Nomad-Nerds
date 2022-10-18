import CitySearch from "./searchByCity/citySearch";
import CategorySearch from "./searchByCategory/CategorySearch";
import SuggestionList from "./SuggestionList";
import CarouselFade from "./Carousel.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function MainPage() {
  return (
    <>
      <CarouselFade />
      <Container>
        <Row>
          <Col>
            <CitySearch />
          </Col>
          {/* <Col style={{ marginTop: -600 }}>
            <CategorySearch />
          </Col> */}
        </Row>
      </Container>
      <Container>
        <SuggestionList />
      </Container>
    </>
  );
}

export default MainPage;
