import { Carousel } from "react-bootstrap";
import skiing from "./images/skiing.jpg";
import airballoons from "./images/airballoons.jpg";
import boats from "./images/boats.jpg";

function CarouselFade() {
  return (
    <Carousel fade className="carousel" interval={6000}>
      <Carousel.Item style={{ zIndex: -1 }}>
        <Carousel.Caption>
          <div className="text-center">
            <h1 className="display-5 text-on-image" style={{color:'white'}}>
              <span className='font-link'>
                Find your next adventure...
              </span>
            </h1>
          </div>
        </Carousel.Caption>
        <img
          className="d-block"
          style={{ overflow: "hidden" }}
          src={airballoons}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{ zIndex: -1 }}>
        <Carousel.Caption>
          <div className="text-center">
            <h1 className="display-5 text-on-image" style={{color:'white'}}>
              <span className='font-link'>
                Find your next adventure...
              </span>
            </h1>
          </div>
        </Carousel.Caption>
        <img
          className="d-block"
          style={{ overflow: "hidden" }}
          src={skiing}
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item style={{ zIndex: -1 }}>
        <Carousel.Caption>
          <div className="text-center">
            <h1 className="display-5 text-on-image" style={{color:'white'}}>
              <span className='font-link'>
                Find your next adventure...
              </span>
            </h1>
          </div>
        </Carousel.Caption>
        <img
          className="d-block"
          style={{ overflow: "hidden" }}
          src={boats}
          alt="Forth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;
