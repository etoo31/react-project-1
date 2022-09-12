import React, { useState } from "react";
import CardRating from "../CardRating";
import "../course-page/css/HeadSection.css";

function HeadSection(props) {
  const [favorite, setFavorite] = useState(false);
  const toggleFavorite = () => {
    setFavorite(!favorite);
  };
  let priceElement;
  if (props.offer) {
    priceElement = (
      <div className="header-price-container">
        <div className="header-course-price">E£{props.offerPrice}</div>
        <div className="header-course-price-delete">E£{props.price}</div>
      </div>
    );
  } else {
    //if there is no offer
    priceElement = (
      <div className="header-price-container">
        <div className="header-course-price">E£{props.price}</div>
      </div>
    );
  }
  const { name } = props.instructor;
  return (
    <div className="container-fluid d-flex head-section-container">
      <div className="container header-container">
        <div className="container-fluid head-section-course-img">
          <img
            src={props.image}
            alt={`${props.topic} image`}
            className="img-fluid head-seaction-img"
          ></img>
        </div>
        <div className="header-course-title my-2">{props.title}</div>
        <div className="header-course-introduction my-2">
          {props.Introduction}
        </div>
        <CardRating {...props}>
          <span className="rating-count mx-2">({props.ratingCount})</span>
          <span className="number-of-students">19,718 students</span>
        </CardRating>
        <div className="created-by">
          Created by{" "}
          <span class="created-by-author-company">{name} The Codex</span>
        </div>
        <div className="container d-flex last-world-subtitle">
          <span>
            <i className="explanation-mark fa-solid fa-circle-exclamation"></i>
            <span className="last-updated">{props.lastUpdate}</span>
          </span>
          <span>
            <i class="world-icon fa-solid fa-globe"></i>
            <span>English</span>
          </span>
          <span>
            <i class="subtitle fa-regular fa-closed-captioning"></i>
            <span>English</span>
          </span>
        </div>
        {priceElement}
        <div className="header-buy-now">
          <button className="header-buy-now-btn">Buy Now</button>
          <div className="header-heart-container">
            <div onClick={toggleFavorite}>
              {favorite ? (
                <i className="header-favorite fa-solid fa-heart"></i>
              ) : (
                <i className="header-favorite fa-regular fa-heart"></i>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeadSection;
