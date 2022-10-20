import CitySearch from "./searchByCity/citySearch";
import CategorySearch from "./searchByCategory/CategorySearch";
import SuggestionList from "./SuggestionList";
import CarouselFade from "./Carousel.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import curling from './images/curling.svg';

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
                but not sure what to do while there?
              </span>
            </h1>
              <img
                src={curling}
                style={{ height:100, marginTop:30 }}
              >
              </img>
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
