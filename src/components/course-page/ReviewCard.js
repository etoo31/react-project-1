import React from "react";
import { useState } from "react";

function ReviewCard({ review }) {
  console.log(review);
  const [like, toggleLike] = useState(false);
  const [disLike, toggleDisLike] = useState(false);
  const disLikeToggle = () => toggleDisLike(!disLike);
  const likeToggle = () => toggleLike(!like);
  const negativeRating = 5 - review.rating;
  const postiveRating = review.rating;
  const starArray = new Array();
  for (let i = 1; i <= postiveRating; i++) {
    starArray.push(<i className="review-card-rating fa-solid fa-star"></i>);
  }
  for (let i = 1; i <= negativeRating; i++) {
    starArray.push(<i class="review-card-rating fa-regular fa-star"></i>);
  }
  return (
    <div class="review-card-container">
      <div className="cirlce-review">
        <div className="circle-review-name">
          {review.name[0]}
          {review.name[1]}
        </div>
      </div>
      <div className="name-rating-comments-helpful-like-container">
        <div className="reviewer-name">{review.name}</div>
        <div className="review-card-star-container">{starArray}</div>
        <div className="review-comment">{review.content}</div>
        <div className="helpful">Was the review helpful?</div>
        <div className="like-dislike-report">
          <div className="like-container" onClick={likeToggle}>
            {like ? (
              <i class="like-dislike fa-solid fa-thumbs-up"></i>
            ) : (
              <i class="like-dislike fa-regular fa-thumbs-up"></i>
            )}
          </div>
          <div className="like-container" onClick={disLikeToggle}>
            {disLike ? (
              <i class="like-dislike fa-solid fa-thumbs-down"></i>
            ) : (
              <i class="like-dislike fa-regular fa-thumbs-down"></i>
            )}
          </div>
          <div className="review-Report">Report</div>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
