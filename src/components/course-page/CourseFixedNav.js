import React from "react";
import "./css/Fixednav.css";
function CourseFixedNav(props) {
  return (
    <div className="container-fluid fixed-nav">
      <div className="container-fluid mx-2">
        <div className="course-title-nav">{props.title}</div>
        <div className="d-flex">
          <span className="rating">{props.rating}</span>
          <span>
            <i className="star fa-solid fa-star mx-1"></i>
          </span>
          <span className="rating-count">({props.ratingCount})</span>
          <span className="number-of-students mx-2">19,718 students</span>
        </div>
      </div>
    </div>
  );
}

export default CourseFixedNav;
