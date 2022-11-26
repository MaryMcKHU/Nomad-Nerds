import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import Loading from "../Components/Placeholder.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useAuthContext } from "../users/Auth";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import no_info from "../images/no_info.png";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import Button from "react-bootstrap/Button";
import RightArrowIcon from "../images/right-arrow.png";
import LeftArrowIcon from "../images/left-arrow.png";
import HeartFilled from "../images/heart-filled.png";
import Heart from "../images/heart.png";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

function CategoryList() {
  const location = useLocation();
  const [categories, setCategories] = useState([]);
  const [businesses, setBusinesses] = useState([]);
  const [businessesLoading, setBusinessesLoading] = useState(true);
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
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
    }

  };


  async function getFavorites() {
    if (token) {
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
  }

  const favoriteList = favorites.map((favorite) => favorite.business_id);

  async function getCategories() {
    const fetchConfig = {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    };
    const categories_url = `${process.env.REACT_APP_API_YELP}/api-yelp/businesses/categories/?location=${cityAndState}&quantity=1`;
    const response = await fetch(categories_url, fetchConfig);
    if (response.ok) {
      const data = await response.json();
      setCategories(data["categories"]);
    }
    await setCategoriesLoading(false);
  }

  function fetchBusinesses(category) {
    const fetchConfig = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    const business_url = `${process.env.REACT_APP_API_YELP}/api-yelp/businesses/list?category=${category}&location=${cityAndState}&quantity=1`;
    return fetch(business_url, fetchConfig);
  }

  function getBusinesses() {
    if (categories && categories.length > 0) {
      Promise.all(
        categories.slice(0, 5).map((category) =>
          fetchBusinesses(category[0], city)
            .then((res) => res.json())
            .then((data) => ({ [category[1]]: data }))
        )
      ).then(function (data) {
        setBusinessesLoading(false);
        setBusinesses(data);
      });
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
      method: "POST",
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

  useEffect(() => {
    getFavorites();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    getCategories();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    getBusinesses();
  }, [categories]); // eslint-disable-line react-hooks/exhaustive-deps

  if (
    (categoriesLoading === false && categories.length === 0) ||
    (businessesLoading === false && businesses.length === 0)
  ) {
    return (
      <div className="text-center">
        <img
          src={no_info}
          style={{ height: 400, marginTop: 100 }}
          alt="no_info"
        />
        <h1>Can't find any businesses in {location.state.city.city}</h1>
        <p style={{ marginBottom: 250 }} className="large fw-bold mt-2 pt-1">
          Back to{" "}
          <a href="/" className="link-danger">
            Home
          </a>
        </p>
      </div>
    );
  } else if (businessesLoading === true) {
    return <Loading />;
  }

  const cardImage = (store) => {
    return (
      <div>
        <Card.Img
          variant="top"
          src={store.image_url}
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
          {favoriteList.includes(store.id) ? (
            <img
              alt="filled-heart"
              src={HeartFilled}
              height={22}
              onClick={() => deleteFavorite(store.id)}
            ></img>
          ) : (
            <img
              alt="heart-outline"
              src={Heart}
              height={22}
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
            ></img>
          )}
        </button>
      </div>
    );
  };

  const cardTitle = (store) => {
    return (
      <Card.Title style={{ fontWeight:"bold", fontSize:"18px" }}>
        <Row>
          <div>{store.name}</div>
          <div style={{ color:"green", fontSize:"14px" }}>
            {store.price ? store.price : " "}
          </div>
        </Row>
        {store.rating
          ? [...Array(Math.floor(store.rating))].map((_, i) => (
              <span key={i}>
                <BsStarFill size="0.8em" color="black" />
              </span>
            ))
          : ""}
        {store.rating ? (
          String(store.rating).slice(-2) === ".5" ? (
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
        {store.location.display_address[0]}
        <br />
        {store.location.display_address[1]}
        <br />
        {store.location.display_address[2]}
      </Card.Text>
    );
  };

  return (
    <ul>
      <h1 className="cat-list-header">
        Things to do in {city.replace("%20", " ").replace("%20", " ")}
        {state ? ", " + location.state.city.admin_name : " "}
      </h1>
      {businesses.map((business, index) => (
        <div key={index}>
          <Container className="container-fluid" style={{ maxWidth: 1215 }}>
            <h1
              className="card-title"
            >
              {Object.keys(business)}
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
                {Object.values(business)[0]
                  .slice(0, 15)
                  .map((store, idx) => (
                    <Col
                      key={store.id || store}
                      itemID={store.id || store}
                      title={store.id || store}
                      className="col-3"
                    >
                      <Card
                        style={{
                          width: "16rem",
                          border: "none",
                          marginTop: 15,
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
export default CategoryList;
