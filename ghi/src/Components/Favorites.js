import React, { useEffect, useState } from "react";
import { useAuthContext } from "../users/Auth";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import no_info from "../images/no_info.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HeartFilled from "../images/heart-filled.png";
import ScrollTop from "./ScrollTop";

function Favorites() {
  const { token } = useAuthContext();
  const [favorites, setFavorites] = useState([]);
  const [sortedBusinesses, setSortedBusinesses] = useState([]);

  function parseJwt(token) {
    if (!token) {
      return;
    }
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    const token_info = JSON.parse(window.atob(base64));
    return token_info.user.username;
  }

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

  async function getFavorites() {
    const fetchConfig = {
      credentials: "include",
      method: "GET",
      headers: {
        "Access-Control-Request-Headers": "*",
        Authorization: `Bearer ${token}`,
      },
    };
    const url = `${process.env.REACT_APP_USER}/user/favorites/`;
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      const data = await response.json();
      setFavorites(data);
    }
  }

  async function deleteFavorite(id) {
    const fetchConfig = {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Access-Control-Request-Headers": "*",
        Authorization: `Bearer ${token}`,
      },
    };
    const url = `${process.env.REACT_APP_USER}/user/favorites/${id}`;
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      setFavorites(
        favorites.filter((favorite) => favorite["business_id"] !== id)
      );
    }
  }

  function sortBusinesses() {
    const data = {};
    for (let business of favorites) {
      const city = business["business_city"];
      const state = business["business_state"];

      const location = city + ", " + state;
      if (data.hasOwnProperty(location)) {
        data[location].push(business);
      } else {
        data[location] = [business];
      }
    }
    setSortedBusinesses(data);
  }

  useEffect(() => {
    getFavorites();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    sortBusinesses();
  }, [favorites]); // eslint-disable-line react-hooks/exhaustive-deps

  const cardImage = (store) => {
    return (
      <div>
        <Card.Img
          variant="top"
          src={store["business_image"]}
          onError={(e) => (e.target.src = no_info)}
          height={250}
          style={{ objectFit: "cover", borderRadius: 10 }}
        />
        <button
          style={{
            float: "right",
            backgroundColor: "transparent",
            border: "none",
            position: "relative",
            marginTop: -235,
            marginRight: 8,
          }}
        >
          <img
            alt="heart-filled"
            src={HeartFilled}
            height={22}
            onClick={(e) => deleteFavorite(store["business_id"])}
          ></img>
        </button>
      </div>
    );
  };

  const cardTitle = (store) => {
    return (
      <Card.Title
        style={{
          fontWeight: "bold",
          fontSize: "18px",
        }}
      >
        <Row>
          <div>{store["business_name"]}</div>
          <div style={{ color: "green", fontSize: "14px" }}>
            {store["business_price"] ? store["business_price"] : " "}
          </div>
        </Row>
        {store["business_rating"]
          ? [...Array(Math.floor(store["business_rating"]))].map((_, i) => (
              <span key={i}>
                <BsStarFill size="0.8em" color="black" />
              </span>
            ))
          : ""}
        {store["business_rating"] ? (
          String(store["business_rating"]).slice(-2) === ".5" ? (
            <BsStarHalf size="0.8em" color="black" />
          ) : (
            ""
          )
        ) : (
          ""
        )}
      </Card.Title>
    );
  };

  const cardText = (store) => {
    return (
      <Card.Text>
        {store["business_display_address"][0]}
        <br />
        {store["business_display_address"][1]}
        <br />
        {store["business_display_address"][2]}
      </Card.Text>
    );
  };

  return (
    <ul>
      <ScrollTop />
      <h1
        style={{
          fontWeight: "bold",
          fontSize: "40px",
          textAlign: "center",
          paddingTop: 15,
          marginTop: 110,
        }}
      >
        {parseJwt(token)}'s Favorites{" "}
      </h1>
      {Object.keys(sortedBusinesses).map((location, index) => (
        <div key={index}>
          <Container
            className="container-fluid font-link2"
            style={{ maxWidth: 1215 }}
          >
            <h1
              className="card-title"
              style={{
                fontWeight: "bolder",
                paddingTop: 25,
                marginTop: 50,
              }}
            >
              {location}
            </h1>
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
                {sortedBusinesses[location].map((store, idx) => (
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
                      {cardImage(store)}
                      <Card.Body>
                        {cardTitle(store)}
                        {cardText(store)}
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
export default Favorites;
