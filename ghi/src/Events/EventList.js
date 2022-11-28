import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Loading from "../Components/Placeholder.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useAuthContext } from "../users/Auth";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import no_info from "../images/no_info.png";
import HeartFilled from "../images/heart-filled.png";
import Heart from "../images/heart.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AiOutlineCalendar } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import EventSearch from "./EventSearch.js";

function EventList() {
  const location = useLocation();
  const [events, setEvents] = useState([]);
  const [eventsLoading, setEventsLoading] = useState(true);
  //   const [favorites, setFavorites] = useState([]);
  const { token } = useAuthContext();
  const city = location.state.city.city.replace(/ /g, "%20");
  const state = location.state.city.admin_name.replace(/ /g, "%20");
  const cityAndState = city + "%2C%20" + state;

  const navigate = useNavigate();

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

  //   async function getFavorites() {
  //     if (token) {
  //       const fetchConfig = {
  //         credentials: "include",
  //         method: "GET",
  //         headers: {
  //           "Access-Control-Request-Headers": "*",
  //           Authorization: `Bearer ${token}`,
  //         },
  //       };
  //       const url = `${process.env.REACT_APP_USER}/user/favorites/`;
  //       const response = await fetch(url, fetchConfig);
  //       if (response.ok) {
  //         const data = await response.json();
  //         setFavorites(data);
  //       }
  //     }
  //   }

  //   const favoriteList = favorites.map((favorite) => favorite.business_id);

  async function getEvents() {
    const fetchConfig = {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    };
    const categories_url = `${process.env.REACT_APP_API_YELP}/api-yelp/events/?start_date=1669966444&location=${cityAndState}`;
    const response = await fetch(categories_url, fetchConfig);
    if (response.ok) {
      const data = await response.json();
      setEvents(data["events"]);
    }
    await setEventsLoading(false);
  }

  //   async function addFavorite(
  //     id,
  //     business_name,
  //     business_image,
  //     business_rating,
  //     business_price,
  //     business_display_address,
  //     business_city,
  //     business_state
  //   ) {
  //     const url = `${process.env.REACT_APP_USER}/user/favorites/`;
  //     let content = {
  //       business_id: id,
  //       business_name,
  //       business_image,
  //       business_rating,
  //       business_price,
  //       business_display_address,
  //       business_city,
  //       business_state,
  //     };
  //     const fetchConfig = {
  //       credentials: "include",
  //       method: "POST",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(content),
  //     };
  //     const response = await fetch(url, fetchConfig);
  //     if (response.ok) {
  //       if (favorites.includes(id) === false) {
  //         setFavorites([...favorites, content]);
  //       }
  //     }
  //     if (response.status === 403) {
  //       if (
  //         window.confirm(
  //           "You cannot save favorites because you are not currently logged in. Would you like to log in?"
  //         )
  //       ) {
  //         navigate("/user/login/");
  //       } else {
  //       }
  //     }
  //   }

  //   async function deleteFavorite(id) {
  //     const fetchConfig = {
  //       credentials: "include",
  //       method: "DELETE",
  //       headers: {
  //         "Access-Control-Request-Headers": "*",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     };
  //     const url = `${process.env.REACT_APP_USER}/user/favorites/${id}`;
  //     const response = await fetch(url, fetchConfig);
  //     if (response.ok) {
  //       setFavorites(
  //         favorites.filter((favorite) => favorite["business_id"] !== id)
  //       );
  //     }
  //   }

  useEffect(() => {
    getEvents();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (eventsLoading === false && events.length === 0) {
    return (
      <div className="text-center">
        <img
          src={no_info}
          style={{ height: 400, marginTop: 100 }}
          alt="no_info"
        />
        <h1>Can't find any upcoming events in {location.state.city.city}</h1>
        <p style={{ marginBottom: 250 }} className="large fw-bold mt-2 pt-1">
          Back to{" "}
          <a href="/" className="link-danger">
            Home
          </a>
        </p>
      </div>
    );
  } else if (eventsLoading === true) {
    return <Loading />;
  }

  const cardImage = (event) => {
    const url = event.event_site_url;
    return (
      <div>
        <button
          onClick={() => window.open(url, "_blank")}
          style={{ border: "none" }}
        >
          <Card.Img
            variant="top"
            src={event.image_url}
            onError={(e) => (e.target.src = no_info)}
            height={250}
            style={{ objectFit: "cover", borderRadius: 10 }}
          />
        </button>
      </div>
    );
  };

  const cardTitle = (event) => {
    return (
      <Card.Title style={{ fontWeight: "bold", fontSize: "18px" }}>
        <Row>
          <div>{event.name}</div>
          <div style={{ color: "green", fontSize: "14px" }}>
            {/* {store.price ? store.price : " "} */}
          </div>
        </Row>
      </Card.Title>
    );
  };

  const cardText = (event) => {
    const start_date = new Date(event.time_start);
    const end_date = new Date(event.time_end);
    return (
      <Card.Text className="card-block px-2">
        <AiOutlineCalendar size={30} /> {start_date.toLocaleDateString("en-US")}
        ,{" "}
        {start_date.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
        {event.time_end
          ? "-" +
            new Date(event.time_end).toLocaleDateString("en-US") +
            ", " +
            end_date.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })
          : ""}
        <br />
        <br />
        <GoLocation size={30} /> {event.location.display_address[0]}
        <br />
        {event.location.display_address[1]}
        <br />
        <br />
        {event.tickets_url ? (
          <a href={event.tickets_url} target="_blank" rel="noreferrer noopener">
            Get tickets
          </a>
        ) : (
          ""
        )}
      </Card.Text>
    );
  };

  return (
    <ul>
      <h1 className="cat-list-header">
        Upcoming events in {city.replace("%20", " ").replace("%20", " ")}
        {state ? ", " + location.state.city.admin_name : " "}
      </h1>
      {console.log(events)}
      <Container className="container-fluid" style={{ maxWidth: 1215 }}>
        <h1 className="card-title"></h1>
        <Row>
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
            {events.map((event, index) => (
              <div key={index}>
                <Card
                  style={{
                    width: "16rem",
                    border: "none",
                    marginTop: 15,
                  }}
                >
                  {cardImage(event)}
                  <Card.Body>
                    {cardTitle(event)}
                    {cardText(event)}
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Carousel>
        </Row>
      </Container>
    </ul>
  );
}
export default EventList;
