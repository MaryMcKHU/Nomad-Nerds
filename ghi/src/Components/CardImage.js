import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import no_info from "../images/no_info.png";
import Card from "react-bootstrap/Card";
import HeartFilled from "../images/heart-filled.png";
import Heart from "../images/heart.png";
import { useAuthContext } from "../users/Auth";

function CardImage(store) {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();
  const { token } = useAuthContext();

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
            src={HeartFilled}
            height={25}
            onClick={() => deleteFavorite(store.id)}
          ></img>
        ) : (
          <img
            src={Heart}
            height={25}
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
}
export default CardImage;
