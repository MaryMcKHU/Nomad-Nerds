import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useAuthContext } from "../users/Auth";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import no_info from "../images/no_info.png";

function CityList() {
  const location = useLocation();
  const [rankedCities, setRankedCities] = useState([]);
  const [businesses, setBusinesses] = useState([]);
  const [businessesLoading, setBusinessesLoading] = useState(true);
  const [citiesLoading, setCitiesLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const { token } = useAuthContext();
  const category = location.state.category;
  const cities = location.state.cities;
  const formatted_cities = cities
    .map((city) => [city.city, city.admin_name, city.country].join(","))
    .join(";");
  const navigate = useNavigate();

  async function getFavorites() {
    if (token) {
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
  }}

  async function getCities() {
    const fetchConfig = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    const url = `${process.env.REACT_APP_API_YELP}/api-yelp/businesses/categories/search/?categories=${category.alias}&quantity=2&cities=${formatted_cities}`;
    const response = await fetch(url, fetchConfig);

    if (response.ok) {
      const data = await response.json();
      setRankedCities(data["cities"]);
    }
    setCitiesLoading(false);
  }

  function fetchBusinesses(cat, city) {
    const fetchConfig = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    const url = `${process.env.REACT_APP_API_YELP}/api-yelp/businesses/list?category=${cat}&location=${city}&quantity=1`;
    return fetch(url, fetchConfig);
  }

  function getBusinesses() {
    if (rankedCities && rankedCities.length > 0) {
      Promise.all(
        rankedCities.map((city) =>
          fetchBusinesses(category.alias, city)
            .then((res) => res.json())
            .then((data) => ({ [city.replaceAll(",", ", ")]: data }))
        )
      ).then(function(data) {setBusinessesLoading(false); setBusinesses(data)});
    }
  }
  async function addFavorite(
    id,
    business_name,
    business_image,
    business_rating,
    business_price,
    business_display_address,
    business_city,
    business_state
  ) {
    const url = `${process.env.REACT_APP_USER}/user/favorites/`;
    let content = {
      business_id: id,
      business_name,
      business_image,
      business_rating,
      business_price,
      business_display_address,
      business_city,
      business_state,
    };
    const fetchConfig = {
      credentials: "include",
      method: "post",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(content),
    };

    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      if (favorites.includes(id) === false) {
        setFavorites([...favorites, content]);
      }
    }
    if (response.status === 403) {
      if (
        window.confirm(
          "You cannot save favorites because you are not currently logged in. Would you like to log in?"
        )
      ) {
        navigate("/user/login/");
      } else {
      }
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

  const favoriteList = favorites.map((favorite) => favorite.business_id);

  useEffect(() => {
    getFavorites();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    getCities();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    getBusinesses();
  }, [rankedCities]); // eslint-disable-line react-hooks/exhaustive-deps

  if (
    (citiesLoading === false && rankedCities.length === 0) ||
    (businessesLoading === false && businesses.length === 0)
  ) {
    return (
      <div className="text-center">
        <img
          src={no_info}
          style={{ height: 400, marginTop: 100 }}
          alt="no_info"
        />
        <h1>Can't find any {category.alias} businesses</h1>
        <p style={{ marginBottom: 250 }} className="large fw-bold mt-2 pt-1">
          Back to{" "}
          <a href="/" className="link-danger">
            Home
          </a>
        </p>
      </div>
    );
  } else if (businessesLoading === true) {
    return (
      <div className="text-center">
        <img
          src="https://theimaa.com.au/wp-content/uploads/2022/06/IMAA_Plan_Around_Globe_Gif_one.gif"
          style={{ height: 350, marginTop: 100, marginBottom: 30 }}
          alt="loading"
        />
        <h1 style={{ marginBottom: 100 }}>Loading...</h1>
      </div>
    );
  }

  return (
    <ul>
      <h1
        style={{
          fontFamily: "verdana",
          fontWeight: "bold",
          fontSize: "40px",
          textAlign: "center",
          paddingTop: 30,
        }}
      >
        {category.title}
      </h1>
      {businesses.map((business, index) => (
        <div key={index}>
          <Container className="container-fluid">
            <h1
              className="card-title"
              style={{
                fontFamily: "verdana",
                fontWeight: "bold",
                padding: 20,
                paddingTop: 90,
              }}
            >
              {Object.keys(business)}
            </h1>
            <Row
              className="flex-nowrap flex-row"
              style={{ overflowX: "scroll" }}
            >
              {Object.values(business)[0]
                .slice(0, 15)
                .map((store, idx) => (
                  <Col key={idx} className="col-3">
                    <Card style={{ width: "18rem" }}>
                      <Card.Img
                        variant="top"
                        src={store.image_url}
                        onError={(e) => (e.target.src = no_info)}
                        height={250}
                      />
                      <Card.Body>
                        <Card.Title style={{ fontWeight: "bold" }}>
                          <Row
                            style={{
                              flexDirection: "row",
                              alignItems: "flex-end",
                            }}
                          >
                            <div>{store.name}</div>
                            <div style={{ color: "green", fontSize: "16px" }}>
                              {store.price ? store.price : ""}
                            </div>
                          </Row>
                          {store.rating
                            ? [...Array(Math.floor(store.rating))].map(
                                (_, i) => (
                                  <span key={i}>
                                    <BsStarFill
                                      size="1em"
                                      color="rgb(222, 190, 60)"
                                    />
                                  </span>
                                )
                              )
                            : ""}
                          {store.rating ? (
                            String(store.rating).slice(-2) === ".5" ? (
                              <BsStarHalf
                                size="1em"
                                color="rgb(222, 190, 60)"
                              />
                            ) : (
                              ""
                            )
                          ) : (
                            ""
                          )}
                        </Card.Title>
                        <Card.Text>
                          {store.location.display_address[0]}
                          <br />
                          {store.location.display_address[1]}
                          <br />
                          {store.location.display_address[2]}
                          <Button variant="light" style={{ float: "right" }}>
                            {favoriteList.includes(store.id) ? (
                              <AiFillHeart
                                size="1.8em"
                                style={{ color: "red" }}
                                onClick={() => deleteFavorite(store.id)}
                              />
                            ) : (
                              <AiOutlineHeart
                                size="1.8em"
                                onClick={() =>
                                  addFavorite(
                                    store.id,
                                    store.name,
                                    store.image_url,
                                    store.rating,
                                    store.price,
                                    store.location.display_address,
                                    store.location.city,
                                    store.location.state
                                  )
                                }
                              />
                            )}
                          </Button>
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
export default CityList;
