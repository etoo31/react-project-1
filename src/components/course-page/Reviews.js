import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./css/Review.css";
import ReviewCard from "./ReviewCard";
function Reviews({ reviews }) {
  const [unShownReveiws, setUnShownReveiws] = useState([]);
  const [shownReveiws, setShownReveiws] = useState([]);
  const [showMore, toggleShowMore] = useState(false);
  const toggleShow = () => {
    toggleShowMore(!showMore);
  };
  useEffect(() => {
    const array1 = new Array();
    const array2 = new Array();
    for (let i = 0; i < reviews.length; i++) {
      if (i <= 2) {
        array1.push(<ReviewCard review={reviews[i]} />);
      } else array2.push(<ReviewCard review={reviews[i]} />);
    }
    setShownReveiws(array1);
    setUnShownReveiws(array2);
  }, [reviews]);
  return (
    <div className="reviews-container">
      <div className="reviews-text">Reviews</div>
      <form className="review-search-form">
        <input
          type="search"
          placeholder="search reviews"
          className="review-search-input"
        ></input>
        <button className="review-search-button">
          <i class="review-search-icon fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      {shownReveiws}
      {showMore ? unShownReveiws : ""}
      <button class="review-show-more-btn" onClick={toggleShow}>
        Show more
      </button>
    </div>
  );
}

export default Reviews;
