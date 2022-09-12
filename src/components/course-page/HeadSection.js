import React from "react";
import CardRating from "../CardRating";
import "../course-page/css/HeadSection.css";
function HeadSection(props) {
  const { name } = props.instructor;
  return (
    <div className="container-fluid d-flex head-section-container">
      <div className="container header-container">
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
        <div className="container d-flex space-between">
          <span>
            <i className="explanation-mark fa-solid fa-circle-exclamation"></i>
            <span className="last-updated">{props.lastUpdate}</span>
          </span>
          <span>
            <i class="world-icon fa-solid fa-globe mx-2"></i>
            <span>English</span>
          </span>
          <span>
            <i class="fa-regular fa-closed-captioning mx-2"></i>
            <span>English</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeadSection;
