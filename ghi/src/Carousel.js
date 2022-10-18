import { Carousel } from "react-bootstrap";
import snowy from "./images/snowy.jpg";
import nycSkyline from "./images/nyc_skyline.jpg";
import sunset from "./images/sunset.jpg";
import bicycle from './images/bicycle.jpg';

function CarouselFade() {
  return (
    <Carousel fade className="carousel" interval={6000} >
      <Carousel.Item style={{ zIndex: -1 }}>
        <Carousel.Caption>
          <div className="text-center">
            <h1 className="display-5 fw-bold text-on-image" style={{fontFamily:'cursive', color:'black'}}>
              Find your next adventure...
            </h1>
          </div>
        </Carousel.Caption>
        <img
          className="d-block"
          style={{ overflow: "hidden" }}
          src={snowy}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel >
/* 
      <Carousel.Item style={{ zIndex: -1 }}>
        <Carousel.Caption>
          <div className="text-center">
            <h1 className="display-5 fw-bold text-on-image" style={{fontFamily:'cursive'}}>
              Find your next adventure...
            </h1>
          </div>
        </Carousel.Caption>
        <img
          className="d-block"
          style={{ overflow: "hidden" }}
          src={nycSkyline}
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item style={{ zIndex: -1 }}>
        <Carousel.Caption>
          <div className="text-center">
            <h1 className="display-5 fw-bold text-on-image" style={{fontFamily:'cursive'}}>
              Find your next adventure...
            </h1>
          </div>
        </Carousel.Caption>
        <img
          className="d-block"
          style={{ overflow: "hidden" }}
          src={sunset}
          alt="Forth slide"
        />
      </Carousel.Item>
    </Carousel> */
  );
}

export default CarouselFade;
