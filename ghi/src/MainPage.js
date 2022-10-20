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
            <h1 className='citysearch-header' style={{marginTop:50, textAlign:'left', fontSize:'30px'}}>
              <span className='font-link'>
              Know where you're going <br /> 
              but don't know what to do while there?
              </span>
            </h1>
            <CitySearch />
            <CategorySearch />
          </Col>
        </Row>
      </Container>
      <Container>
        <SuggestionList />
      </Container>
    </>
  );
}

export default MainPage;
