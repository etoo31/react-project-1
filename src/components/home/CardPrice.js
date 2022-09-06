import React from "react";

export default function CardPrice(props) {
  /*We have two options to display course price:
  1- if we have a offer then we display offer price first and the actual offer with a line through it 
  2- if we have no offer then we'll display the actual price only
  */
    //if there is offer 
  if (props.offer) {
    return (
      <div className="d-flex">
        <span className="card-price">E£{props.offerPrice}</span>
        <span className="price-delete">E£{props.price}</span>
      </div>
    );
  } else {
    //if there is no offer
    return (
      <div className="d-flex">
        <span className="card-price">E£{props.price}</span>
      </div>
    );
  }
}
