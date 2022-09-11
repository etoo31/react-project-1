import React from "react";
import { useState } from "react";

function InnerCard(props) {
  const [favorite, setFavorite] = useState(false);
  const toggleFavorite = () => {
    setFavorite(!favorite);
  };
  const courseOverView = props.overview.map((overview, index) => (
    <div key={index} className="overview d-flex">
      <div className="correct">
        <i className="correct-icon fa-solid fa-check"></i>
      </div>
      <div>{overview}</div>
    </div>
  ));
  return (
    <div className="container inner-card">
      <div className="container inner-card-container">
        <div className="course-title">{props.title}</div>
        <div className="last-update">
          Last update{" "}
          <span className="last-update-date">{props.lastUpdate}</span>
        </div>
        <div className="total-hours">
          {props.totalLength} . All levels . Subtitles
        </div>
        <div className="course-description">{props.Introduction}</div>
        <div className="course-overview">
          <div className="container">{courseOverView}</div>
        </div>
        <div className="d-flex">
          <button className="inner-card-button">Add to cart</button>
          <div className="heart-container">
            <div onClick={toggleFavorite}>
              {favorite ? (
                <i className="favorite fa-solid fa-heart"></i>
              ) : (
                <i className="favorite fa-regular fa-heart"></i>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="arrow-container m-auto">
        <div className="arrow"></div>
      </div>
    </div>
  );
}

export default InnerCard;
