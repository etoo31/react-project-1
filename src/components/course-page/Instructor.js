import React, { useState } from "react";
import "./css/Instructor.css";
function Instructor({ instructor }) {
  const [showMore, toggleShow] = useState(false);
  const toggleShowMore = () => {
    toggleShow(!showMore);
    console.log(showMore);
  };
  return (
    <div className="instructors-container">
      <div className="instructors-text">Instructors</div>
      <div className="instructor-container">
        <div className="instructor-name">{instructor.name}</div>
        <div className="instructor-intro">{instructor.Intro}</div>
        <div className="instructor-image-rate-students-reviews-courses-container">
          <div className="instructor-image">
            <img
              src={instructor.Image}
              alt={instructor.name}
              className="img-fluid"
            ></img>
          </div>
          <div className="instructor-rate-students-reviews-courses-container">
            <div className="instructor-info-container">
              <i className="instructor-icon fa-solid fa-star"></i>
              <span className="instructor-info-text">
                {instructor.Rating} Instructor Rating
              </span>
            </div>
            <div className="instructor-info-container">
              <i className="instructor-icon fa-solid fa-medal"></i>
              <span className="instructor-info-text">
                {instructor.reviewsNumber} Reviews
              </span>
            </div>
            <div className="instructor-info-container">
              <i className="instructor-icon fa-solid fa-school"></i>
              <span className="instructor-info-text">
                {instructor.studentsNumber} students
              </span>
            </div>
            <div className="instructor-info-container">
              <i class="instructor-icon fa-solid fa-circle-play"></i>
              <span className="instructor-info-text">
                {instructor.coursesNumber} courses
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container instructor-description-container">
        <div className="description-text">Description</div>
        <p>{instructor.description}</p>
        {showMore ? (
          <button
            className="description-show-more-btn"
            onClick={toggleShowMore}
          >
            Show Less
          </button>
        ) : (
          <div className="hide-description">
            <button
              className="description-show-more-btn-fade"
              onClick={toggleShowMore}
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Instructor;
