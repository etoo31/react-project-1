import React from "react";

export default function CardImg(props) {
  /**
   * it conatins only div with class course-img and image inside it
   */
  return (
    <div className="course-img">
      <img src={props.image} alt={props.topic} className="img-fluid" />
    </div>
  );
}
