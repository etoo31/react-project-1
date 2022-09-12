import React from "react";
import "./css/Fixednav.css";
function CourseFixedNav(props) {
  let priceElement;
  if (props.offer) {
    priceElement = (
      <div className="course-price-container">
        <div className="course-price">E£{props.offerPrice}</div>
        <div className="course-price-delete">E£{props.price}</div>
      </div>
    );
  } else {
    //if there is no offer
    priceElement = (
      <div className="course-price-container">
        <div className="course-price">E£{props.price}</div>
      </div>
    );
  }
  return (
    <div className="container-fluid fixed-nav">
      <div className="container-fluid mx-2">
        <div className="course-title-nav">{props.title}</div>
        <div className="rating-count-student">
          <span className="rating">{props.rating}</span>
          <span>
            <i className="star fa-solid fa-star mx-1"></i>
          </span>
          <span className="rating-count">({props.ratingCount})</span>
          <span className="number-of-students mx-2">19,718 students</span>
        </div>
        {priceElement}
        <button className="nav-buy-now-btn">Buy Now</button>
      </div>
    </div>
  );
}

export default CourseFixedNav;
