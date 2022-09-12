import React from "react";
import "./css/StudentFeedBack.css";

function StudentFeedBack() {
  return (
    <div className="students-feed-back-container">
      <div className="students-feed-back-text">Stduents feedback</div>
      <div className="total-rate-tube-container">
        <div className="feedback-number-stars">
          <div className="feedback-number">4.4</div>
          <div className="feedback-star-container d-flex">
            <i class="feedback-star fa-solid fa-star"></i>
            <i class="feedback-star fa-solid fa-star"></i>
            <i class="feedback-star fa-solid fa-star"></i>
            <i class="feedback-star fa-solid fa-star"></i>
            <i class="feedback-star fa-solid fa-star-half-stroke"></i>
          </div>
          <div className="feedback-ratting-text">Course rating</div>
        </div>
        <div className="tube-feedback">
          <div className="tube-and-tube-stars-container d-flex">
            <div className="tube">
              <div className="tube1"></div>
            </div>
            <div className="tube-stars-contianer">
              <i class="tube-stars fa-solid fa-star"></i>
              <i class="tube-stars fa-solid fa-star"></i>
              <i class="tube-stars fa-solid fa-star"></i>
              <i class="tube-stars fa-solid fa-star"></i>
              <i class="tube-stars fa-solid fa-star"></i>
            </div>
            <div className="tube-precentage">47%</div>
          </div>
          <div className="tube-and-tube-stars-container d-flex">
            <div className="tube">
              <div className="tube2"></div>
            </div>
            <div className="tube-stars-contianer">
              <i class="tube-stars fa-solid fa-star"></i>
              <i class="tube-stars fa-solid fa-star"></i>
              <i class="tube-stars fa-solid fa-star"></i>
              <i class="tube-stars fa-solid fa-star"></i>
              <i class="tube-stars fa-solid fa-star-half-stroke"></i>
            </div>
            <div className="tube-precentage">37%</div>
          </div>
          <div className="tube-and-tube-stars-container d-flex">
            <div className="tube">
              <div className="tube3"></div>
            </div>
            <div className="tube-stars-contianer">
              <i class="tube-stars fa-solid fa-star"></i>
              <i class="tube-stars fa-solid fa-star"></i>
              <i class="tube-stars fa-solid fa-star"></i>
              <i class="tube-stars fa-regular fa-star"></i>
              <i class="tube-stars fa-regular fa-star"></i>
            </div>
            <div className="tube-precentage">15%</div>
          </div>
          <div className="tube-and-tube-stars-container d-flex">
            <div className="tube">
              <div className="tube4"></div>
            </div>
            <div className="tube-stars-contianer">
              <i class="tube-stars fa-solid fa-star"></i>
              <i class="tube-stars fa-solid fa-star"></i>
              <i class="tube-stars fa-regular fa-star"></i>
              <i class="tube-stars fa-regular fa-star"></i>
              <i class="tube-stars fa-regular fa-star"></i>
            </div>
            <div className="tube-precentage">3%</div>
          </div>
          <div className="tube-and-tube-stars-container d-flex">
            <div className="tube">
              <div className="tube5"></div>
            </div>
            <div className="tube-stars-contianer">
              <i class="tube-stars fa-solid fa-star"></i>
              <i class="tube-stars fa-regular fa-star"></i>
              <i class="tube-stars fa-regular fa-star"></i>
              <i class="tube-stars fa-regular fa-star"></i>
              <i class="tube-stars fa-regular fa-star"></i>
            </div>
            <div className="tube-precentage">2%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentFeedBack;
