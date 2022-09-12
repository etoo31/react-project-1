import React from "react";

export default function CardRating(props) {
  //full stars
  let fullStars = Math.floor(props.rating);
  //half stars is not included till now
  let halfStar = false;
  //empty stars = 5- number Of full stars
  let emptyStars = 5 - fullStars;
  //if rating - full stars not equal zero
  if (props.rating - fullStars != 0) {
    //there is a half star
    halfStar = true;
    //half star is counted as one and we have to delete it from empty stars
    emptyStars -= 1;
  }
  //make an array of stars
  let stars = new Array();
  let index = 0;
  for (let i = 0; i < fullStars; i++) {
    //push the full stars in it
    stars.push(<i key={index} className="star fa-solid fa-star"></i>);
    index++;
  }
  if (halfStar) {
    //push the half star in it
    stars.push(
      <i key={index} className="star fa-solid fa-star-half-stroke"></i>
    );
    index++;
  }
  for (let i = 0; i < emptyStars; i++) {
    //push the empty stars in it
    stars.push(<i key={index} className=" star fa-regular fa-star"></i>);
    index++;
  }
  /*card rating consists of :
    1- course rating 
    2- array of stars*/
  return (
    <div className="d-flex ratting-container">
      <span className="rating">{props.rating}</span>
      <span>{stars}</span>
      {props.children}
    </div>
  );
}
