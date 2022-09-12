import React from "react";
import "./css/WhatYouWillLearn.css";

function WhatYouWillLearn(props) {
  const courseOverView = props.overview.map((overview, index) => (
    <div key={index} className="will-learn-overview">
      <div className="overview-correct">
        <i className="overview-correct-icon fa-solid fa-check"></i>
      </div>
      <div>{overview}</div>
    </div>
  ));
  return (
    <div className="container will-learn-container">
      <div className="will-learn">What you'll learn</div>
      <div className="will-over-view">{courseOverView}</div>
    </div>
  );
}

export default WhatYouWillLearn;
