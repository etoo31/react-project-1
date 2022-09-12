import React, { useState } from "react";
import { Sticky } from "react-sticky";
import CardRating from "../CardRating";
import "../course-page/css/HeadSection.css";
import { StickyContainer } from "react-sticky";

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
    <>
      <div className="container-fluid d-flex head-section-container">
        <div className="container-fluid header-container">
          <div className="container-fluid head-section-course-img">
            <img
              src={props.image}
              alt={`${props.topic}`}
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
            <span className="created-by-author-company">{name} The Codex</span>
          </div>
          <div className="container d-flex last-world-subtitle">
            <span>
              <i className="explanation-mark fa-solid fa-circle-exclamation"></i>
              <span className="last-updated">{props.lastUpdate}</span>
            </span>
            <span>
              <i className="world-icon fa-solid fa-globe"></i>
              <span>English</span>
            </span>
            <span>
              <i className="subtitle fa-regular fa-closed-captioning"></i>
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
      <div className="header-course-card">
        <div className="container header-card-course-img-container">
          <img
            src={props.image}
            alt={`${props.topic}`}
            className="img-fluid header-card-course-img"
          ></img>
        </div>
      </div>
      <div className="container sticky-container">
        {props.offer ? (
          <div className="card-price-container">
            <div className="card-course-price">E£{props.offerPrice}</div>
            <div className="card-course-price-delete">E£{props.price}</div>
          </div>
        ) : (
          //if there is no offer
          <div className="card-price-container">
            <div className="card-course-price">E£{props.price}</div>
          </div>
        )}
        <div className="card-add-to-cart">
          <button className="card-add-to-cart-btn">Add To Cart</button>
          <div className="card-heart-container">
            <div onClick={toggleFavorite}>
              {favorite ? (
                <i className="card-favorite fa-solid fa-heart"></i>
              ) : (
                <i className="card-favorite fa-regular fa-heart"></i>
              )}
            </div>
          </div>
        </div>
        <div className="card-buy-now">
          <button className="card-buy-now-btn">Buy Now</button>
        </div>
        <div className="money-back">30-Day Money-Back Guarantee</div>
        <div className="course-include container">
          <div className="course-include-title">This course includes:</div>
          <div>
            <span>
              <i className="play-icon fa-solid fa-circle-play"></i>
            </span>
            <span>14 hours on-demand video</span>
          </div>
          <div>
            <span>
              <i className="file-icon fa-solid fa-file"></i>
            </span>
            <span>1 article</span>
          </div>
          <div>
            <span>
              <i className="download-icon fa-solid fa-file-arrow-down"></i>
            </span>
            <span>3 downloadable resources</span>
          </div>
          <div>
            <span>
              <i className="infinity-icon fa-solid fa-infinity"></i>
            </span>
            <span>Full lifetime access</span>
          </div>
          <div>
            <span>
              <i className="mobile-icon fa-solid fa-mobile"></i>
            </span>
            <span>Access on mobile and TV</span>
          </div>
          <div>
            <span>
              <i className="trophy-icon fa-solid fa-trophy"></i>
            </span>
            <span>Certificate of completion</span>
          </div>
        </div>
        <div className="container try-udemy-business">
          <div className="five-or-more">Training 5 or more people?</div>
          <div className="team-access">
            Get your team access to 17,000+ top Udemy courses anytime, anywhere.
          </div>
          <div>
            <button className="udemy-business-btn">Try Udemy Business</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeadSection;
