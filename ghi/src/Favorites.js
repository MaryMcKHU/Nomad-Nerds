import React, { useEffect, useState } from "react";
import { useAuthContext } from "./users/Auth";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiFillHeart } from "react-icons/ai";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import no_info from "./images/no_info.png";

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

  async function getFavorites() {
    const fetchConfig = {
      credentials: "include",
      method: "get",
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
      method: "delete",
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
      <Card.Img
        variant="top"
        src={store["business_image"]}
        onError={(e) => (e.target.src = no_info)}
        height={250}
      />
    );
  };

  const cardTitle = (store) => {
    return (
      <Card.Title
        style={{
          fontWeight: "bold",
          backgroundColor: "rgb(250, 250, 250)",
          padding: 20,
          paddingTop: 10,
        }}
      >
        {store["business_name"]}
        <div style={{ color: "green", fontSize: "16px" }}>
          {store["business_price"] ? store["business_price"] : ""}
        </div>
        {store["business_rating"]
          ? [...Array(Math.floor(store["business_rating"]))].map((_, i) => (
              <span key={i}>
                <BsStarFill size="1em" color="rgb(222, 190, 60)" />
              </span>
            ))
          : ""}
        {store["business_rating"] ? (
          String(store["business_rating"]).slice(-2) === ".5" ? (
            <BsStarHalf size="1em" color="rgb(222, 190, 60)" />
          ) : (
            ""
          )
        ) : (
          ""
        )}
      </Card.Title>
    );
  };

  const cardBody = (store) => {
    return (
      <Card.Body>
        <Card.Text>
          {store["business_display_address"][0]}
          <br />
          {store["business_display_address"][1]}
          <br />
          {store["business_display_address"][2]}
          <Button
            variant="light"
            style={{ float: "right" }}
            onClick={(e) => deleteFavorite(store["business_id"])}
          >
            <AiFillHeart size="1.8em" color="red" />
          </Button>
        </Card.Text>
      </Card.Body>
    );
  };

  return (
    <div>
      <h1
        style={{
          fontFamily: "verdana",
          fontWeight: "bold",
          fontSize: "40px",
          textAlign: "center",
          paddingTop: 30,
        }}
      >
        {parseJwt(token)}'s Favorites{" "}
      </h1>
      <ul>
        {Object.keys(sortedBusinesses).map((location, index) => (
          <div key={index}>
            <Container className="container-fluid">
              <h1
                className="card-title"
                style={{
                  fontFamily: "verdana",
                  fontWeight: "bold",
                  fontSize: "30px",
                  paddingBottom: 20,
                  paddingTop: 50,
                }}
              >
                {location}
              </h1>
              <Row
                className="flex-nowrap flex-row"
                style={{ overflowX: "scroll" }}
              >
                {sortedBusinesses[location].map((store, idx) => (
                  <Col key={idx} className="col-3">
                    <Card
                      style={{
                        width: "18rem",
                        backgroundColor: "rgb(250, 250, 250)",
                      }}
                    >
                      {cardImage(store)}
                      {cardTitle(store)}
                      {cardBody(store)}
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        ))}
      </ul>
    </div>
  );
}
export default Favorites;
