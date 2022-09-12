import React from "react";
import { useState } from "react";
import "./css/Description.css";
function Description(props) {
  const [showMore, toggleShow] = useState(false);
  const toggleShowMore = () => {
    toggleShow(!showMore);
    console.log(showMore);
  };
  return (
    <div className="container description-container">
      <div className="description-text">Description</div>
      <p>
        {props.description.map((descripe) => {
          return <span key={descripe}>{descripe}</span>;
        })}
      </p>
      {showMore ? (
        <button className="description-show-more-btn" onClick={toggleShowMore}>
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
  );
}

export default Description;
